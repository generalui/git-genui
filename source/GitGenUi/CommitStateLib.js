"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["userConfig", "Promise", "merge", "tracker", "ignoreRejections"],
    [
      global,
      require("./StandardImport"),
      require("./Tracker"),
      require("./Lib")
    ],
    (userConfig, Promise, merge, tracker, ignoreRejections) => {
      return {
        saveState: function(state) {
          let message, type, coauthors, story, breakingChanges, body, footers;
          if (state) {
            userConfig.saveCommitOptionsForProject(
              (({
                message,
                type,
                coauthors,
                story,
                breakingChanges,
                body,
                footers
              } = state),
              {
                message,
                type,
                coauthors,
                story,
                breakingChanges,
                body,
                footers
              })
            );
          }
          return state;
        },
        getInitialCommitState: function(options = {}) {
          return Promise.deepAll(
            merge(userConfig.commitOptionsForProject, {
              status: options.quiet
                ? require("./Git").status
                : require("./Git").printStatus(),
              stories:
                tracker.configured && ignoreRejections(() => tracker.stories),
              members:
                tracker.configured && ignoreRejections(() => tracker.members),
              myAccount:
                tracker.configured && ignoreRejections(() => tracker.myAccount),
              project:
                tracker.configured && ignoreRejections(() => tracker.project),
              remote: require("./Git").aRemote,
              options
            })
          );
        }
      };
    }
  );
});
