"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "BaseClass",
      "CommitParser",
      "Promise",
      "merge",
      "getCommitMessage",
      "compactFlatten",
      "Object",
      "objectWithout",
      "log",
      "Date",
      "compactFlattenAll",
      "formattedInspect",
      "projectConfig",
      "userConfig",
      "Style",
      "pluralize",
      "pad"
    ],
    [global, require("./StandardImport"), { Style: require("./Style") }],
    (
      BaseClass,
      CommitParser,
      Promise,
      merge,
      getCommitMessage,
      compactFlatten,
      Object,
      objectWithout,
      log,
      Date,
      compactFlattenAll,
      formattedInspect,
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
        let statusCodes, decodeStatus, commitParser, normalizeListLogLine;
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
        this.loadStatus = function(options) {
          let status, origin, remotes, email;
          if (Caf.exists(options)) {
            status = options.status;
            origin = options.origin;
            remotes = options.remotes;
            email = options.email;
          }
          return Promise.deepAll({
            status: status != null ? status : (status = this.status),
            origin: origin != null ? origin : (origin = this.origin),
            remotes: remotes != null ? remotes : (remotes = this.remotes),
            email: email != null ? email : (email = this.email)
          }).then(loaded => merge(options, loaded));
        };
        commitParser = new CommitParser();
        normalizeListLogLine = function({
          hash,
          date,
          message,
          refs,
          author_name,
          author_email,
          body
        }) {
          let parsed, error;
          if (body) {
            message += `\n${Caf.toString(body)}`;
          }
          try {
            parsed = commitParser.parse(message);
          } catch (error1) {
            error = error1;
            log.error({ normalizeListLogLine: { message, error } });
          }
          return merge(
            {
              date: Date.parse(date),
              hash,
              refs,
              authorName: author_name,
              authorEmail: author_email,
              rawMessage: message
            },
            parsed
          );
        };
        this.getCommitLog = function(options) {
          return SimpleGit.log(options).then(({ all }) =>
            all.map(normalizeListLogLine)
          );
        };
        this.getStatusReport = function(options) {
          return this.loadStatus(options).then(
            ({ status, origin, remotes, email, verbose }) => {
              let staged, unstaged, untracked, outputOne;
              ({ staged, unstaged, untracked } = status);
              outputOne = ({ path, status }) =>
                `  ${Caf.toString(pad(status + ":", 12))} ${Caf.toString(
                  path
                )}`;
              return compactFlattenAll(
                verbose
                  ? formattedInspect({
                      verbose: {
                        projectFolder: projectConfig.projectFolder,
                        projectKey: userConfig.projectKey,
                        git: { remotes, status }
                      }
                    })
                  : undefined,
                origin != null
                  ? `Origin:        ${Caf.toString(Style.green(origin))}`
                  : [
                      "Remotes:",
                      Caf.array(
                        remotes,
                        ({ refs, name }) =>
                          `  ${Caf.toString(
                            pad(name + ":", 12)
                          )} ${Caf.toString(Style.green(refs.fetch))}`
                      )
                    ],
                `Branch:        ${Caf.toString(Style.green(status.current))}`,
                `Tracking:      ${Caf.toString(Style.green(status.tracking))}`,
                `Author:        ${Caf.toString(Style.green(email))}`,
                staged.length > 0
                  ? [
                      `\nChanges to be committed:       ${Caf.toString(
                        Style.grey(
                          `(${Caf.toString(pluralize("file", staged.length))})`
                        )
                      )}`,
                      Caf.array(staged, file =>
                        file.status === "modified" && file.index !== "modified"
                          ? Style.yellow(outputOne(file))
                          : Style.green(outputOne(file))
                      )
                        .sort()
                        .join("\n")
                    ]
                  : undefined,
                unstaged.length > 0
                  ? [
                      `\nChanges not staged to commit:  ${Caf.toString(
                        Style.grey(
                          `(${Caf.toString(
                            pluralize("file", unstaged.length)
                          )})`
                        )
                      )}`,
                      Style.red(
                        Caf.array(unstaged, file => outputOne(file))
                          .sort()
                          .join("\n")
                      )
                    ]
                  : undefined,
                untracked.length > 0
                  ? [
                      `\nUntracked files:               ${Caf.toString(
                        Style.grey(
                          `(${Caf.toString(
                            pluralize("file", untracked.length)
                          )})`
                        )
                      )}`,
                      Style.red(
                        Caf.array(untracked, file => outputOne(file))
                          .sort()
                          .join("\n")
                      )
                    ]
                  : undefined,
                ""
              ).join("\n");
            }
          );
        };
        this.printStatus = options => this.getStatusReport(options).then(log);
      }));
    }
  );
});
