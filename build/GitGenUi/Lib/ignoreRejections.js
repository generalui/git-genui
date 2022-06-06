"use strict"
let Caf = require('caffeine-script-runtime');
Caf.defMod(module, () => {return Caf.importInvoke(["Promise", "log"], [global, require('./StandardImport')], (Promise, log) => {let ignoreRejections; return ignoreRejections = function(a) {return Promise.then(a).catch(({message}) => {log.warn(message); return undefined;});};});});
//# sourceMappingURL=ignoreRejections.js.map
