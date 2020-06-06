"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["merge", "log"],
    [global, require("../StandardImport")],
    (merge, log) => {
      return function(story, options) {
        return require("../../PromptFor").menu(
          story,
          merge(options, {
            preprocessState: story => log.unquoted(story),
            items: story => [
              {
                action: story =>
                  require("./SelectStoryState")({ story })
                    .tap(({ storyState }) => {
                      let temp;
                      return storyState !== story.state
                        ? (log(
                            require("colors").green(
                              `Updating story state ${Caf.toString(
                                story.state
                              )} => ${Caf.toString(storyState)}...`
                            )
                          ),
                          require("../../Tracker")
                            .tracker.updateStory(story.id, {
                              state: storyState,
                              estimate:
                                (temp = story.estimate) != null ? temp : 1
                            })
                            .then(() =>
                              log(require("colors").green("Success."))
                            ))
                        : log("No changes.");
                    })
                    .then(({ storyState }) =>
                      merge(story, { state: storyState })
                    ),
                value: `state: ${Caf.toString(story.state)}`
              }
            ]
          })
        );
      };
    }
  );
});
