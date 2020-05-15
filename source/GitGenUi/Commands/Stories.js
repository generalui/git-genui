"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["ensureTrackerConfigured", "log", "SelectStoryState"],
    [
      global,
      require("./StandardImport"),
      require("../InquirerPlus"),
      require("./CommandsLib")
    ],
    (ensureTrackerConfigured, log, SelectStoryState) => {
      return {
        description: "list all open stories",
        run: function(options) {
          return ensureTrackerConfigured()
            .then(() => require("../Tracker").tracker.stories)
            .then(stories =>
              require("../GitGenUiPromptFor")
                .story(stories, "Select a story to update:")
                .then(story => {
                  let id, url, name, estiamte, state;
                  return story.id
                    ? (log({
                        story:
                          (({ id, url, name, estiamte, state } = story),
                          { id, url, name, estiamte, state })
                      }),
                      SelectStoryState({ story }).then(({ storyState }) =>
                        storyState !== story.state
                          ? (log(
                              require("colors").green(
                                `Updating story state ${Caf.toString(
                                  story.state
                                )} => ${Caf.toString(storyState)}...`
                              )
                            ),
                            require("../Tracker")
                              .tracker.updateStory(story.id, {
                                state: storyState
                              })
                              .then(() =>
                                log(require("colors").green("Success."))
                              ))
                          : log("No changes.")
                      ))
                    : undefined;
                })
            )
            .then(() => null);
        }
      };
    }
  );
});
