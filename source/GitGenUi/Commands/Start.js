"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["ensureTrackerConfigured", "log", "tracker"],
    [global, require("./StandardImport"), require("./CommandsLib")],
    (ensureTrackerConfigured, log, tracker) => {
      return {
        description: "start a story",
        run: function(options) {
          return ensureTrackerConfigured()
            .then(() => require("../Tracker").tracker.stories)
            .then(stories => {
              let started;
              started = Caf.array(
                stories,
                null,
                story => story.state === "started"
              );
              if (started.length > 0) {
                log(require("colors").cyan("Stories already started:"));
                Caf.each2(started, story =>
                  log("  " + tracker.formatStory(story))
                );
                log("");
              }
              return require("../GitGenUiPromptFor")
                .story(
                  Caf.array(stories, null, story =>
                    tracker.storyIsStartable(story)
                  ),
                  "Select a story to start:"
                )
                .then(story => {
                  let temp;
                  return story.id
                    ? require("../Tracker").tracker.updateStory(story.id, {
                        state: "started",
                        estimate: (temp = story.estimate) != null ? temp : 1
                      })
                    : undefined;
                });
            });
        }
      };
    }
  );
});
