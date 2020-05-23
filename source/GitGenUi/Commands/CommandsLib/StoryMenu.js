"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["log"],
    [global, require("../StandardImport")],
    log => {
      return require("./Lib").updateStateWithPrompt("story", function({
        stories,
        story
      }) {
        log(
          `Tip: Select ${Caf.toString(
            require("colors").green("(none)")
          )} for no story. It's at the bottom of the story list.`
        );
        return require("../../GitGenUiPromptFor").story(
          stories,
          "What story does this commit advance most?",
          story
        );
      });
    }
  );
});
