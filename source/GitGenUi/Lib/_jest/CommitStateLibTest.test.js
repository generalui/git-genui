"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["test", "expect", "getCommitComment"],
    [global, require("../CommitStateLib")],
    (test, expect, getCommitComment) => {
      require("../../../../source");
      test("getCommitComment", function() {
        return expect(getCommitComment({})).toMatch(
          /git-genui.*v\d+\.\d+\.\d+/
        );
      });
      return test("getCommitComment", function() {
        let generatedCommitMessage,
          storyState,
          branch,
          commit,
          remote,
          coauthors;
        return expect(
          getCommitComment({
            generatedCommitMessage: (generatedCommitMessage =
              "my-commit-message"),
            storyState: (storyState = "finished"),
            branch: (branch = "feature/fun"),
            commit: (commit = "abc123"),
            remote: (remote = {
              name: "origin",
              refs: {
                fetch: "git@github.com:generalui/git-genui.git",
                push: "git@github.com:generalui/git-genui.git"
              }
            }),
            coauthors: (coauthors = "William")
          })
        ).toMatch(
          RegExp(
            `${Caf.toString(storyState)}(.|\\n)*${Caf.toString(
              commit
            )}(.|\\n)*${Caf.toString(branch)}(.|\\n)*${Caf.toString(
              remote.refs.fetch
            )}(.|\\n)*${Caf.toString(
              generatedCommitMessage
            )}(.|\\n)*git-genui(.|\\n)*v\\d+\\.\\d+\\.\\d+`
          )
        );
      });
    }
  );
});
