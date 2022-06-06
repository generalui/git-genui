"use strict"
let Caf = require('caffeine-script-runtime');
Caf.defMod(module, () => {return Caf.importInvoke(["log", "InteractiveAdd"], [global, require('./StandardImport'), require('../Widgets')], (log, InteractiveAdd) => {return {description: "stage or unstage files to commit", run: function(options) {log(`Tip: You can also stage files with ${Caf.toString(require('../Style').green("git add"))}.`); return InteractiveAdd(options).then(() => null);}};});});
//# sourceMappingURL=Stage.js.map
