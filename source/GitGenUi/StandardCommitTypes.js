"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return "wip:                work-in-progress, possibly non-working, no version change\npatch:              patch-level change or chore\npatch/doc:          README/documentation/comments updated\npatch/style:        non-functional change (white-space, formatting, semi-colons)\npatch/assets:       changed non-code assets (e.g. icons, videos, images, fonts)\npatch/test:         tests added, improved or fixed\npatch/deps:         updated external dependencies\npatch/refactor:     non-functional clean up and/or improve code quality\npatch/perf:         performance improved\npatch/fix:          code fixed and passing tests\npatch/improvement:  feature improvement (doesn't change external API)\nminor/feature:      new feature added or extended\nminor/deprecation:  feature deprecated\nmajor/change:       breaking feature changed\nmajor/removal:      breaking feature removed";
});
