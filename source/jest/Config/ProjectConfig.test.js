"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let parentImports;
  return Caf.importInvoke(
    ["Config"],
    (parentImports = [global, require("../StandardImport")]),
    (Config) => {
      return Caf.importInvoke(
        [
          "chainedTest",
          "process",
          "ProjectConfig",
          "assert",
          "JSON",
          "projectConfig",
        ],
        [parentImports, Config],
        (chainedTest, process, ProjectConfig, assert, JSON, projectConfig) => {
          let mockFs, projectFolder, initialFiles;
          mockFs = require("@art-suite/mock-fs");
          projectFolder = "testProject";
          initialFiles = { [projectFolder]: { ".git": { config: "[core]" } } };
          global.afterAll(function () {
            return mockFs.restore();
          });
          return chainedTest("initialize mock fs", function () {
            mockFs(initialFiles);
            process.chdir(projectFolder);
            return new ProjectConfig();
          }).tapTest(
            [
              "load",
              function (projectConfig) {
                return projectConfig.init();
              },
            ],
            [
              "load doesn't vivify",
              function () {
                return assert.eq(mockFs.getTree(), initialFiles);
              },
            ],
            [
              "projectConfig.setConfigProperty :a :b",
              function (projectConfig) {
                return projectConfig.setConfigProperty("a", "b");
              },
            ],
            [
              "setConfigProperty should automatically save",
              function () {
                return assert.eq(
                  JSON.parse(
                    mockFs.getTree()[projectFolder][
                      projectConfig.configBasename
                    ]
                  ),
                  { a: "b" }
                );
              },
            ]
          );
        }
      );
    }
  );
});
