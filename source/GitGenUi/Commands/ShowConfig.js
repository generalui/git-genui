"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["log", "colors", "userConfig", "projectConfig"],
    [global, require("./StandardImport"), { colors: require("colors") }],
    (log, colors, userConfig, projectConfig) => {
      return {
        description: "Show the merged configurarion for git-genui.",
        run: function({ quiet }) {
          !quiet &&
            log(
              `To change the config, run ${Caf.toString(
                colors.green("git-genui config")
              )}.\nThere are two config files:\n\n- ${Caf.toString(
                colors.brightWhite(userConfig.configBasename)
              )} resides in your home folder and stores your account information and git-genui history.\n- ${Caf.toString(
                colors.brightWhite(projectConfig.configBasename)
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
