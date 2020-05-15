"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["ensureTrackerConfigured", "log", "tracker"],
    [
      global,
      require("./StandardImport"),
      require("../InquirerPlus"),
      require("./CommandsLib")
    ],
    (ensureTrackerConfigured, log, tracker) => {
      return {
        description: "list all open stories",
        run: function(options) {
          ensureTrackerConfigured()
            .then(() => require("../Tracker").tracker.stories)
            .then(stories =>
              Caf.each2(stories, story =>
                log("  " + tracker.formatStory(story, true))
              )
            );
          return null;
        }
      };
    }
  );
});
