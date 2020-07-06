"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let Object = global.Object,
    String = global.String,
    partialEq,
    findDefaultItem,
    findDefaultItemIndex;
  return {
    partialEq: (partialEq = function(a, b) {
      return !Caf.find(a, null, (v, k) => b[k] !== v);
    }),
    findDefaultItem: (findDefaultItem = function(items, _default) {
      return items[findDefaultItemIndex(items, _default)];
    }),
    findDefaultItemIndex: (findDefaultItemIndex = function(items, _default) {
      let from,
        into,
        to,
        i1,
        temp,
        from1,
        into1,
        to1,
        i2,
        temp1,
        from2,
        into2,
        to2,
        i3,
        temp2;
      if (!_default) {
        return undefined;
      }
      return (() => {
        switch (false) {
          case !Caf.is(_default, Object):
            return (
              (from = items),
              (into = null),
              from != null
                ? ((to = from.length),
                  (i1 = 0),
                  (() => {
                    while (i1 < to) {
                      let item, i;
                      item = from[i1];
                      i = i1;
                      if (partialEq(_default, item)) {
                        into = i;
                        break;
                      }
                      temp = i1++;
                    }
                    return temp;
                  })())
                : undefined,
              into
            );
          case !Caf.is(_default, String):
            return (
              (from1 = items),
              (into1 = null),
              from1 != null
                ? ((to1 = from1.length),
                  (i2 = 0),
                  (() => {
                    while (i2 < to1) {
                      let item, i;
                      item = from1[i2];
                      i = i2;
                      if (item.value === _default) {
                        into1 = i;
                        break;
                      }
                      temp1 = i2++;
                    }
                    return temp1;
                  })())
                : undefined,
              into1
            );
          default:
            return (
              (from2 = items),
              (into2 = null),
              from2 != null
                ? ((to2 = from2.length),
                  (i3 = 0),
                  (() => {
                    while (i3 < to2) {
                      let item, i;
                      item = from2[i3];
                      i = i3;
                      if (item.default) {
                        into2 = i;
                        break;
                      }
                      temp2 = i3++;
                    }
                    return temp2;
                  })())
                : undefined,
              into2
            );
        }
      })();
    })
  };
});
