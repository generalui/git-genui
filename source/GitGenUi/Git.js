"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "BaseClass",
      "Promise",
      "merge",
      "getCommitMessage",
      "compactFlatten",
      "Object",
      "objectWithout",
      "log",
      "projectConfig",
      "userConfig",
      "Style",
      "pluralize",
      "pad"
    ],
    [global, require("./StandardImport"), { Style: require("./Style") }],
    (
      BaseClass,
      Promise,
      merge,
      getCommitMessage,
      compactFlatten,
      Object,
      objectWithout,
      log,
      projectConfig,
      userConfig,
      Style,
      pluralize,
      pad
    ) => {
      let SimpleGit, Git;
      SimpleGit = require("simple-git/promise")();
      return (Git = Caf.defClass(class Git extends BaseClass {}, function(
        Git,
        classSuper,
        instanceSuper
      ) {
        let statusCodes, decodeStatus;
        this.getGitConfig = function() {
          return Promise.then(() => SimpleGit.listConfig()).then(
            ({ all }) => all
          );
        };
        this.normalizeGitStatus = function(status) {
          let staged, unstaged, untracked;
          if (!status.files) {
            return status;
          }
          staged = [];
          unstaged = [];
          untracked = [];
          Caf.each2(status.files, file => {
            if (file.index && file.index !== "untracked") {
              staged.push(
                merge(file, { status: file.workingDir || file.index })
              );
            }
            return file.workingDir
              ? file.workingDir === "untracked"
                ? untracked.push(merge(file, { status: file.workingDir }))
                : unstaged.push(merge(file, { status: file.workingDir }))
              : undefined;
          });
          return {
            staged,
            unstaged,
            untracked,
            current: status.current,
            tracking: status.tracking,
            ahead: status.ahead,
            behind: status.behind
          };
        };
        this.commit = options => {
          let generatedCommitMessage;
          generatedCommitMessage = getCommitMessage(options);
          return Promise.then(() =>
            SimpleGit.commit(generatedCommitMessage)
          ).then(result => merge(result, { generatedCommitMessage }));
        };
        this.stage = function(...files) {
          return Promise.then(() => SimpleGit.add(compactFlatten(files)));
        };
        this.unstage = function(...files) {
          return Promise.then(() =>
            SimpleGit.reset(["head", ...compactFlatten(files)])
          );
        };
        this.classGetter({
          email: function() {
            return SimpleGit.raw(["config", "user.email"]).then(email =>
              email.trim()
            );
          },
          remotes: function() {
            return Promise.then(() => SimpleGit.getRemotes(true));
          },
          origin: function() {
            return this.remotes.then(remotes =>
              Caf.find(
                remotes,
                remote => remote.refs.fetch,
                remote => remote.name === "origin"
              )
            );
          },
          aRemote: function() {
            return this.remotes.then(remotes => {
              let first, temp;
              first = undefined;
              return (temp = Caf.find(remotes, null, remote => {
                first != null ? first : (first = remote);
                return remote.name === "origin";
              })) != null
                ? temp
                : first;
            });
          },
          rawStatus: function() {
            return Promise.then(() => SimpleGit.status()).then(o =>
              Caf.object(Object.keys(o), k => {
                let status;
                status = o[k];
                return k === "files"
                  ? (status = Caf.array(status, file =>
                      merge(objectWithout(file, "working_dir"), {
                        index: decodeStatus(file.index),
                        workingDir: decodeStatus(file.working_dir)
                      })
                    ))
                  : status;
              })
            );
          },
          status: () => this.rawStatus.then(this.normalizeGitStatus)
        });
        statusCodes = {
          D: "deleted",
          C: "conflicted",
          R: "renamed",
          A: "added",
          M: "modified",
          "?": "untracked",
          " ": null
        };
        decodeStatus = function(statusCode) {
          return statusCodes[statusCode];
        };
        this.printStatus = function(options) {
          let unstagedColors, stagedColors;
          unstagedColors = {
            deleted: "red",
            conflicted: "magenta",
            added: "yellow",
            renamed: "blue",
            modified: "red",
            untracked: "red",
            staged: "green"
          };
          stagedColors = {
            deleted: "brightRed",
            conflicted: "brightMagenta",
            added: "brightYellow",
            renamed: "brightBlue",
            modified: "brightCyan",
            untracked: "brightGray",
            staged: "brightGreen"
          };
          return Promise.all([
            this.status,
            this.origin,
            this.remotes,
            this.email
          ])
            .tap(([status, origin, remotes, email]) => {
              let outputOne, staged, unstaged, untracked;
              if (Caf.exists(options) && options.verbose) {
                log({
                  verbose: {
                    projectFolder: projectConfig.projectFolder,
                    projectKey: userConfig.projectKey,
                    git: { remotes, status }
                  }
                });
              }
              if (origin != null) {
                log(`Origin:        ${Caf.toString(Style.green(origin))}`);
              } else {
                log("Remotes:");
                Caf.each2(remotes, ({ refs, name }) =>
                  log(
                    `  ${Caf.toString(pad(name + ":", 12))} ${Caf.toString(
                      Style.green(refs.fetch)
                    )}`
                  )
                );
              }
              log(
                `Branch:        ${Caf.toString(Style.green(status.current))}`
              );
              log(
                `Tracking:      ${Caf.toString(Style.green(status.tracking))}`
              );
              log(`Author:        ${Caf.toString(Style.green(email))}`);
              outputOne = ({ path, status }) =>
                `  ${Caf.toString(pad(status + ":", 12))} ${Caf.toString(
                  path
                )}`;
              ({ staged, unstaged, untracked } = status);
              if (staged.length > 0) {
                log(
                  `\nChanges to be committed:       ${Caf.toString(
                    Style.grey(
                      `(${Caf.toString(pluralize("file", staged.length))})`
                    )
                  )}`
                );
                log(
                  Caf.array(staged, file =>
                    file.status === "modified" && file.index !== "modified"
                      ? Style.yellow(outputOne(file))
                      : Style.green(outputOne(file))
                  )
                    .sort()
                    .join("\n")
                );
              }
              if (unstaged.length > 0) {
                log(
                  `\nChanges not staged to commit:  ${Caf.toString(
                    Style.grey(
                      `(${Caf.toString(pluralize("file", unstaged.length))})`
                    )
                  )}`
                );
                log(
                  Style.red(
                    Caf.array(unstaged, file => outputOne(file))
                      .sort()
                      .join("\n")
                  )
                );
              }
              if (untracked.length > 0) {
                log(
                  `\nUntracked files:               ${Caf.toString(
                    Style.grey(
                      `(${Caf.toString(pluralize("file", untracked.length))})`
                    )
                  )}`
                );
                log(
                  Style.red(
                    Caf.array(untracked, file => outputOne(file))
                      .sort()
                      .join("\n")
                  )
                );
              }
              return log("");
            })
            .then(([status]) => status);
        };
      }));
    }
  );
});
