"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["projectConfig"],
    [global, require("./Config")],
    (projectConfig) => {
      return function () {
        return projectConfig.conventionalCommit
          ? require("./ConventionalCommitTypes")
          : require("./StandardCommitTypes");
      };
    }
  );
});
