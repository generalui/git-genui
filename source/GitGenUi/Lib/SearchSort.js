"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["RegExp", "escapeRegexp", "min", "present", "nearInfinity"],
    [global, require("art-standard-lib")],
    (RegExp, escapeRegexp, min, present, nearInfinity) => {
      let stableSort,
        searchMatch,
        compareMatchQuality,
        getSearchRegExp,
        getMatchQuality,
        approximateSearchSort;
      stableSort = require("stable");
      searchMatch = function(searchString, string) {
        return getSearchRegExp(searchString).test(string);
      };
      return {
        compareMatchQuality: (compareMatchQuality = function(a, b) {
          return a.quality - b.quality;
        }),
        getSearchRegExp: (getSearchRegExp = function(searchString) {
          return {
            searchString,
            caseInsensative: new RegExp(
              Caf.array(searchString.split(""), letter =>
                escapeRegexp(letter)
              ).join(".*?"),
              "ig"
            ),
            caseSensative: new RegExp(
              Caf.array(searchString.split(""), letter =>
                escapeRegexp(letter)
              ).join(".*?"),
              "g"
            )
          };
        }),
        getMatchQuality: (getMatchQuality = function(
          string,
          { caseInsensative, caseSensative, searchString }
        ) {
          let quality, match, fullMatch;
          quality = 1 / 0;
          caseSensative.lastIndex = caseInsensative.lastIndex;
          match = fullMatch = null;
          while (
            (fullMatch = caseInsensative.exec(string)) &&
            (match = fullMatch[0])
          ) {
            let caseSensativeMatchLength, position, base, base1;
            caseSensativeMatchLength =
              Caf.exists((base = caseSensative.exec(string))) &&
              Caf.exists((base1 = base[0])) && base1.length;
            caseSensative.lastIndex = caseInsensative.lastIndex =
              1 + (position = fullMatch.index);
            quality = min(
              quality,
              (match.length * 10000 +
                (caseSensativeMatchLength === match.length ? 1 : 0)) *
                10000 +
                position
            );
          }
          return quality;
        }),
        approximateSearchSort: (approximateSearchSort = function(
          searchString,
          strings
        ) {
          let searchRegExp, sortedStringsWithMatchLength, found;
          if (!present(searchString)) {
            return strings;
          }
          searchRegExp = getSearchRegExp(searchString);
          sortedStringsWithMatchLength = stableSort(
            Caf.each2(
              strings,
              string => {
                let quality;
                return nearInfinity >
                  (quality = getMatchQuality(string, searchRegExp))
                  ? found.push({ quality, string })
                  : undefined;
              },
              null,
              (found = [])
            ),
            compareMatchQuality
          );
          return Caf.array(
            sortedStringsWithMatchLength,
            ({ string }) => string
          );
        })
      };
    }
  );
});
