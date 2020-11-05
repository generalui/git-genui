"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["present", "getCommitComment", "log", "grey", "Promise"],
    [global, require("../StandardImport"), require("../Style")],
    (present, getCommitComment, log, grey, Promise) => {
      return function (state) {
        let story, id, base, base1;
        return (present(
          ((story = state.story),
          Caf.exists(story) ? (id = story.id) : undefined)
        )
          ? require("../Tracker").tracker.createCommentWithMessage(
              id,
              getCommitComment(state),
              Caf.exists((base = state.options)) && base.verbose
            )
          : (Caf.exists((base1 = state.options)) && base1.verbose
              ? log(grey("skip: AddStoryComment (no story)"))
              : undefined,
            Promise.resolve())
        ).then(() => state);
      };
    }
  );
});
