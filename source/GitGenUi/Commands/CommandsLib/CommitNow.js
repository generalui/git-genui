"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "Promise",
      "applyActions",
      "merge",
      "compactFlatten",
      "present",
      "log",
      "getCommitMessage",
      "tracker"
    ],
    [
      global,
      require("../StandardImport"),
      require("./CommandsLib"),
      require("../../Git")
    ],
    (
      Promise,
      applyActions,
      merge,
      compactFlatten,
      present,
      log,
      getCommitMessage,
      tracker
    ) => {
      return function(state) {
        return (state.pretend
          ? Promise.resolve({
              branch: state.status.current,
              commit: "pretending",
              summary: { changes: 123, insertions: 456, deletions: 789 }
            })
          : require("../../Git").commit(state)
        )
          .then(commitResult => {
            let base, base1;
            return applyActions(
              merge(state, commitResult),
              compactFlatten([
                present(Caf.exists((base = state.story)) && base.id)
                  ? "AddStoryComment"
                  : undefined,
                !state.setStoryState &&
                (Caf.exists((base1 = state.story)) && base1.state) ===
                  "unstarted"
                  ? "AutoStartStory"
                  : undefined,
                "SetStoryState"
              ]),
              require("../../PostCommitActions")
            );
          })
          .then(({ actionsApplied, result }) => {
            let branch, commit, summary, staged, base, base1, base2;
            branch = result.branch;
            commit = result.commit;
            summary = result.summary;
            ({ staged } = state.status);
            if (Caf.exists((base = state.options)) && base.verbose) {
              log({
                "commit-success": {
                  summary: merge(
                    { files: Caf.array(staged, ({ path }) => path) },
                    Caf.object(summary, v => v | 0)
                  ),
                  message: getCommitMessage(state),
                  actionsApplied,
                  branch,
                  commit
                }
              });
            } else {
              log({ "commit-success": commit != null ? commit : { result } });
            }
            if (Caf.exists((base1 = state.story)) && base1.id) {
              log(
                `story: ${Caf.toString(
                  require("../../Style").green(
                    tracker.getStoryBrowserUrl(
                      Caf.exists((base2 = state.story)) && base2.id
                    )
                  )
                )}`
              );
            }
            return null;
          });
      };
    }
  );
});
