"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["getCommitComment", "log", "grey", "Promise"],
    [global, require("../StandardImport"), require("colors")],
    (getCommitComment, log, grey, Promise) => {
      return function(state) {
        let story;
        return ((story = state.story)
          ? require("../Tracker").tracker.createCommentWithMessage(
              story.id,
              getCommitComment(state)
            )
          : (log(grey("skip: AddStoryComment (no story)")), Promise.resolve())
        ).then(() => state);
      };
    }
  );
});
