"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["merge", "present", "Error", "compactFlattenAll"],
    [global, require("./StandardImport")],
    (merge, present, Error, compactFlattenAll) => {
      let normalizeGitStatus,
        nothingStaged,
        answersToCommit,
        getGitCommitMessage;
      return {
        normalizeGitStatus: (normalizeGitStatus = function(status) {
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
        }),
        nothingStaged: (nothingStaged = function(status) {
          return (
            status.staged.length === 0 &&
            status.renamed.length === 0 &&
            status.created.length === 0 &&
            status.deleted.length === 0
          );
        }),
        answersToCommit: (answersToCommit = function({
          type,
          scope,
          story,
          subject,
          body,
          footer,
          coauthor,
          storyFinished
        }) {
          let statusString;
          if (!present(subject)) {
            throw new Error("missing subject");
          }
          if (!present(type)) {
            throw new Error("missing type");
          }
          return compactFlattenAll(
            type,
            scope ? `(${Caf.toString(scope)})` : undefined,
            ": ",
            story
              ? ((statusString = (() => {
                  switch (false) {
                    case !storyFinished:
                      return " (finished)";
                    case !(story.status === "unstarted"):
                      return " (started)";
                  }
                })()),
                `[#${Caf.toString(story.id)}]${Caf.toString(statusString)} `)
              : undefined,
            subject,
            body
              ? `\n\n${Caf.toString(body.replace(/\n[\n\s]*/g, "\n"))}`
              : undefined,
            coauthor
              ? `\n\n\nCoauthored-by: ${Caf.toString(coauthor)}`
              : undefined
          ).join("");
        }),
        getGitCommitMessage: (getGitCommitMessage = function({
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
        })
      };
    }
  );
});
