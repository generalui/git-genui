"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["InteractiveAdd"],
    [global, require("./StandardImport"), require("../Widgets")],
    InteractiveAdd => {
      return {
        description: "add (stage) or remove (unstage) files to commit",
        run: InteractiveAdd
      };
    }
  );
});
