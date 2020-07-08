"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["ChangeStateCliCommand"],
    [global, require("./StandardImport"), require("./CommandsLib")],
    ChangeStateCliCommand => {
      return ChangeStateCliCommand("finished");
    }
  );
});
