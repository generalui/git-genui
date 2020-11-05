"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["ensureTrackerConfigured", "tracker", "log", "userConfig"],
    [global, require("../StandardImport"), require("./CommandsLib")],
    (ensureTrackerConfigured, tracker, log, userConfig) => {
      return function (state) {
        let action;
        action = state.replace(/ed$/, "");
        return {
          description: `${Caf.toString(action)} a story`,
          run: (options) =>
            ensureTrackerConfigured()
              .then(() => tracker.stories)
              .then((stories) => {
                let base;
                log({ story: userConfig.commitOptionsForProject.story });
                return require("./StoryMenu")({
                  stories,
                  story:
                    Caf.exists((base = userConfig.commitOptionsForProject)) &&
                    base.story,
                  prompt: `Select a story to ${Caf.toString(action)}:`,
                }).then(({ story }) =>
                  story.id
                    ? tracker.updateStory(story, { state })
                    : "No story selected. Aborting..."
                );
              }),
        };
      };
    }
  );
});
