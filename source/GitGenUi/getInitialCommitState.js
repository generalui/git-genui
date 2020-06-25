"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Promise", "merge", "userConfig", "tracker", "ignoreRejections"],
    [
      global,
      require("./StandardImport"),
      require("./Tracker"),
      require("./Lib"),
      require("./UserConfig")
    ],
    (Promise, merge, userConfig, tracker, ignoreRejections) => {
      return function(options = {}) {
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
      };
    }
  );
});
