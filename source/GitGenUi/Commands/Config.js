"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["ConfigureMenu"],
    [
      global,
      require("./StandardImport"),
      require("../UserConfig"),
      require("../ProjectConfig"),
      require("./CommandsLib"),
      { colors: require("colors") }
    ],
    ConfigureMenu => {
      return { description: "configure git-genui", run: ConfigureMenu };
    }
  );
});
