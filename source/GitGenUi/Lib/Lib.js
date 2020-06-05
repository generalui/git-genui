"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["formatDate", "toSeconds"],
    [global, require("art-standard-lib")],
    (formatDate, toSeconds) => {
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
        { applyActions: require("./applyActions") }
      ];
    }
  );
});
