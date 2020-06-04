"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["log"],
    [global, require("../StandardImport")],
    log => {
      return function(state) {
        log({ AddStoryComment: state });
        return state;
      };
    }
  );
});
