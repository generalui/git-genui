"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    return {
      description: "show git status",
      run: function() {
        require("../Git").printStatus();
        return null;
      }
    };
  })();
});
