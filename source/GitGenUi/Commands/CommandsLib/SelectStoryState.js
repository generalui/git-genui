"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    return function({ storyState, story }) {
      return require("../../PromptFor").selectList({
        prompt: "Select story state:",
        default: storyState != null ? storyState : story.state,
        items:
          story.state === "unstarted"
            ? require("../../Tracker").tracker.settableStoryStates
            : Caf.array(
                require("../../Tracker").tracker.settableStoryStates,
                null,
                s => s !== "unstarted"
              )
      });
    };
  })();
});
