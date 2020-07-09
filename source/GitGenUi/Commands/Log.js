"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["log", "formatDate"],
    [
      global,
      require("./StandardImport"),
      require("./CommandsLib"),
      { Style: require("../Style") }
    ],
    (log, formatDate) => {
      return {
        description: "log commits",
        run: function() {
          return require("../Git")
            .getCommitLog()
            .then(list => {
              let from, into, to, i;
              from = list;
              into = from;
              if (from != null) {
                to = from.length;
                i = 0;
                while (i < to) {
                  let hash, date, message, refs, authorName, authorEmail;
                  ({
                    hash,
                    date,
                    message,
                    refs,
                    authorName,
                    authorEmail
                  } = from[i]);
                  log(
                    `${Caf.toString(hash.slice(0, 7))} ${Caf.toString(
                      formatDate(date)
                    )}`
                  );
                  i++;
                }
              }
              into;
              return null;
            });
        }
      };
    }
  );
});
