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
      "formattedInspect",
      "Promise",
      "log"
    ],
    [global, require("art-standard-lib")],
    (
      formatDate,
      toSeconds,
      present,
      Array,
      String,
      formattedInspect,
      Promise,
      log
    ) => {
      let colorizeValue, colorNotPresent, presentValue, ignoreRejections;
      return [
        require("./Autocomplete"),
        require("./SearchSort"),
        require("./SourceRoots"),
        require("./CommitStateLib"),
        {
          standardFormatDate: function(date) {
            return formatDate(
              date != null ? date : toSeconds(),
              "yyyy-mm-dd HH:MM:ss"
            );
          }
        },
        {
          applyActions: require("./applyActions"),
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
          }),
          ignoreRejections: (ignoreRejections = function(a) {
            return Promise.then(a).catch(({ message }) => {
              log.warn(message);
              return undefined;
            });
          })
        }
      ];
    }
  );
});
