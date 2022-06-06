"use strict"
let Caf = require('caffeine-script-runtime');
Caf.defMod(module, () => {return (() => {return {description: "show git status", options: {verbose: ["verbose", "show detailed git and git-genui status"]}, run: function(options) {require('../Git').printStatus(options); return null;}};})();});
//# sourceMappingURL=Status.js.map
