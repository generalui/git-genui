"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let parentImports;
  return Caf.importInvoke(
    ["Git"],
    (parentImports = [global, require("../StandardImport")]),
    (Git) => {
      return Caf.importInvoke(
        [
          "describe",
          "test",
          "Config",
          "assert",
          "getCommitMessage",
          "parseCommitMessage",
          "merge",
          "extractSavableState",
          "expect",
          "getCommitComment",
          "getInitialCommitState",
          "escapeRegExp",
        ],
        [parentImports, Git],
        (
          describe,
          test,
          Config,
          assert,
          getCommitMessage,
          parseCommitMessage,
          merge,
          extractSavableState,
          expect,
          getCommitComment,
          getInitialCommitState,
          escapeRegExp
        ) => {
          let testEncodeAndDecodeMessage, testEncodeAndDecodeMessage2;
          global.beforeAll(function () {
            return Config.load();
          });
          testEncodeAndDecodeMessage = function (...args) {
            let from, into, to, i1, temp;
            return (
              (from = args),
              (into = from),
              from != null
                ? ((to = from.length),
                  (i1 = 0),
                  (() => {
                    while (i1 < to) {
                      let props, i, expectedMessage;
                      props = from[i1];
                      i = i1;
                      expectedMessage = args[i + 1];
                      test(`getCommitMessage   ${Caf.toString(
                        require("util").inspect(props)
                      )}`, () =>
                        assert.eq(getCommitMessage(props), expectedMessage, {
                          props,
                        }));
                      test(`parseCommitMessage ${Caf.toString(
                        require("util")
                          .inspect(expectedMessage, {
                            compact: true,
                            breakLength: 200,
                          })
                          .replace(/\n\s*/g, " ")
                      )}`, () =>
                        assert.eq(parseCommitMessage(expectedMessage), props, {
                          expectedMessage,
                        }));
                      temp = i1 += 2;
                    }
                    return temp;
                  })())
                : undefined,
              into
            );
          };
          testEncodeAndDecodeMessage2 = function (...args) {
            return Caf.each2(args, (commitMessage) =>
              test(`getCommitMessage parseCommitMessage ${Caf.toString(
                require("util")
                  .inspect(commitMessage, { compact: true, breakLength: 200 })
                  .replace(/\n\s*/g, " ")
              )}`, () =>
                assert.eq(
                  getCommitMessage(parseCommitMessage(commitMessage)),
                  commitMessage
                ))
            );
          };
          describe("parseCommitMessage", function () {
            testEncodeAndDecodeMessage(
              { message: "just some text is OK" },
              "just some text is OK",
              { type: "aType", message: "a title" },
              "aType: a title",
              { type: "patch/fix", message: "a title" },
              "patch/fix: a title",
              { type: "patch/fix", message: "a title", storyId: "123" },
              "patch/fix: [#123] a title",
              { type: "patch/fix", message: "a title", storyId: "123" },
              "patch/fix: [#123] a title",
              {
                type: "patch/fix",
                message: "a title",
                storyId: "123",
                storyState: "finished",
              },
              "patch/fix: [finished #123] a title",
              {
                type: "patch/fix",
                message: "a title",
                storyId: "123",
                storyState: "finished",
                body:
                  "This is some very cool body\n* with bullets\n\nAnd paragraphs",
              },
              "patch/fix: [finished #123] a title\n\nThis is some very cool body\n* with bullets\n\nAnd paragraphs",
              {
                type: "patch/fix",
                message: "a title",
                storyId: "123",
                storyState: "finished",
                coauthors: ["frank", "sally"],
              },
              "patch/fix: [finished #123] a title\n\n\nCo-authored-by: frank\nCo-authored-by: sally"
            );
            return testEncodeAndDecodeMessage2(
              "just some text is OK",
              "patch/fix: a title",
              "patch/fix: [#123] a title"
            );
          });
          describe("getCommitMessage", function () {
            let exhibitA;
            exhibitA = {
              type: "feat",
              story:
                '[starts #171339446] Update "About Page" with collage, move Kayak photo to Careers.',
              message: "",
              wantLongMessage: true,
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
                  body: "OneLine\nTwoLine",
                }),
                "feat: hi\n\nOneLine\nTwoLine"
              ));
            test("body safety ensures no more than two newlines in a row", () =>
              assert.eq(
                getCommitMessage({
                  type: "feat",
                  message: "hi",
                  body: "OneLine\n\n\n\nTwoLine",
                }),
                "feat: hi\n\nOneLine\n\nTwoLine"
              ));
            test("story: id: 123", () =>
              assert.eq(
                getCommitMessage({
                  type: "feat",
                  message: "hi",
                  story: { id: 123 },
                }),
                "feat: [#123] hi"
              ));
            test("story: id: 123 status: :unstarted", () =>
              assert.eq(
                getCommitMessage({
                  type: "feat",
                  message: "hi",
                  story: { id: 123, status: "unstarted" },
                  storyState: "started",
                }),
                "feat: [started #123] hi"
              ));
            test("storyFinished", () =>
              assert.eq(
                getCommitMessage({
                  type: "feat",
                  message: "hi",
                  story: { id: 123, status: "started" },
                  storyState: "finished",
                }),
                "feat: [finished #123] hi"
              ));
            test("coauthors", () =>
              assert.eq(
                getCommitMessage({
                  type: "feat",
                  message: "hi",
                  coauthors: ["franky"],
                }),
                "feat: hi\n\n\nCo-authored-by: franky"
              ));
            return test("breakingChange", () =>
              assert.eq(
                getCommitMessage({
                  type: "feat",
                  message:
                    "allow provided config object to extend other configs",
                  breakingChange:
                    "`extends` key in config file is now used for extending other config files",
                }),
                "feat: allow provided config object to extend other configs\n\nBREAKING CHANGE: `extends` key in config file is now used for extending other config files"
              ));
          });
          test("extractSavableState", function () {
            return assert.eq(
              merge(extractSavableState({ message: "foo", bar: "baz" })),
              { message: "foo" }
            );
          });
          return describe("getCommitComment", function () {
            test("has git-genui tag", () =>
              expect(getCommitComment({})).toMatch(
                /git-genui.*v\d+\.\d+\.\d+/
              ));
            return test("test everything", () =>
              getInitialCommitState({ quiet: true }).then((initialState) => {
                let state;
                initialState.message = "my-commit-message";
                return require("art-testbench").assert.match(
                  getCommitComment(
                    (state = merge(initialState, {
                      generatedCommitMessage: getCommitMessage(initialState),
                      commit: "abc123",
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
