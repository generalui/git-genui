"use strict"
let Caf = require('caffeine-script-runtime');
Caf.defMod(module, () => {return (() => {return {description: "open tracker in the browser", run: function() {require('../Tracker').tracker.openInBrowser(); return "Tracker should now open in your browser.";}};})();});
//# sourceMappingURL=OpenTracker.js.map
