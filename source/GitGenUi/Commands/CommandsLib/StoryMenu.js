"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["log", "merge"],
    [global, require("../StandardImport")],
    (log, merge) => {
      return require("./Lib").updateStateWithPrompt("story", function(state) {
        log(
          `Tip: Select ${Caf.toString(
            require("../../Style").green("(none)")
          )} for no story. It's at the bottom of the story list.`
        );
        return require("./SelectStory")(
          merge(state, { prompt: "What story does this commit advance most?" })
        );
      });
    }
  );
});
