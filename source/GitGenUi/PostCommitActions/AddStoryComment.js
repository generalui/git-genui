"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["getCommitComment", "log", "grey", "Promise"],
    [global, require("../StandardImport"), require("colors")],
    (getCommitComment, log, grey, Promise) => {
      return function(state) {
        let story, base, base1;
        return ((story = state.story)
          ? require("../Tracker").tracker.createCommentWithMessage(
              story.id,
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
