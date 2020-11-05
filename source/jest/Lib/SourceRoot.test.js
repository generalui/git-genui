"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["describe", "chainedTest", "mockFs", "Config", "assert"],
    [global, require("../StandardImport"), { mockFs: require("mock-fs") }],
    (describe, chainedTest, mockFs, Config, assert) => {
      return describe({
        findSourceRoot: function () {
          return chainedTest(() => {
            mockFs({
              home: {
                "my-package1": {
                  ".git": { config: "blah" },
                  source: { "index.js": "{}" },
                },
                "my-package2": {
                  ".git": { config: "blah" },
                  source: { "index.js": "{}" },
                },
                "my-package3": { source: { "index.js": "{}" } },
                "my-package4": {
                  "my.config.js": "blah",
                  source: { "index.js": "{}" },
                },
                "my-package5": {
                  ".my.config.json": "blah",
                  source: { "index.js": "{}" },
                },
              },
            });
            return new Config.SourceRoots(
              ".git",
              "my.config.*",
              ".my.config.*"
            );
          })
            .tapTest(
              [
                "home",
                (sr) =>
                  sr
                    .findSourceRoot("home")
                    .then((result) => assert.equal(result, false)),
              ],
              [
                "home/my-package1",
                (sr) =>
                  sr
                    .findSourceRoot("home/my-package1")
                    .then((result) =>
                      assert.match(result, /home\/my-package1$/)
                    ),
              ],
              [
                "home/my-package1/source",
                (sr) =>
                  sr
                    .findSourceRoot("home/my-package1/source")
                    .then((result) =>
                      assert.match(result, /home\/my-package1$/)
                    ),
              ],
              [
                "home/my-package2/source",
                (sr) =>
                  sr
                    .findSourceRoot("home/my-package2/source")
                    .then((result) =>
                      assert.match(result, /home\/my-package2$/)
                    ),
              ],
              [
                "home/my-package3/source",
                (sr) =>
                  sr
                    .findSourceRoot("home/my-package3/source")
                    .then((result) => assert.equal(result, false)),
              ],
              [
                "home/my-package4/source",
                (sr) =>
                  sr
                    .findSourceRoot("home/my-package4/source")
                    .then((result) =>
                      assert.match(result, /home\/my-package4$/)
                    ),
              ],
              [
                "home/my-package5/source",
                (sr) =>
                  sr
                    .findSourceRoot("home/my-package5/source")
                    .then((result) =>
                      assert.match(result, /home\/my-package5$/)
                    ),
              ]
            )
            .thenTest("teardown", () => mockFs.restore());
        },
      });
    }
  );
});
