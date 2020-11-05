"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let parentImports;
  return Caf.importInvoke(
    ["Config"],
    (parentImports = [global, require("../StandardImport")]),
    (Config) => {
      let UserConfig;
      UserConfig = Config.UserConfig;
      return Caf.importInvoke(
        [
          "describe",
          "test",
          "assert",
          "getProjectKey",
          "chainedTest",
          "log",
          "Git",
        ],
        [parentImports, UserConfig],
        (describe, test, assert, getProjectKey, chainedTest, log, Git) => {
          let mockFs;
          mockFs = require("@art-suite/mock-fs");
          return describe({
            getProjectKey: function () {
              let origin, remotes, projectFolder;
              origin = "abc123";
              remotes = [
                {
                  name: "github",
                  refs: {
                    fetch: "git@github.com:generalui/git-genui.git",
                    push: "git@github.com:generalui/git-genui.git",
                  },
                },
                {
                  name: "github2",
                  refs: {
                    fetch: "git@github.com:generalui/git-genui2.git",
                    push: "git@github.com:generalui/git-genui2.git",
                  },
                },
              ];
              projectFolder = "my-project-folder";
              test("have_origin", () =>
                assert.eq(
                  getProjectKey({ origin, remotes, projectFolder }),
                  origin
                ));
              test("have_remotes", () =>
                assert.eq(
                  getProjectKey({ remotes, projectFolder }),
                  remotes[0].refs.fetch
                ));
              return test("have_projectFolder", () =>
                assert.eq(getProjectKey({ projectFolder }), projectFolder));
            },
            mockFs: function () {
              let projectFolder, initialFiles;
              global.afterAll(() => mockFs.restore());
              projectFolder = "testProject";
              initialFiles = {
                [projectFolder]: { ".git": { config: "[core]" } },
              };
              return chainedTest("initialize mock fs", () => {
                log("Start");
                mockFs(initialFiles);
                return new UserConfig();
              }).tapTest(
                ["load", (userConfig) => userConfig.init(Git)],
                [
                  "projectKey",
                  (userConfig) =>
                    assert.eq(
                      "git@github.com:generalui/git-genui.git",
                      userConfig.projectKey
                    ),
                ]
              );
            },
          });
        }
      );
    }
  );
});
