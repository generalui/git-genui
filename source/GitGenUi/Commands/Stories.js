"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["ensureTrackerConfigured", "Promise", "SelectStory", "EditStoryMenu"],
    [global, require("./StandardImport"), require("./CommandsLib")],
    (ensureTrackerConfigured, Promise, SelectStory, EditStoryMenu) => {
      return {
        description: "list all open stories",
        run: function(options) {
          return ensureTrackerConfigured()
            .then(() =>
              Promise.all([
                require("../Tracker").tracker.stories,
                require("../Tracker").tracker.project,
                require("../Tracker").tracker.members
              ])
            )
            .then(([stories, project, members]) => {
              let prompt;
              prompt = () =>
                SelectStory({
                  stories,
                  project,
                  members,
                  prompt: "Select a story to update:"
                }).then(story =>
                  story.id
                    ? EditStoryMenu(
                        { story, project, members },
                        { exitPrompt: "back to stories" }
                      ).then(prompt)
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
