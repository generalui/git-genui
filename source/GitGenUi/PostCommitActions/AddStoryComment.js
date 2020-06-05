"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["log", "getCommitComment"],
    [global, require("../StandardImport")],
    (log, getCommitComment) => {
      return function(state) {
        let story, storyId;
        if (((story = state.story), (storyId = state.storyId))) {
          log({ AddStoryComment: { story, storyId } });
          require("../Tracker").tracker.createCommentWithMessage(
            story.id,
            getCommitComment(state)
          );
        }
        return state;
      };
    }
  );
});
