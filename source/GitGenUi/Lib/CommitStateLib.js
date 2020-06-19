"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    return {
      getCommitComment: function(state) {
        let generatedCommitMessage, storyState, branch, commit;
        generatedCommitMessage = state.generatedCommitMessage;
        storyState = state.storyState;
        branch = state.branch;
        commit = state.commit;
        return `${Caf.toString(
          storyState || "progressed"
        )}\ncommit: ${Caf.toString(commit)}\nbranch: ${Caf.toString(
          branch
        )}\nmessage: ${Caf.toString(
          generatedCommitMessage
        )}\n(auto-comment by git-genui v${Caf.toString(
          require("../../../package").version
        )})`;
      }
    };
  })();
});
