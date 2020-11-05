"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return {
    load: function () {
      return require("./ProjectFiles")
        .init()
        .then(() => require("./UserConfig").initSingleton())
        .then(() => require("./ProjectConfig").initSingleton());
    },
    userConfig: require("./UserConfig").userConfig,
    projectConfig: require("./ProjectConfig").projectConfig,
  };
});
