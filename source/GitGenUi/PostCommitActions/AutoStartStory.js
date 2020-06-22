"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["present", "log", "grey", "Promise"],
    [global, require("../StandardImport"), require("colors")],
    (present, log, grey, Promise) => {
      return function(state) {
        let story, storyState, id, base;
        return (present(
          ((story = state.story),
          Caf.exists(story)
            ? ((storyState = story.state), (id = story.id))
            : undefined)
        ) && storyState === "unstarted"
          ? require("../Tracker").tracker.updateStory(story, {
              state: "started"
            })
          : (Caf.exists((base = state.options)) && base.verbose
              ? log(grey("skip: AutoStartStory (no story)"))
              : undefined,
            Promise.resolve())
        ).then(() => state);
      };
    }
  );
});
