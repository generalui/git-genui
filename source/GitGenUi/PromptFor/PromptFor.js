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
      "isString",
      "autocompleteFromStrings",
      "Array",
      "max",
      "blue",
      "pad",
      "presentValue",
      "compactFlatten",
      "Function"
    ],
    [
      global,
      require("art-standard-lib"),
      require("art-class-system"),
      require("../Lib"),
      require("colors")
    ],
    (
      present,
      Error,
      Promise,
      merge,
      Object,
      String,
      isString,
      autocompleteFromStrings,
      Array,
      max,
      blue,
      pad,
      presentValue,
      compactFlatten,
      Function
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
        let partialEq, findDefaultItem, numberValues;
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
          let itemsWereStrings, defaultItem, strings;
          if (isString(items[0])) {
            itemsWereStrings = true;
            items = Caf.array(items, string => {
              return { value: string };
            });
          }
          if (multiselect) {
            _default = Caf.array(
              items,
              item => item.value,
              item => item.selected
            );
          } else {
            if ((defaultItem = findDefaultItem(items, _default))) {
              items = Caf.array(items, null, item => item !== defaultItem, [
                defaultItem
              ]);
            }
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
            let resolveValue;
            resolveValue = value => {
              let item;
              value = patchAutocompleteResult(value, strings);
              item = items[strings.indexOf(value)];
              return itemsWereStrings ? item.value : item;
            };
            return Caf.is(value, Array)
              ? value.map(resolveValue)
              : resolveValue(value);
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
        numberValues = function(list) {
          let maxLabel;
          maxLabel = Caf.reduce(
            list,
            (m, { label = "" }) => (m = max(m, label.length)),
            null,
            0
          );
          return Caf.array(list, (item, index) => {
            let shortcut, value, label;
            shortcut = item.shortcut;
            value = item.value;
            label = item.label;
            if (present(label)) {
              value =
                blue(pad(label + ":", maxLabel + 2)) + presentValue(value);
            }
            return merge(item, {
              value: `${Caf.toString(
                shortcut != null ? shortcut : index + 1
              )}. ${Caf.toString(value)}`
            });
          });
        };
        this.menu = (state, options) => {
          let preprocessState,
            postprocessState,
            exitPrompt,
            items,
            temp,
            temp1,
            temp2;
          preprocessState =
            undefined !== (temp = options.preprocessState) ? temp : a => a;
          postprocessState =
            undefined !== (temp1 = options.postprocessState) ? temp1 : a => a;
          exitPrompt =
            undefined !== (temp2 = options.exitPrompt) ? temp2 : "exit";
          items = options.items;
          return Promise.resolve(state)
            .then(preprocessState)
            .then(state =>
              this.selectList(
                merge(options, {
                  items: numberValues(
                    compactFlatten([
                      Caf.is(items, Function) ? items(state) : items,
                      {
                        exit: true,
                        value: `${Caf.toString(exitPrompt)}`,
                        shortcut: "0"
                      }
                    ])
                  )
                })
              ).then(({ action, exit }) =>
                Promise.then(() => {
                  let temp3;
                  return (temp3 = Caf.isF(action) && action(state)) != null
                    ? temp3
                    : state;
                })
                  .then(postprocessState)
                  .then(newState =>
                    exit ? newState : this.menu(newState, options)
                  )
              )
            );
        };
      }));
    }
  );
});
