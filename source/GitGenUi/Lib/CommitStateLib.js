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
        return `story ${Caf.toString(
          storyState || "progressed"
        )} with commit: \`${Caf.toString(commit)}\`, branch: \`${Caf.toString(
          branch
        )}\`, message:\n> ${Caf.toString(
          generatedCommitMessage
        )}\n(auto-comment by git-genui v${Caf.toString(
          require("../../../package").version
        )})`;
      }
    };
  })();
});
