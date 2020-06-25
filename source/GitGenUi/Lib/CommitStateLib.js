"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    return {
      getCommitComment: function(state) {
        let generatedCommitMessage,
          storyState,
          status,
          commit,
          remote,
          temp,
          temp1;
        generatedCommitMessage = state.generatedCommitMessage;
        storyState = state.storyState;
        status = state.status;
        commit = state.commit;
        remote = state.remote;
        return `story ${Caf.toString(
          storyState || "progressed"
        )} with commit: \`${Caf.toString(commit)}\`, branch: \`${Caf.toString(
          (temp = Caf.exists(status) && status.current) != null
            ? temp
            : "unknown"
        )}\`, remote: \`${Caf.toString(
          (temp1 = Caf.exists(remote) && remote.refs.fetch) != null
            ? temp1
            : "none"
        )}\`, message:\n> ${Caf.toString(
          generatedCommitMessage
        )}\n(auto-comment by git-genui v${Caf.toString(
          require("../../../package").version
        )})`;
      }
    };
  })();
});
