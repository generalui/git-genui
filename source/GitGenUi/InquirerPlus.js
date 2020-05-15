"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "Promise",
      "compactFlatten",
      "merge",
      "Function",
      "deepMerge",
      "log",
      "autocompleteFromStrings"
    ],
    [
      global,
      require("art-standard-lib"),
      require("art-class-system"),
      require("./Lib")
    ],
    (
      Promise,
      compactFlatten,
      merge,
      Function,
      deepMerge,
      log,
      autocompleteFromStrings
    ) => {
      let InquirerPlus;
      require("inquirer").registerPrompt(
        "autocomplete",
        require("inquirer-autocomplete-prompt")
      );
      require("inquirer").registerPrompt(
        "checkbox-plus",
        require("inquirer-checkbox-plus-prompt")
      );
      return (InquirerPlus = Caf.defClass(
        class InquirerPlus extends Object {},
        function(InquirerPlus, classSuper, instanceSuper) {
          let extendAskPromise;
          this.inquire = function(...prompts) {
            let serializer;
            serializer = new Promise.Serializer();
            return Promise.all(
              Caf.array(compactFlatten(prompts), prompt =>
                serializer.then(() => this._inquireOne(prompt))
              )
            ).then(merge);
          };
          this._inquireOne = function(prompt) {
            return require("inquirer").prompt.then(result => {
              if (prompt.postprocess) {
                result[prompt.name] = prompt.postprocess(result[prompt.name]);
              }
              return result;
            });
          };
          extendAskPromise = askPromise => {
            return {
              then: function(a, b) {
                return extendAskPromise(askPromise.then(a, b));
              },
              tap: function(f) {
                return this.then(a => {
                  f(a);
                  return a;
                });
              },
              catch: function(f) {
                return this.then(a => a, f);
              },
              thenAsk: function(...prompts) {
                return this.then(a1 =>
                  require("inquirer")
                    .prompt(
                      compactFlatten(
                        Caf.is(prompts, Function) ? prompts(a1) : prompts
                      )
                    )
                    .then(a2 => deepMerge(a1, a2))
                );
              }
            };
          };
          this.prime = defaultAnswers =>
            extendAskPromise(Promise.resolve(defaultAnswers));
          this.ask = (...prompts) =>
            extendAskPromise(
              require("inquirer").prompt(compactFlatten(prompts))
            );
          this.AutoCompleteQ = function(options) {
            return log(
              "autoCompleteQ",
              merge(
                {
                  type: "autocomplete",
                  source: autocompleteFromStrings(
                    compactFlatten(options.strings)
                  )
                },
                options
              )
            );
          };
          this.YesNoQ = function(options) {
            return merge(
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
            );
          };
          this.InputQ = function(options) {
            return merge({ type: "input" }, options);
          };
          this.PasswordQ = function(options) {
            return merge({ type: "password" }, options);
          };
          this.CheckboxQ = function(options) {
            return merge(
              {
                type: "checkbox-plus",
                pageSize: 20,
                highlight: true,
                searchable: true,
                source: autocompleteFromStrings(compactFlatten(options.strings))
              },
              options
            );
          };
          this.SelectStoryQ = (stories, options) =>
            stories &&
            this.AutoCompleteQ(
              merge(
                {
                  name: "story",
                  message: "Select a story...",
                  pageSize: 20,
                  strings: compactFlatten([
                    stories.map(require("./Tracker").tracker.formatStory),
                    "(none)"
                  ]),
                  filter: val => {
                    let m, id;
                    return val === "(none)"
                      ? null
                      : (m = val.match(/^\[#([^\]]+)/))
                      ? ((id = m[1]),
                        Caf.find(
                          stories,
                          null,
                          story => `${Caf.toString(story.id)}` === id
                        ))
                      : undefined;
                  }
                },
                options
              )
            );
        }
      ));
    }
  );
});
