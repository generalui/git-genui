"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Promise", "present"],
    [global, require("./StandardImport")],
    (Promise, present) => {
      return function(value) {
        return Promise.withCallback(callback =>
          require("external-editor").editAsync(value, callback)
        )
          .then(newValue => newValue.trim())
          .then(newValue => (present(newValue) ? newValue : null));
      };
    }
  );
});
