"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["ensureTrackerConfigured", "tracker"],
    [global, require("./StandardImport"), require("./CommandsLib")],
    (ensureTrackerConfigured, tracker) => {
      return {
        description: "finish a story",
        run: function(options) {
          return ensureTrackerConfigured()
            .then(() => tracker.stories)
            .then(stories =>
              require("../GitGenUiPromptFor")
                .story(
                  Caf.array(stories, null, story =>
                    tracker.storyIsFinishable(story)
                  ),
                  "Select a story to finish:"
                )
                .then(story =>
                  story.id
                    ? tracker.updateStory(story, { state: "finished" })
                    : undefined
                )
            );
        }
      };
    }
  );
});
