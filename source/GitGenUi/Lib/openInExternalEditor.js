"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let Promise = global.Promise,
    present = global.present;
  return function(value) {
    return Promise.withCallback(callback =>
      require("external-editor")
        .editAsync(value, callback)
        .then(newValue => newValue.trim())
        .then(newValue => (present(newValue) ? newValue : null))
    );
  };
});
