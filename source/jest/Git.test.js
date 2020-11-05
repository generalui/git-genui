"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["test", "chainedTest", "Git", "assert", "Object"],
    [global, require("./StandardImport")],
    (test, chainedTest, Git, assert, Object) => {
      test("getGitConfig", function () {
        return Git.getGitConfig().then((config) =>
          assert.isString(config["user.name"])
        );
      });
      test("aRemote", function () {
        return Git.aRemote.then((remote) => {
          assert.isString(remote.name);
          assert.isObject(remote.refs);
          return assert.eq(Object.keys(remote.refs).sort(), ["fetch", "push"]);
        });
      });
      chainedTest("rawStatus", function () {
        return Git.rawStatus;
      })
        .thenTest("normalizeGitStatus", function () {
          return Git.normalizeGitStatus;
        })
        .tapTest("second normalizeGitStatus doesn't change anything", function (
          firstNormalizedStatus
        ) {
          return assert.eq(
            Git.normalizeGitStatus(firstNormalizedStatus),
            firstNormalizedStatus
          );
        });
      test("getStatusReport", function () {
        return Git.getStatusReport().then((report) =>
          assert.match(
            report,
            /Origin(.|\n)*Branch(.|\n)*Tracking(.|\n)*Author(.|\n)*/i
          )
        );
      });
      test("getStatusReport with options", function () {
        return Git.getStatusReport({ verbose: true }).then((report) =>
          assert.match(report, /verbose/i)
        );
      });
      return test("getCommitLog", function () {
        return Git.getCommitLog().then((logList) => assert.isArray(logList));
      });
    }
  );
});
