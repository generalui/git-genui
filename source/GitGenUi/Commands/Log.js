"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "toSeconds",
      "max",
      "compactFlattenAll",
      "merge",
      "Style",
      "pad",
      "durationString",
      "objectWithout",
      "formatDate",
      "tracker"
    ],
    [
      global,
      require("./StandardImport"),
      require("./CommandsLib"),
      { Style: require("../Style") }
    ],
    (
      toSeconds,
      max,
      compactFlattenAll,
      merge,
      Style,
      pad,
      durationString,
      objectWithout,
      formatDate,
      tracker
    ) => {
      let shortName;
      shortName = function(name) {
        return name.split(/@|\s/)[0];
      };
      return {
        description: "log commits",
        run: function() {
          return require("../Git")
            .getCommitLog()
            .then(list => {
              let maxTypeLength, maxTrackerId, now, selected, main;
              maxTypeLength = 0;
              maxTrackerId = 0;
              Caf.each2(list, ({ type, trackerId }) => {
                if (type != null) {
                  maxTypeLength = max(maxTypeLength, type.length);
                }
                return trackerId
                  ? (maxTrackerId = max(maxTrackerId, trackerId.length))
                  : undefined;
              });
              now = toSeconds();
              selected = null;
              main = () => {
                let from, into, to, i, temp;
                return require("../PromptFor")
                  .item({
                    pageSize: "max",
                    items:
                      ((from = list),
                      (into = []),
                      from != null
                        ? ((to = from.length),
                          (i = 0),
                          (() => {
                            while (i < to) {
                              let entry,
                                hash,
                                semanticVersion,
                                subject,
                                type,
                                trackerId,
                                date,
                                footer,
                                coauthors,
                                authors;
                              entry = from[i];
                              into.push(
                                (((hash = entry.hash),
                                (semanticVersion = entry.semanticVersion),
                                (subject = entry.subject),
                                (type = entry.type),
                                (trackerId = entry.trackerId),
                                (date = entry.date),
                                (footer = entry.footer)),
                                (coauthors = compactFlattenAll(
                                  entry.authorName,
                                  Caf.exists(footer) && footer["co-authored-by"]
                                )),
                                (authors = Caf.array(coauthors, author =>
                                  shortName(author)
                                )),
                                merge(entry, {
                                  value: `${Caf.toString(
                                    Style.grey(hash.slice(0, 7))
                                  )} ${Caf.toString(
                                    Style.brightGreen(
                                      pad(
                                        durationString(now - toSeconds(date)),
                                        3,
                                        " ",
                                        true
                                      )
                                    )
                                  )} ${Caf.toString(
                                    pad(
                                      trackerId
                                        ? Style.grey(
                                            `#${Caf.toString(trackerId)}`
                                          )
                                        : "",
                                      maxTrackerId + 1
                                    )
                                  )} ${Caf.toString(
                                    Style[
                                      semanticVersion === "major"
                                        ? "red"
                                        : semanticVersion === "minor"
                                        ? "blue"
                                        : "grey"
                                    ](
                                      (semanticVersion || "     ") +
                                        (semanticVersion && type ? "/" : " ") +
                                        pad(
                                          type != null ? type : "",
                                          maxTypeLength
                                        )
                                    )
                                  )} ${Caf.toString(
                                    Style.green(authors.join(", "))
                                  )} ${Caf.toString(subject)}`
                                }))
                              );
                              temp = i++;
                            }
                            return temp;
                          })())
                        : undefined,
                      into)
                  })
                  .then(selected =>
                    require("../PromptFor")
                      .menu({
                        items: Caf.array(
                          objectWithout(selected, "value", "id", "rawMessage"),
                          (value, label) => {
                            if (label === "date") {
                              value = formatDate(value);
                            }
                            return {
                              value,
                              label,
                              action: (() => {
                                switch (label) {
                                  case "trackerId":
                                    return () =>
                                      tracker.openStoryInBrowser(value);
                                }
                              })()
                            };
                          }
                        )
                      })
                      .then(main)
                  );
              };
              return main();
            });
        }
      };
    }
  );
});
