"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["projectConfig"],
    [global, require("./ProjectConfig")],
    projectConfig => {
      return function() {
        return (() => {
          switch (projectConfig.commit.format) {
            case "conventionalCommit":
              return require("./ConventionalCommitTypes");
            default:
              return require("./StandardCommitTypes");
          }
        })();
      };
    }
  );
});
