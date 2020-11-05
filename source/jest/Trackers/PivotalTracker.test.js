"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["GitGenUi", "chainedTest", "assert", "Object", "formattedInspect"],
    [global, require("../StandardImport")],
    (GitGenUi, chainedTest, assert, Object, formattedInspect) => {
      let PivotalTracker;
      PivotalTracker = GitGenUi.Trackers.PivotalTracker;
      return chainedTest("getProjects", function () {
        return require("../../../source/GitGenUi")
          .Config.load()
          .then(() => PivotalTracker.getProjects())
          .then((results) => {
            assert.isArray(results);
            assert.gt(results.length, 0);
            assert.eq(results[0].kind, "project");
            return results[0];
          });
      }).tapTest(
        [
          "getStories",
          function (project) {
            return PivotalTracker.getStories(project.id).then((results) => {
              let keys, expectedKeys;
              assert.isArray(results);
              assert.gt(results.length, 0);
              keys = Object.keys(results[0]);
              return Caf.each2(
                (expectedKeys = [
                  "createdAt",
                  "id",
                  "name",
                  "ownerIds",
                  "requestedById",
                  "state",
                  "updatedAt",
                  "url",
                ]),
                (key) =>
                  !Caf.in(key, keys)
                    ? assert.fail(
                        `expected to find key ${Caf.toString(
                          key
                        )} in every story:\n\nexpected at least these keys: ${Caf.toString(
                          expectedKeys.join(", ")
                        )}\nactual story:\n${Caf.toString(
                          formattedInspect(results[0])
                        )}`
                      )
                    : undefined
              );
            });
          },
        ],
        [
          "getMembers",
          function (project) {
            return PivotalTracker.getMembers(project.id).then((results) => {
              assert.isArray(results);
              assert.gt(results.length, 0);
              return assert.eq(Object.keys(results[0]).sort(), [
                "email",
                "id",
                "name",
              ]);
            });
          },
        ]
      );
    }
  );
});
