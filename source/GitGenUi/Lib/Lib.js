"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["formatDate", "toSeconds", "Promise", "log"],
    [global, require("art-standard-lib")],
    (formatDate, toSeconds, Promise, log) => {
      return [
        require("./Autocomplete"),
        require("./SearchSort"),
        require("./SourceRoots"),
        {
          standardFormatDate: function(date) {
            return formatDate(
              date != null ? date : toSeconds(),
              "yyyy-mm-dd HH:MM:ss"
            );
          },
          applyActions: function(input, actions, options) {
            let resultPromise;
            resultPromise = Promise.then(() => input);
            Caf.each2(
              actions,
              (action, index) =>
                (resultPromise = resultPromise.then(previousResult =>
                  Promise.resolve(previousResult)
                    .then(action)
                    .catch(error => {
                      if (!(Caf.exists(options) && options.quiet)) {
                        log.error({
                          message: `Error in postCommitAction (index = ${Caf.toString(
                            index
                          )})\nAction: ${Caf.toString(action)}`,
                          error
                        });
                      }
                      return previousResult;
                    })
                ))
            );
            return resultPromise;
          }
        }
      ];
    }
  );
});
