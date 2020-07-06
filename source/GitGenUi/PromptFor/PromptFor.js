"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "present",
      "Error",
      "Promise",
      "merge",
      "isString",
      "approximateSearchSort",
      "max",
      "pad",
      "grey",
      "blue",
      "presentValue",
      "compactFlatten",
      "Function"
    ],
    [
      global,
      require("art-standard-lib"),
      require("art-class-system"),
      require("../Lib"),
      require("../Style"),
      require("./PromptForLib")
    ],
    (
      present,
      Error,
      Promise,
      merge,
      isString,
      approximateSearchSort,
      max,
      pad,
      grey,
      blue,
      presentValue,
      compactFlatten,
      Function
    ) => {
      let inquire, Core;
      require("inquirer").registerPrompt(
        "autocomplete",
        require("./AutocompletePrompt")
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
      return (Core = Caf.defClass(class Core extends Object {}, function(
        Core,
        classSuper,
        instanceSuper
      ) {
        let numberValues;
        this.selectList = function({
          items,
          multiselect,
          prompt,
          default: _default
        }) {
          let itemsWereStrings, values, itemsByValue;
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
          }
          values = Caf.array(items, ({ value }) => value);
          itemsByValue = Caf.object(
            items,
            null,
            null,
            null,
            item => item.value
          );
          return inquire({
            prompt,
            default: _default,
            type: multiselect ? "checkbox-plus" : "autocomplete",
            pageSize: 20,
            source: (answersSoFar, input) =>
              Promise.resolve(
                Caf.array(
                  approximateSearchSort(input, values),
                  value => itemsByValue[value]
                )
              )
          }).then(item => (itemsWereStrings ? item.value : item));
        };
        this.item = this.selectList;
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
              ? (() => {
                  switch (false) {
                    case !present(str):
                      return str;
                    case !((Caf.exists(str) && str.length) > 0):
                      return "";
                    default:
                      return options.default;
                  }
                })()
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
            let shortcut, value, label, disabled;
            shortcut = item.shortcut;
            value = item.value;
            label = item.label;
            disabled = item.disabled;
            if (present(label)) {
              label = pad(label + ":", maxLabel + 2);
              value = disabled
                ? grey(label + value)
                : blue(label) + presentValue(value);
            } else {
              if (disabled) {
                value = grey(value);
              }
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
              ).then(item => {
                let action, exit, disabled;
                action = item.action;
                exit = item.exit;
                disabled = item.disabled;
                return Promise.then(() => {
                  let temp3;
                  return (temp3 =
                    !disabled && Caf.isF(action) && action(state)) != null
                    ? temp3
                    : state;
                })
                  .then(postprocessState)
                  .then(newState =>
                    exit
                      ? newState
                      : this.menu(
                          newState,
                          merge(options, {
                            default: item ? { label: item.label } : undefined
                          })
                        )
                  );
              })
            );
        };
      }));
    }
  );
});
