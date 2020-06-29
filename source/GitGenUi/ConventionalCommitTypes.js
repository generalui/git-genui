"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return "build:              build system or external dependencies\nci:                 CI configuration files and scripts\ndocs:               Documentation only changes\nfeat:               new feature added or extended (minor version change)\nfix:                code fixed and passing tests (patch version change)\nperf:               performance improved\nrefactor:           code change that neither fixes a bug nor adds a feature\nstyle:              non-functional change (white-space, formatting, semi-colons)\ntest:               tests added, improved or fixed";
});
