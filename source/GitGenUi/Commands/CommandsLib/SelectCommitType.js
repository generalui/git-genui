"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["log"],
    [global, require("../StandardImport")],
    (log) => {
      return require("./Lib").updateStateWithPrompt("type", function ({
        type,
      }) {
        log(
          " \nCommit types are listed in ascending order of importance.\nIf your commit matches more than one category, choose the one closer to the bottom."
        );
        return require("../../PromptFor")
          .selectList({
            prompt: "Select commit type:",
            default: { type },
            items: Caf.array(
              require("../../CommitTypes")().split(/\n/g),
              (value) => {
                return { value, type: value.split(":")[0] };
              }
            ),
          })
          .then(({ type }) => type);
      });
    }
  );
});
