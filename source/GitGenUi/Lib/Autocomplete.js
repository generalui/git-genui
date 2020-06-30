"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["process", "Promise", "approximateSearchSort", "sliceAnsi"],
    [
      global,
      require("./StandardImport"),
      require("./SearchSort"),
      { sliceAnsi: require("slice-ansi") }
    ],
    (process, Promise, approximateSearchSort, sliceAnsi) => {
      let autocompleteFromStrings;
      return {
        autocompleteFromStrings: (autocompleteFromStrings = function(strings) {
          return (answersSoFar, input) => {
            let columns;
            columns = process.stdout.columns;
            return Promise.resolve(
              Caf.array(approximateSearchSort(input, strings), str =>
                sliceAnsi(str, 0, columns - 3)
              )
            );
          };
        })
      };
    }
  );
});
