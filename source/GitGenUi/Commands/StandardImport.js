"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return require("../StandardImport").mergeWithSelf({
    tracker: require("../Tracker").tracker,
  });
});
