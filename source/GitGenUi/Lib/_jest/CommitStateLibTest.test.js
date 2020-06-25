"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "test",
      "expect",
      "getCommitComment",
      "merge",
      "getGitCommitMessage",
      "escapeRegExp"
    ],
    [
      global,
      require("art-standard-lib"),
      require("../CommitStateLib"),
      require("../../Git")
    ],
    (
      test,
      expect,
      getCommitComment,
      merge,
      getGitCommitMessage,
      escapeRegExp
    ) => {
      require("../../../../source");
      global.beforeAll(function() {
        return require("../../Config").load();
      });
      test("getCommitComment", function() {
        return expect(getCommitComment({})).toMatch(
          /git-genui.*v\d+\.\d+\.\d+/
        );
      });
      return test("getCommitComment", function() {
        return require("../../getInitialCommitState")({ quiet: true }).then(
          initialState => {
            let state;
            initialState.message = "my-commit-message";
            state = merge(initialState, {
              generatedCommitMessage: getGitCommitMessage(initialState),
              commit: "abc123"
            });
            return expect(getCommitComment(state)).toMatch(
              RegExp(
                `${Caf.toString(
                  escapeRegExp(state.storyState)
                )}(.|\\n)*${Caf.toString(
                  escapeRegExp(state.commit)
                )}(.|\\n)*${Caf.toString(
                  escapeRegExp(state.status.current)
                )}(.|\\n)*${Caf.toString(
                  escapeRegExp(state.remote.refs.fetch)
                )}(.|\\n)*${Caf.toString(
                  escapeRegExp(state.generatedCommitMessage)
                )}(.|\\n)*git-genui(.|\\n)*v\\d+\\.\\d+\\.\\d+`
              )
            );
          }
        );
      });
    }
  );
});
