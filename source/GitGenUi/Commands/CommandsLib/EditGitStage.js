"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    return require("./Lib").updateStateWithPrompt("status", function () {
      return require("../../Widgets")
        .InteractiveAdd()
        .then(() => require("../../Git").status);
    });
  })();
});
