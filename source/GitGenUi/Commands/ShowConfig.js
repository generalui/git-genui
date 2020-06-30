"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["log", "Style", "userConfig", "projectConfig"],
    [global, require("./StandardImport"), { Style: require("../Style") }],
    (log, Style, userConfig, projectConfig) => {
      return {
        description: "Show the merged configurarion for git-genui.",
        run: function({ quiet }) {
          !quiet &&
            log(
              `To change the config, run ${Caf.toString(
                Style.green("git-genui config")
              )}.\nThere are two config files:\n\n- ${Caf.toString(
                Style.brightWhite(userConfig.configBasename)
              )} resides in your home folder and stores your account information and git-genui history.\n- ${Caf.toString(
                Style.brightWhite(projectConfig.configBasename)
              )} resides in the project's folder and should be added to git.\n `
            );
          return {
            [userConfig.homeDirRelativeConfigFilePath]: userConfig,
            [projectConfig.homeDirRelativeConfigFilePath]: projectConfig
          };
        }
      };
    }
  );
});
