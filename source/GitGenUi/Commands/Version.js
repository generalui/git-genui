"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return {
    description: "show version",
    run: function() {
      return require("../../../package").version;
    }
  };
});
