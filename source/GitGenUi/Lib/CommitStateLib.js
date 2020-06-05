"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    return {
      getCommitComment: function(state) {
        let generatedCommitMessage,
          storyState,
          branch,
          commit,
          coauthors,
          story;
        generatedCommitMessage = state.generatedCommitMessage;
        storyState = state.storyState;
        branch = state.branch;
        commit = state.commit;
        coauthors = state.coauthors;
        story = state.story;
        return `${Caf.toString(
          storyState || "progressed"
        )} with commit: ${Caf.toString(commit)}\n\n${Caf.toString(
          generatedCommitMessage
        )}\nby git-genui v${Caf.toString(require("../../../package").version)}`;
      }
    };
  })();
});
