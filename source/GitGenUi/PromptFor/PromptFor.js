"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "present",
      "Error",
      "Promise",
      "merge",
      "Object",
      "String",
      "autocompleteFromStrings"
    ],
    [
      global,
      require("art-standard-lib"),
      require("art-class-system"),
      require("../Lib")
    ],
    (
      present,
      Error,
      Promise,
      merge,
      Object,
      String,
      autocompleteFromStrings
    ) => {
      let inquire, patchAutocompleteResult, Core;
      require("inquirer").registerPrompt(
        "autocomplete",
        require("inquirer-autocomplete-prompt")
      );
      require("inquirer").registerPrompt(
        "checkbox-plus",
        require("inquirer-checkbox-plus-prompt")
      );
      inquire = function(options) {
        if (present(options.name)) {
          throw new Error(
            "no need to specify 'name' - just your value is returned w/o a wrapping object"
          );
        }
        return Promise.then(() => {
          let temp;
          return require("inquirer").prompt(
            merge(options, {
              name: "value",
              message: (temp = options.prompt) != null ? temp : options.message
            })
          );
        }).then(({ value }) => value);
      };
      patchAutocompleteResult = function(value, strings) {
        let temp;
        if (Caf.in(value, strings)) {
          return value;
        }
        return (temp = Caf.find(
          strings,
          null,
          v => value.length < v.length && value === v.slice(0, value.length)
        )) != null
          ? temp
          : value;
      };
      return (Core = Caf.defClass(class Core extends Object {}, function(
        Core,
        classSuper,
        instanceSuper
      ) {
        let partialEq, findDefaultItem;
        partialEq = function(a, b) {
          return !Caf.find(a, null, (v, k) => b[k] !== v);
        };
        findDefaultItem = function(items, _default) {
          return (() => {
            switch (false) {
              case !Caf.is(_default, Object):
                return Caf.find(items, null, item => partialEq(_default, item));
              case !Caf.is(_default, String):
                return Caf.find(items, null, item => item.value === _default);
              default:
                return Caf.find(items, null, item => item.default);
            }
          })();
        };
        this.selectList = function({
          items,
          multiselect,
          prompt,
          default: _default
        }) {
          let defaultItem, strings;
          if (Caf.is(items[0], String)) {
            items = Caf.array(strings, string => {
              return { value: strings };
            });
          }
          if ((defaultItem = findDefaultItem(items, _default))) {
            items = Caf.array(items, null, item => item !== defaultItem, [
              defaultItem
            ]);
          }
          strings = Caf.array(items, ({ value }) => value);
          return inquire({
            prompt,
            default: _default,
            type: multiselect ? "checkbox-plus" : "autocomplete",
            pageSize: 20,
            source: autocompleteFromStrings(strings),
            highlight: true,
            searchable: true
          }).then(value => {
            value = patchAutocompleteResult(value, strings);
            return items[strings.indexOf(value)];
          });
        };
        this.yesNo = function(options) {
          return inquire(
            merge(
              {
                type: "expand",
                default:
                  options.default === true || options.default === "yes"
                    ? "yes"
                    : "no",
                choices: [
                  { key: "y", value: "yes", name: "yes" },
                  { key: "n", value: "no", name: "no" }
                ]
              },
              options
            )
          );
        };
        this.input = function(options) {
          return inquire(merge({ type: "input" }, options)).then(str =>
            !options.canBeBlank
              ? present(str)
                ? str
                : options.default
              : undefined
          );
        };
        this.password = options =>
          this.input(merge(options, { type: "password" }));
        this.password = function(options) {
          return inquire(merge({ type: "password" }, options));
        };
      }));
    }
  );
});
