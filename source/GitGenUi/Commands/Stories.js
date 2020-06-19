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
                  prompt: "Select a story to edit:"
                }).then(story =>
                  story.id
                    ? (!story.newStory
                        ? EditStoryMenu(
                            { story, project, members },
                            { exitPrompt: "back to stories" }
                          )
                        : undefined
                      )
                        .tap(() =>
                          require("../Tracker").tracker.stories.then(
                            s => (stories = s)
                          )
                        )
                        .then(prompt)
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
