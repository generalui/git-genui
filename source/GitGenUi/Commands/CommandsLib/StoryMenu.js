"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    return require("./Lib").updateStateWithPrompt("story", function({
      stories,
      story
    }) {
      return require("../../GitGenUiPromptFor").story(
        stories,
        "What story does this commit advance most?",
        story
      );
    });
  })();
});
