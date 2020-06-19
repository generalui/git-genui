"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    return require("./Lib").updateStateWithPrompt("type", function({ type }) {
      return require("../../PromptFor")
        .selectList({
          prompt: "Select commit type:",
          default: { type },
          items: Caf.array(
            [
              {
                value:
                  "wip:               work-in-progress, possibly non-working, no version change (yet)"
              },
              {
                value:
                  "patch/assets:      non-code assets changed (images, fonts, etc...)"
              },
              {
                value:
                  "patch/constants:   strings / non-functional constants changed"
              },
              { value: "patch/deps:        updated external dependenceis" },
              {
                value:
                  "patch/doc:         README/documentation/comments updated"
              },
              { value: "patch/fix:         code fixed and passing tests" },
              {
                value:
                  "patch/improvement: feature improvement (doesn't change external API)"
              },
              { value: "patch/perf:        performance improved" },
              {
                value: "patch/refactor:    clean up and/or improve code quality"
              },
              { value: "patch/test:        tests added, improved or fixed" },
              { value: "patch/other:       other patch-level change or chore" },
              {
                value:
                  "patch/whitespace:  code formatting / non-functional change"
              },
              { value: "minor/feature:     new feature added or extended" },
              { value: "minor/deprecate:   feature deprecated" },
              { value: "major/change:      breaking feature change" },
              { value: "major/removal:     breaking feature removal" }
            ],
            v => {
              return { value: v.value, type: v.value.split(":")[0] };
            }
          )
        })
        .then(({ type }) => type);
    });
  })();
});
