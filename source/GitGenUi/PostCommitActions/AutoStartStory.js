"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["present", "log", "grey", "Promise"],
    [global, require("../StandardImport"), require("colors")],
    (present, log, grey, Promise) => {
      return function(state) {
        let story, id, temp, base;
        return (present(
          ((story = state.story),
          Caf.exists(story)
            ? ((state = story.state), (id = story.id))
            : undefined)
        ) && state === "unstarted"
          ? require("../Tracker").tracker.updateStory(story.id, {
              state: "started",
              estimate: (temp = story.estimate) != null ? temp : 1
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
