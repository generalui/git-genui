"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["log", "present", "grey", "Promise"],
    [global, require("../StandardImport"), require("colors")],
    (log, present, grey, Promise) => {
      return function(state) {
        let story, id, temp, base;
        log("autoStartStory1");
        return (present(
          ((story = state.story),
          Caf.exists(story)
            ? ((state = story.state), (id = story.id))
            : undefined)
        ) && state === "unstarted"
          ? (log("autoStartStory2"),
            require("../Tracker").tracker.updateStory(story.id, {
              state: "started",
              estimate: (temp = story.estimate) != null ? temp : 1
            }))
          : (log("autoStartStory3"),
            Caf.exists((base = state.options)) && base.verbose
              ? log(grey("skip: AutoStartStory (no story)"))
              : undefined,
            Promise.resolve())
        ).then(() => {
          log({ autoStartStory4: state });
          return state;
        });
      };
    }
  );
});
