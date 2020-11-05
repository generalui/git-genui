"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    return function ({ storyState, story }) {
      return require("../../PromptFor").selectList({
        prompt: "Select story state:",
        default: storyState != null ? storyState : story.state,
        items: require("../../Tracker").tracker.settableStoryStates,
      });
    };
  })();
});
