"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["formatDate", "toSeconds"],
    [global, require("art-standard-lib")],
    (formatDate, toSeconds) => {
      return [
        require("./Autocomplete"),
        require("./Git"),
        require("./SearchSort"),
        require("./SourceRoots"),
        {
          standardFormatDate: function(date) {
            return formatDate(
              date != null ? date : toSeconds(),
              "yyyy-mm-dd HH:MM:ss"
            );
          }
        }
      ];
    }
  );
});
