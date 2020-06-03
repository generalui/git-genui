"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "BaseClass",
      "compactFlattenAll",
      "merge",
      "Promise",
      "compactFlatten",
      "Object",
      "objectWithout",
      "log",
      "colors",
      "pluralize",
      "pad"
    ],
    [global, require("./StandardImport"), { colors: require("colors") }],
    (
      BaseClass,
      compactFlattenAll,
      merge,
      Promise,
      compactFlatten,
      Object,
      objectWithout,
      log,
      colors,
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
        this.getGitCommitMessage = function({
          type,
          story,
          message,
          coauthors,
          storyStatus
        }) {
          return compactFlattenAll(
            type != null ? type : "(type)",
            ": ",
            Caf.exists(story) && story.id
              ? `[#${Caf.toString(story.id)}]${Caf.toString(
                  storyStatus && storyStatus !== story.status
                    ? ` (${Caf.toString(storyStatus)})`
                    : undefined
                )} `
              : undefined,
            message != null ? message : "(message)",
            coauthors
              ? "\n\n\n" +
                  Caf.array(
                    coauthors,
                    coauthor => `Coauthored-by: ${Caf.toString(coauthor)}`
                  ).join("\n")
              : undefined
          ).join("");
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
        this.commit = options =>
          Promise.then(() =>
            SimpleGit.commit(this.getGitCommitMessage(options))
          );
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
            return SimpleGit.raw(["config", "user.email"]);
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
          return Promise.all([this.status, this.origin, this.remotes])
            .tap(([status, origin, remotes]) => {
              let outputOne, staged, unstaged, untracked;
              if (Caf.exists(options) && options.verbose) {
                log({
                  verbose: {
                    projectFolder: require("./ProjectConfig").projectFolder,
                    projectKey: require("./UserConfig").userConfig.projectKey,
                    git: { remotes, status }
                  }
                });
              }
              log(`Origin:        ${Caf.toString(colors.green(origin))}`);
              log(
                `Branch:        ${Caf.toString(colors.green(status.current))}`
              );
              log(
                `Tracking:      ${Caf.toString(colors.green(status.tracking))}`
              );
              outputOne = ({ path, status }) =>
                `  ${Caf.toString(pad(status + ":", 12))} ${Caf.toString(
                  path
                )}`;
              ({ staged, unstaged, untracked } = status);
              if (staged.length > 0) {
                log(
                  `\nChanges to be committed:       ${Caf.toString(
                    colors.grey(
                      `(${Caf.toString(pluralize("file", staged.length))})`
                    )
                  )}`
                );
                log(
                  Caf.array(staged, file =>
                    file.status === "modified" && file.index !== "modified"
                      ? colors.yellow(outputOne(file))
                      : colors.green(outputOne(file))
                  )
                    .sort()
                    .join("\n")
                );
              }
              if (unstaged.length > 0) {
                log(
                  `\nChanges not staged to commit:  ${Caf.toString(
                    colors.grey(
                      `(${Caf.toString(pluralize("file", unstaged.length))})`
                    )
                  )}`
                );
                log(
                  colors.red(
                    Caf.array(unstaged, file => outputOne(file))
                      .sort()
                      .join("\n")
                  )
                );
              }
              if (untracked.length > 0) {
                log(
                  `\nUntracked files:               ${Caf.toString(
                    colors.grey(
                      `(${Caf.toString(pluralize("file", untracked.length))})`
                    )
                  )}`
                );
                log(
                  colors.red(
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
