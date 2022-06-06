"use strict"
let Caf = require('caffeine-script-runtime');
Caf.defMod(module, () => {return Caf.importInvoke(["ConfigureMenu"], [global, require('./StandardImport'), require('./CommandsLib'), {Style: require('../Style')}], (ConfigureMenu) => {return {description: "configure git-genui", run: ConfigureMenu};});});
//# sourceMappingURL=Config.js.map
