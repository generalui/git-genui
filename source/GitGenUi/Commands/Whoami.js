"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "ensureTrackerTokenValid",
      "log",
      "objectWithout",
      "standardFormatDate",
      "Array",
      "Object"
    ],
    [global, require("./StandardImport"), require("./CommandsLib")],
    (
      ensureTrackerTokenValid,
      log,
      objectWithout,
      standardFormatDate,
      Array,
      Object
    ) => {
      return {
        description: "show which tracker account you are logged in with",
        run: function(options) {
          return ensureTrackerTokenValid()
            .then(() => require("../Tracker").tracker.myAccount)
            .then(account => {
              log({
                [account.tracker]: Caf.object(
                  objectWithout(account, "tracker", "kind"),
                  (v, k) =>
                    /^(created|updated)At$/.test(k) ? standardFormatDate(v) : v,
                  (v, k) => !Caf.is(v, Array) && !Caf.is(v, Object)
                )
              });
              return null;
            });
        }
      };
    }
  );
});
