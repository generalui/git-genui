"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let Neptune = global.Neptune;
  return {
    description: "show version",
    run: function ({ verbose }) {
      return verbose ? Neptune : require("../../../package").version;
    },
  };
});
