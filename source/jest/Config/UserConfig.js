"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let parentImports;
  return Caf.importInvoke(
    ["Config"],
    (parentImports = [global, require("../StandardImport")]),
    Config => {
      return Caf.importInvoke(
        ["describe", "test", "assert", "getProjectKey"],
        [parentImports, Config.UserConfig],
        (describe, test, assert, getProjectKey) => {
          return describe({
            getProjectKey: function() {
              let origin, remotes, projectFolder;
              origin = "abc123";
              remotes = [
                {
                  name: "github",
                  refs: {
                    fetch: "git@github.com:generalui/git-genui.git",
                    push: "git@github.com:generalui/git-genui.git"
                  }
                },
                {
                  name: "github2",
                  refs: {
                    fetch: "git@github.com:generalui/git-genui2.git",
                    push: "git@github.com:generalui/git-genui2.git"
                  }
                }
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
            }
          });
        }
      );
    }
  );
});
