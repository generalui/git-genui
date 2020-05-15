"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    return require("./Lib").updateStateWithPrompt("storyState", function({
      storyState,
      story
    }) {
      return require("../../PromptFor").selectList({
        prompt: "Select story state:",
        default:
          storyState != null ? storyState : Caf.exists(story) && story.state,
        items: require("../../Tracker").tracker.settableStoryStates
      });
    });
  })();
});
