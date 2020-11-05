"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    return require("./Lib").updateStateWithPrompt("message", function ({
      message,
    }) {
      return require("../../PromptFor").input({
        message: "Enter your git-commit message:",
        default: message,
      });
    });
  })();
});
