"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["log", "InteractiveAdd"],
    [global, require("./StandardImport"), require("../Widgets")],
    (log, InteractiveAdd) => {
      return {
        description: "add (stage) or remove (unstage) files to commit",
        run: function() {
          log(
            `Tip: You can also stage files with ${Caf.toString(
              require("colors").green("git add")
            )}.`
          );
          return InteractiveAdd().then(() => null);
        }
      };
    }
  );
});
