"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "String",
      "Error",
      "Function",
      "formattedInspect",
      "isArray",
      "process",
      "sliceAnsi",
      "findDefaultItemIndex",
      "max"
    ],
    [
      global,
      require("art-standard-lib"),
      require("./PromptForLib"),
      { sliceAnsi: require("slice-ansi") }
    ],
    (
      String,
      Error,
      Function,
      formattedInspect,
      isArray,
      process,
      sliceAnsi,
      findDefaultItemIndex,
      max
    ) => {
      let readlineUtils,
        Base,
        Paginator,
        observe,
        takeWhile,
        colors,
        applyColors,
        AutocompletePrompt;
      readlineUtils = require("inquirer/lib/utils/readline");
      Base = require("inquirer/lib/prompts/base");
      Paginator = require("inquirer/lib/utils/paginator");
      observe = require("inquirer/lib/utils/events");
      ({ takeWhile } = require("rxjs/operators"));
      colors = {
        tip: require("chalk").grey,
        selected: require("chalk").white.bold,
        warning: require("chalk").yellow,
        error: require("chalk").red
      };
      applyColors = function(customColors) {
        return Caf.object(colors, (c, k) => {
          let color, temp;
          c =
            (temp = Caf.exists(customColors) && customColors[k]) != null
              ? temp
              : c;
          return Caf.is(c, String)
            ? (!(color = require("chalk")[c])
                ? (() => {
                    throw new Error(
                      `invalid color ${Caf.toString(k)}: '${Caf.toString(c)}'`
                    );
                  })()
                : undefined,
              color)
            : Caf.is(c, Function)
            ? c
            : (() => {
                throw new Error(
                  `invalid color for ${Caf.toString(
                    k
                  )} - expecting string or function`
                );
              })();
        });
      };
      return (AutocompletePrompt = Caf.defClass(
        class AutocompletePrompt extends Base {
          constructor(options, rl, answers) {
            super(...arguments);
            if (!Caf.is(this.opt.source, Function)) {
              this.throwParamError("source");
            }
            this.currentChoices = [];
            this.renderCount = 0;
            this.selected = 0;
            this.default = this.opt.default;
            this.opt.default = null;
            this.errorMessage = null;
            this.colors = applyColors(this.opt.colors);
            this.paginator = new Paginator();
          }
        },
        function(AutocompletePrompt, classSuper, instanceSuper) {
          this.prototype.logFile = function(...args) {
            if ((args.length = 1)) {
              [args] = args;
            }
            return require("fs").appendFileSync(
              "prompt.log",
              (Caf.is(args, String) ? args : formattedInspect(args)) + "\n"
            );
          };
          this.prototype._run = function(done) {
            this.done = done;
            if (isArray(this.rl.history)) {
              this.rl.history = [];
            }
            this.bindEvents();
            this.search();
            return this;
          };
          this.prototype.bindEvents = function() {
            let events, dontHaveAnswer;
            events = observe(this.rl);
            events.line
              .pipe(takeWhile((dontHaveAnswer = () => !this.answer)))
              .forEach(line =>
                this.currentChoices.length <= this.selected
                  ? (this.rl.write(line), this.search(line))
                  : ((this.answer = this.currentChoices[this.selected]),
                    this.render(),
                    this.screen.done(),
                    this.done(this.answer))
              );
            return events.keypress
              .pipe(takeWhile(dontHaveAnswer))
              .forEach(e => {
                let base;
                this.errorMessage = null;
                return (() => {
                  switch (Caf.exists((base = e.key)) && base.name) {
                    case "down":
                      this.setSelected(this.selected + 1);
                      this.render();
                      return readlineUtils.up(this.rl, 2);
                    case "up":
                      this.setSelected(this.selected - 1);
                      return this.render();
                    default:
                      return this.search(this.rl.line);
                  }
                })();
              });
          };
          this.prototype.listRender = function(choices, pointer) {
            let columns;
            columns = process.stdout.columns;
            return Caf.array(choices, ({ value }, i) => {
              let line, isSelected;
              line = sliceAnsi(value, 0, columns - 3);
              return (isSelected = i === pointer)
                ? this.colors.selected(
                    `${Caf.toString(require("figures").pointer)} ${Caf.toString(
                      line
                    )}`
                  )
                : `  ${Caf.toString(line)}`;
            }).join("\n");
          };
          this.prototype.render = function() {
            let content, bottomContent, temp;
            content = this.getQuestion();
            bottomContent = "";
            if (this.renderCount === 0) {
              content += this.colors.tip("(Use arrow keys or type to search)");
            }
            if (this.errorMessage) {
              content += this.colors.error(
                `ERROR: ${Caf.toString(this.errorMessage)}`
              );
            }
            this.renderCount++;
            if (this.answer) {
              content += this.colors.selected(
                (temp = this.answer.label) != null ? temp : this.answer.value
              );
            } else {
              content += this.rl.line;
              bottomContent = this.searching
                ? "  " + this.colors.tip("Searching...")
                : this.currentChoices.length > 0
                ? this.paginator.paginate(
                    this.listRender(this.currentChoices, this.selected),
                    this.selected,
                    this.opt.pageSize
                  )
                : "  " + this.colors.warning("No results...");
            }
            return this.screen.render(content, bottomContent);
          };
          this.prototype.search = function(searchTerm) {
            let firstSearch, thisPromise;
            this.setSelected(0);
            if (this.searchedOnce) {
              this.searching = true;
              this.currentChoices = [];
              this.render();
            } else {
              firstSearch = true;
              this.searchedOnce = true;
            }
            return (this.lastPromise = thisPromise = this.opt.source(
              this.answers,
              (this.lastSearchTerm = searchTerm)
            ))
              .then(choices => {
                let temp;
                return thisPromise === this.lastPromise
                  ? ((this.currentChoices = Caf.array(choices, choice =>
                      Caf.is(choice, String) ? { value: choice } : choice
                    )),
                    firstSearch
                      ? this.setSelected(
                          (temp = findDefaultItemIndex(
                            this.currentChoices,
                            this.default
                          )) != null
                            ? temp
                            : 0
                        )
                      : undefined,
                    (this.searching = false),
                    this.render())
                  : undefined;
              })
              .catch(error => (this.errorMessage = error.message));
          };
          this.prototype.setSelected = function(selected) {
            return (this.selected = Caf.mod(
              selected != null ? selected : 0,
              max(1, this.currentChoices.length)
            ));
          };
        }
      ));
    }
  );
});
