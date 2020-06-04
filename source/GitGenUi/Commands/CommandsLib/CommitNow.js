"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Promise", "applyActions", "merge", "log", "getGitCommitMessage"],
    [
      global,
      require("../StandardImport"),
      require("./CommandsLib"),
      require("../../UserConfig"),
      require("../../Git")
    ],
    (Promise, applyActions, merge, log, getGitCommitMessage) => {
      return function(state) {
        return (state.pretend
          ? Promise.resolve({
              branch: state.status.current,
              commit: "pretending",
              summary: { changes: 123, insertions: 456, deletions: 789 }
            })
          : require("../../Git").commit(state)
        )
          .then(commitResult =>
            applyActions(
              merge(state, commitResult),
              ["AddStoryComment"],
              require("../../PostCommitActions")
            )
          )
          .then(({ branch, commit, summary }) => {
            let staged;
            ({ staged } = state.status);
            log({
              "commit-success": {
                summary: merge(
                  { files: Caf.array(staged, ({ path }) => path) },
                  Caf.object(summary, v => v | 0)
                ),
                message: getGitCommitMessage(state),
                branch,
                commit
              }
            });
            return null;
          });
      };
    }
  );
});
