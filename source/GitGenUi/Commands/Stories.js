"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["ensureTrackerConfigured", "EditStoryMenu"],
    [global, require("./StandardImport"), require("./CommandsLib")],
    (ensureTrackerConfigured, EditStoryMenu) => {
      return {
        description: "list all open stories",
        run: function(options) {
          return ensureTrackerConfigured()
            .then(() => require("../Tracker").tracker.stories)
            .then(stories => {
              let prompt;
              prompt = () =>
                require("../GitGenUiPromptFor")
                  .story(stories, "Select a story to update:")
                  .then(story =>
                    story.id
                      ? EditStoryMenu(story, {
                          exitPrompt: "back to stories"
                        }).then(prompt)
                      : undefined
                  );
              return prompt();
            })
            .then(() => null);
        }
      };
    }
  );
});
