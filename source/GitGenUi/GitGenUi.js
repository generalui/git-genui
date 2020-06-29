"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return [
    require("./Cli"),
    require("./Lib"),
    { getInitialCommitState: require("./getInitialCommitState") }
  ];
});
