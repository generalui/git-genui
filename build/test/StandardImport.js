"use strict"
let Caf = require('caffeine-script-runtime');
Caf.defMod(module, () => {let Object = global.Object, describe; return require('art-standard-lib').mergeWithSelf(require('art-testbench'), require('../'), {GitGenUi: require('..//GitGenUi'), describe: describe = function(a, b) {return (Caf.is(a, Object)) ? Caf.each2(a, (v, k) => describe(k, v)) : global.describe(a, () => {b(); return undefined;});}});});
//# sourceMappingURL=StandardImport.js.map
