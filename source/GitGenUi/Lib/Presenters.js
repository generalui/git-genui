"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "formatDate",
      "toSeconds",
      "present",
      "Array",
      "String",
      "formattedInspect"
    ],
    [global, require("art-standard-lib")],
    (formatDate, toSeconds, present, Array, String, formattedInspect) => {
      let colorizeValue, colorNotPresent, presentValue;
      return {
        standardFormatDate: function(date) {
          return formatDate(
            date != null ? date : toSeconds(),
            "yyyy-mm-dd HH:MM:ss"
          );
        },
        colorizeValue: (colorizeValue = require("colors").yellow),
        colorNotPresent: (colorNotPresent = require("colors").grey),
        presentValue: (presentValue = function(value, noneValue = "none") {
          return present(value)
            ? Caf.is(value, Array) && Caf.is(value[0], String)
              ? Caf.array(value, v => colorizeValue(v)).join(", ")
              : Caf.is(value, String)
              ? colorizeValue(value)
              : formattedInspect(value, { color: true })
            : colorNotPresent(noneValue);
        })
      };
    }
  );
});
