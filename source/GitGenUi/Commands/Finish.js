"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return require("./CommandsLib").ChangeStateCliCommand("finished");
});
