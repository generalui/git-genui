"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    return function ({ project, story }) {
      let temp;
      return require("../../PromptFor")
        .selectList({
          prompt: "Select story estimate:",
          default: `${Caf.toString(
            (temp = story.estimate) != null ? temp : "-"
          )}`,
          items: project.pointScale.split(","),
        })
        .then((v) => v | 0);
    };
  })();
});
