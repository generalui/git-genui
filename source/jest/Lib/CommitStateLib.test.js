"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let parentImports;
  return Caf.importInvoke(
    ["Git"],
    (parentImports = [global, require("../StandardImport")]),
    Git => {
      return Caf.importInvoke(
        [
          "describe",
          "test",
          "Config",
          "assert",
          "getCommitMessage",
          "merge",
          "extractSavableState",
          "expect",
          "getCommitComment",
          "getInitialCommitState",
          "escapeRegExp"
        ],
        [parentImports, Git],
        (
          describe,
          test,
          Config,
          assert,
          getCommitMessage,
          merge,
          extractSavableState,
          expect,
          getCommitComment,
          getInitialCommitState,
          escapeRegExp
        ) => {
          global.beforeAll(function() {
            return Config.load();
          });
          describe("getCommitMessage", function() {
            let exhibitA;
            exhibitA = {
              type: "feat",
              story:
                '[171339446] (started) Update "About Page" with collage, move Kayak photo to Careers.',
              message: "",
              wantLongMessage: true
            };
            test("type and message", () =>
              assert.eq(
                getCommitMessage({ type: "feat", message: "hi" }),
                "feat: hi"
              ));
            test("body", () =>
              assert.eq(
                getCommitMessage({
                  type: "feat",
                  message: "hi",
                  body: "OneLine\nTwoLine"
                }),
                "feat: hi\n\nOneLine\nTwoLine"
              ));
            test("body safety ensures no more than two newlines in a row", () =>
              assert.eq(
                getCommitMessage({
                  type: "feat",
                  message: "hi",
                  body: "OneLine\n\n\n\nTwoLine"
                }),
                "feat: hi\n\nOneLine\n\nTwoLine"
              ));
            test("story: id: 123", () =>
              assert.eq(
                getCommitMessage({
                  type: "feat",
                  message: "hi",
                  story: { id: 123 }
                }),
                "feat: [#123] hi"
              ));
            test("story: id: 123 status: :unstarted", () =>
              assert.eq(
                getCommitMessage({
                  type: "feat",
                  message: "hi",
                  story: { id: 123, status: "unstarted" },
                  storyState: "started"
                }),
                "feat: [#123] (started) hi"
              ));
            test("storyFinished", () =>
              assert.eq(
                getCommitMessage({
                  type: "feat",
                  message: "hi",
                  story: { id: 123, status: "started" },
                  storyState: "finished"
                }),
                "feat: [#123] (finished) hi"
              ));
            test("coauthors", () =>
              assert.eq(
                getCommitMessage({
                  type: "feat",
                  message: "hi",
                  coauthors: ["franky"]
                }),
                "feat: hi\n\n\nCoauthored-by: franky"
              ));
            return test("breakingChange", () =>
              assert.eq(
                getCommitMessage({
                  type: "feat",
                  message:
                    "allow provided config object to extend other configs",
                  breakingChange:
                    "`extends` key in config file is now used for extending other config files"
                }),
                "feat: allow provided config object to extend other configs\n\nBREAKING CHANGE: `extends` key in config file is now used for extending other config files"
              ));
          });
          test("extractSavableState", function() {
            return assert.eq(
              merge(extractSavableState({ message: "foo", bar: "baz" })),
              { message: "foo" }
            );
          });
          return describe("getCommitComment", function() {
            test("has git-genui tag", () =>
              expect(getCommitComment({})).toMatch(
                /git-genui.*v\d+\.\d+\.\d+/
              ));
            return test("test everything", () =>
              getInitialCommitState({ quiet: true }).then(initialState => {
                let state;
                initialState.message = "my-commit-message";
                return require("art-testbench").assert.match(
                  getCommitComment(
                    (state = merge(initialState, {
                      generatedCommitMessage: getCommitMessage(initialState),
                      commit: "abc123"
                    }))
                  ),
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
              }));
          });
        }
      );
    }
  );
});
