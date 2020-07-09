"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["test", "describe", "log", "assert", "CommitParser", "chainedTest"],
    [global, require("../StandardImport")],
    (test, describe, log, assert, CommitParser, chainedTest) => {
      let parserTest, markdownExample;
      parserTest = function(source, result) {
        return [
          source.replace(/\n/g, " \\n "),
          commitParser => {
            let parsed, error;
            try {
              parsed = commitParser.parse(source);
            } catch (error1) {
              error = error1;
              log({ error });
              throw error;
            }
            return assert.eq(parsed, result, () =>
              commitParser.parse(source, { returnNode: true })
            );
          }
        ];
      };
      markdownExample =
        'Body can have awesome markdown:\n\n1. lets you explain things better\n2. let\'s do it together\n3. lettuce is a vegetable\n4. le tus is bad spanish for "the your"';
      test("return-node option", function() {
        return assert.instanceof(
          require("caffeine-eight").Nodes.Node,
          new CommitParser().parse("a", { returnNode: true })
        );
      });
      describe("ggStandardFormat", function() {
        let subject;
        return chainedTest("parser", () => new CommitParser()).tapTest(
          parserTest((subject = "just a subject"), { subject }),
          parserTest("myType: mySubject", {
            type: "myType",
            subject: "mySubject"
          }),
          parserTest("myType(myScope): mySubject", {
            type: "myType",
            scope: "myScope",
            subject: "mySubject"
          }),
          parserTest("minor/myType: mySubject", {
            semanticVersion: "minor",
            type: "myType",
            subject: "mySubject"
          }),
          parserTest("minor: mySubject", {
            semanticVersion: "minor",
            subject: "mySubject"
          }),
          parserTest("[#123] mySubject", {
            trackerId: "123",
            subject: "mySubject"
          }),
          parserTest("[finishes #123] mySubject", {
            trackerState: "finishes",
            trackerId: "123",
            subject: "mySubject"
          }),
          parserTest("mySubject\nmyBody", {
            subject: "mySubject",
            body: "myBody"
          }),
          parserTest(`mySubject\n${Caf.toString(markdownExample)}`, {
            subject: "mySubject",
            body: markdownExample
          }),
          parserTest("mySubject\n\nmy-trailer: my-value", {
            subject: "mySubject",
            footer: { "my-trailer": "my-value" }
          }),
          parserTest(
            "Calculus\n\nCo-authored-by: Sir Isaac Newton\nCo-authored-by: Gottfried Wilhelm Leibniz",
            {
              subject: "Calculus",
              footer: {
                "co-authored-by": [
                  "Sir Isaac Newton",
                  "Gottfried Wilhelm Leibniz"
                ]
              }
            }
          )
        );
      });
      describe("failures", function() {
        return test("empty commit message", () =>
          assert.rejects(() => new CommitParser().parse("")));
      });
      describe("edge-cases", function() {
        return chainedTest("parser", () => new CommitParser()).tapTest(
          parserTest("a", { subject: "a" }),
          parserTest("mySubject\nclose-footer: hmm", {
            subject: "mySubject",
            footer: { "close-footer": "hmm" }
          }),
          parserTest("mySubject\ncloseBody\nclose-footer: hmm", {
            subject: "mySubject",
            body: "closeBody",
            footer: { "close-footer": "hmm" }
          }),
          parserTest("[bad-tracker-id123] mySubject", {
            subject: "[bad-tracker-id123] mySubject"
          }),
          parserTest("majorbs: mySubject", {
            subject: "mySubject",
            type: "majorbs"
          }),
          parserTest("bad type: mySubject", { subject: "bad type: mySubject" }),
          parserTest("bad/type: mySubject", { subject: "bad/type: mySubject" }),
          parserTest("major/bad/type: mySubject", {
            subject: "major/bad/type: mySubject"
          }),
          parserTest(
            "mySubject\n\nfoo: looks like a footer\n\nbut then it's not",
            {
              subject: "mySubject",
              body: "foo: looks like a footer\n\nbut then it's not"
            }
          ),
          parserTest("mySubject\nmy-footer: trailing whitespace coming\n\n ", {
            subject: "mySubject",
            footer: { "my-footer": "trailing whitespace coming" }
          })
        );
      });
      return describe("ccStandardFormat", function() {
        let subject;
        return chainedTest("parser", () => new CommitParser()).tapTest(
          parserTest((subject = "just a subject"), { subject }),
          parserTest("fix: mySubject", {
            subject: "mySubject",
            semanticVersion: "patch",
            type: "fix"
          }),
          parserTest("feat: mySubject", {
            subject: "mySubject",
            semanticVersion: "minor",
            type: "feat"
          }),
          parserTest("refactor!: mySubject", {
            subject: "mySubject",
            semanticVersion: "major",
            type: "refactor"
          }),
          parserTest("refactor: mySubject", {
            subject: "mySubject",
            type: "refactor"
          }),
          parserTest(
            "refactor: mySubject\n\nBREAKING CHANGE: Should imply major semanticVersion",
            {
              subject: "mySubject",
              semanticVersion: "major",
              type: "refactor",
              footer: {
                "breaking-change": "Should imply major semanticVersion"
              }
            }
          )
        );
      });
    }
  );
});
