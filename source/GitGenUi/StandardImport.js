"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return require("art-standard-lib").mergeWithSelf(
    require("art-class-system"),
    require("art-communication-status"),
    require("./Config"),
    require("./Lib")
  );
});
