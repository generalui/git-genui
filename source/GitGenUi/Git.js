"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "BaseClass",
      "Promise",
      "getGitCommitMessage",
      "compactFlatten",
      "Object",
      "merge",
      "objectWithout",
      "normalizeGitStatus",
      "log",
      "colors",
      "pluralize",
      "pad"
    ],
    [global, require("./StandardImport"), { colors: require("colors") }],
    (
      BaseClass,
      Promise,
      getGitCommitMessage,
      compactFlatten,
      Object,
      merge,
      objectWithout,
      normalizeGitStatus,
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
        this.commit = function(options) {
          return Promise.then(() =>
            SimpleGit.commit(getGitCommitMessage(options))
          );
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
          status: function() {
            return this.rawStatus.then(normalizeGitStatus);
          }
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
