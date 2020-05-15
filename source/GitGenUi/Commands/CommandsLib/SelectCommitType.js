"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    return require("./Lib").updateStateWithPrompt("type", function({ type }) {
      return require("../../PromptFor")
        .selectList({
          prompt: "Select commit type:",
          default: { type },
          items: [
            {
              type: "wip",
              value:
                "wip:               work-in-progress, possibly non-working, no version change (yet)"
            },
            {
              type: "patch/test",
              value:
                "patch/test:        tests added, improved or fixed          version + 0.0.1"
            },
            {
              type: "patch/fix",
              value:
                "patch/fix:         code fixed and passing tests            version + 0.0.1"
            },
            {
              type: "patch/improvement",
              value:
                "patch/improvement: patch-sized feature improvement         version + 0.0.1"
            },
            {
              type: "patch/refactor",
              value:
                "patch/refactor:    code quality improved                   version + 0.0.1"
            },
            {
              type: "patch/perf",
              value:
                "patch/perf:        performance improved                    version + 0.0.1"
            },
            {
              type: "patch/constants",
              value:
                "patch/constants:   strings / non-functional constants      version + 0.0.1"
            },
            {
              type: "patch/asset",
              value:
                "patch/asset:       assets: images, fonts, etc...           version + 0.0.1"
            },
            {
              type: "patch/doc",
              value:
                "patch/doc:         README/documentation/comments updated   version + 0.0.1"
            },
            {
              type: "patch/whitespace",
              value:
                "patch/whitespace:  code formatting / non-functional change version + 0.0.1"
            },
            {
              type: "patch/other",
              value:
                "patch/other:       other patch-level change or chore       version + 0.0.1"
            },
            {
              type: "minor/feature",
              value:
                "minor/feature:     new feature added or extended           version + 0.1.0"
            },
            {
              type: "minor/depricate",
              value:
                "minor/depricate:   feature depricated                      version + 0.1.0"
            },
            {
              type: "major/change",
              value:
                "major/change:      breaking feature change                 version + 1.0.0"
            },
            {
              type: "major/removal",
              value:
                "major/removal:     breaking feature removal                version + 1.0.0"
            }
          ]
        })
        .then(({ type }) => type);
    });
  })();
});
