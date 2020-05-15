"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["userConfig", "projectConfig"],
    [
      global,
      require("./StandardImport"),
      require("../UserConfig"),
      require("../ProjectConfig")
    ],
    (userConfig, projectConfig) => {
      return {
        description: "show the merged configurarion for git-genui",
        run: function() {
          return {
            [userConfig.homeDirRelativeConfigFilePath]: userConfig,
            [projectConfig.homeDirRelativeConfigFilePath]: projectConfig
          };
        }
      };
    }
  );
});
