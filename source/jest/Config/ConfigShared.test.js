"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let parentImports;
  return Caf.importInvoke(
    ["Config"],
    (parentImports = [global, require("../StandardImport")]),
    (Config) => {
      return Caf.importInvoke(
        ["ConfigShared", "chainedTest", "Promise", "assert", "JSON"],
        [parentImports, Config],
        (ConfigShared, chainedTest, Promise, assert, JSON) => {
          let mockFs, initialFiles, testFieldDefault, TestConfig;
          mockFs = require("@art-suite/mock-fs");
          initialFiles = {};
          testFieldDefault = "testDefault";
          TestConfig = Caf.defClass(
            class TestConfig extends ConfigShared {},
            function (TestConfig, classSuper, instanceSuper) {
              this.configFields({ testField: "testDefault" });
              this.configFields("otherTestField");
              this.getter({
                configBasename: function () {
                  return "testConfig.json";
                },
                configPath: function () {
                  return Promise.then(() => ".");
                },
              });
            }
          );
          global.afterAll(function () {
            return mockFs.restore();
          });
          return chainedTest("initialize mock fs", function () {
            mockFs(initialFiles);
            return new TestConfig();
          })
            .tapTest(
              [
                "load",
                function (testConfig) {
                  return testConfig.init();
                },
              ],
              [
                "load doesn't vivify",
                function () {
                  return assert.eq(mockFs.getTree(), initialFiles);
                },
              ],
              [
                "existedAtLoad is false",
                function (testConfig) {
                  return assert.false(testConfig.existedAtLoad);
                },
              ],
              [
                "testConfig.setConfigProperty :a :b",
                function (testConfig) {
                  return testConfig.setConfigProperty("a", "b");
                },
              ],
              [
                "setConfigProperty should automatically save",
                function (testConfig) {
                  return assert.eq(
                    JSON.parse(mockFs.getTree()[testConfig.configBasename]),
                    { a: "b" }
                  );
                },
              ],
              [
                "testField setTestField",
                function (testConfig) {
                  return testConfig.setTestField({ baz: { boz: "bam" } });
                },
              ],
              [
                "testField getTestField",
                function (testConfig) {
                  return assert.eq(
                    { baz: { boz: "bam" } },
                    testConfig.getTestField()
                  );
                },
              ],
              [
                "testField setter result",
                function (testConfig) {
                  return assert.eq(
                    { baz: { boz: "bam" } },
                    JSON.parse(mockFs.getTree()[testConfig.configBasename])
                      .testField
                  );
                },
              ],
              [
                "testField mergeTestFieldWith will replace",
                function (testConfig) {
                  return testConfig.mergeTestFieldWith({ baz: { two: 2 } });
                },
              ],
              [
                "testField mergeTestFieldWith will replace result",
                function (testConfig) {
                  return assert.eq(
                    { baz: { two: 2 } },
                    JSON.parse(mockFs.getTree()[testConfig.configBasename])
                      .testField
                  );
                },
              ],
              [
                "testField deepMergeTestFieldWith will deep-merge",
                function (testConfig) {
                  return testConfig.deepMergeTestFieldWith({
                    baz: { three: 3 },
                  });
                },
              ],
              [
                "testField deepMergeTestFieldWith will deep-merge result",
                function (testConfig) {
                  return assert.eq(
                    { baz: { two: 2, three: 3 } },
                    JSON.parse(mockFs.getTree()[testConfig.configBasename])
                      .testField
                  );
                },
              ]
            )
            .thenTest(
              "create new testConfig instance to simulate second load",
              function () {
                return new TestConfig().init();
              }
            )
            .tapTest("existedAtLoad is true", function (testConfig) {
              return assert.true(testConfig.existedAtLoad);
            });
        }
      );
    }
  );
});
