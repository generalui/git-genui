"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["process", "Promise", "approximateSearchSort"],
    [global, require("./StandardImport"), require("./SearchSort")],
    (process, Promise, approximateSearchSort) => {
      let autocompleteFromStrings;
      return {
        autocompleteFromStrings: (autocompleteFromStrings = function(strings) {
          return (answersSoFar, input) => {
            let columns;
            columns = process.stdout.columns;
            return Promise.resolve(
              Caf.array(approximateSearchSort(input, strings), str =>
                str.slice(0, columns - 3)
              )
            );
          };
        })
      };
    }
  );
});
