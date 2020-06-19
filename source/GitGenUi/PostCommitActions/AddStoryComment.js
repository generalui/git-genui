"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["getCommitComment", "log", "grey"],
    [global, require("../StandardImport"), require("colors")],
    (getCommitComment, log, grey) => {
      return function(state) {
        let story;
        if ((story = state.story)) {
          require("../Tracker").tracker.createCommentWithMessage(
            story.id,
            getCommitComment(state)
          );
        } else {
          log(grey("skip: AddStoryComment (no story)"));
        }
        return state;
      };
    }
  );
});
