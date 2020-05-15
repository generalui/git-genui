"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["present"],
    [global, require("../StandardImport")],
    present => {
      return require("./Lib").updateStateWithPrompt("message", function({
        message
      }) {
        return require("../../PromptFor")
          .input({
            message: "Enter your git-commit message:",
            default: message
          })
          .then(m => (present(m) ? m : message));
      });
    }
  );
});
