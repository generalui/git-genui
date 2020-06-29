"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "GitGenUI",
      "describe",
      "chainedTest",
      "assert",
      "Object",
      "formattedInspect"
    ],
    [global, require("../StandardImport")],
    (GitGenUI, describe, chainedTest, assert, Object, formattedInspect) => {
      let PivotalTracker;
      PivotalTracker = GitGenUI.Trackers.PivotalTracker;
      return describe(function() {
        return chainedTest("getProjects", () =>
          require("../../../source/GitGenUi")
            .Config.load()
            .then(() => PivotalTracker.getProjects())
            .then(results => {
              assert.isArray(results);
              assert.gt(results.length, 0);
              assert.eq(results[0].kind, "project");
              return results[0];
            })
        ).tapTest(
          [
            "getStories",
            project =>
              PivotalTracker.getStories(project.id).then(results => {
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
                    "url"
                  ]),
                  key =>
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
              })
          ],
          [
            "getMembers",
            project =>
              PivotalTracker.getMembers(project.id).then(results => {
                assert.isArray(results);
                assert.gt(results.length, 0);
                return assert.eq(Object.keys(results[0]).sort(), [
                  "email",
                  "id",
                  "name"
                ]);
              })
          ]
        );
      });
    }
  );
});
