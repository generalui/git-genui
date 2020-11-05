"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["present", "log", "grey", "Promise"],
    [global, require("../StandardImport"), require("../Style")],
    (present, log, grey, Promise) => {
      return function (state) {
        let storyState, story, base;
        storyState = state.storyState;
        story = state.story;
        return (Caf.exists(story) && story.id && present(storyState)
          ? require("../Tracker").tracker.updateStory(story, {
              state: storyState,
            })
          : (Caf.exists((base = state.options)) && base.verbose
              ? log(grey("skip: SetStoryState (no story)"))
              : undefined,
            Promise.resolve())
        ).then(() => state);
      };
    }
  );
});
