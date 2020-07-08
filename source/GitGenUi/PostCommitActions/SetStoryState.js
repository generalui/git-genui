"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["present", "log", "grey", "Promise"],
    [global, require("../StandardImport"), require("../Style")],
    (present, log, grey, Promise) => {
      return function(state) {
        let setStoryState, story, base;
        setStoryState = state.setStoryState;
        story = state.story;
        return (Caf.exists(story) && story.id && present(setStoryState)
          ? require("../Tracker").tracker.updateStory(story, {
              state: setStoryState
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
