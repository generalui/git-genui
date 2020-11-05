"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    return function ({ project, story }) {
      return require("../../PromptFor").input({
        message: "Edit story's name:",
        default: story.name,
      });
    };
  })();
});
