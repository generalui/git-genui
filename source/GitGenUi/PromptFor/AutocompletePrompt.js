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
      "merge",
      "process",
      "sliceAnsi",
      "present",
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
      merge,
      process,
      sliceAnsi,
      present,
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
        currentLine: require("chalk").white.bold,
        selected: require("chalk").greenBright,
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
            this.currentItems = [];
            this.renderCount = 0;
            this.selected = 0;
            this.itemsWereStrings = false;
            if ((this.multiselect = this.opt.multiselect)) {
              this.selectedById = {};
            }
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
                this.currentItems.length <= this.selected
                  ? (this.rl.write(line), this.search(line))
                  : ((this.answer = this.multiselect
                      ? Caf.array(this.selectedById)
                      : this.getCurrentItem()),
                    this.render(),
                    this.screen.done(),
                    this.done(this.answer))
              );
            return events.keypress
              .pipe(takeWhile(dontHaveAnswer))
              .forEach(e => {
                let meta, ctrl, shift, name, mergedName, handled, item, temp;
                return (Caf.exists((temp = e.key))
                ? ((meta = temp.meta),
                  (ctrl = temp.ctrl),
                  (shift = temp.shift),
                  (name = temp.name))
                : undefined)
                  ? ((this.errorMessage = null),
                    (() => {
                      switch (
                        (mergedName = `${Caf.toString(
                          ctrl ? "ctrl_" : ""
                        )}${Caf.toString(name)}`)
                      ) {
                        case "down":
                          return this.down();
                        case "up":
                          return this.up();
                        default:
                          handled = true;
                          if ((handled = this.multiselect)) {
                            switch (mergedName) {
                              case "space":
                                if ((item = this.getCurrentItem())) {
                                  if (this.selectedById[item.id]) {
                                    delete this.selectedById[item.id];
                                  } else {
                                    this.selectedById[item.id] = item;
                                  }
                                  this.down();
                                }
                                this.rl.line = this.rl.line.trim();
                                break;
                              case "ctrl_a":
                                return this.selectAll();
                                break;
                              case "ctrl_n":
                                return this.selectNone();
                                break;
                              case "ctrl_i":
                                return this.invertSelection();
                                break;
                              default:
                                handled = false;
                            }
                          }
                          return !handled
                            ? this.search(this.rl.line)
                            : undefined;
                      }
                    })())
                  : undefined;
              });
          };
          this.prototype.selectAll = function() {
            this.selectedById = merge(
              this.selectedById,
              Caf.object(this.currentItems, null, null, null, item => item.id)
            );
            return this.render();
          };
          this.prototype.selectNone = function() {
            this.selectedById = {};
            return this.render();
          };
          this.prototype.getCurrentItem = function() {
            return this.currentItems[this.selected];
          };
          this.prototype.invertSelection = function() {
            this.selectedById = Caf.object(
              this.currentItems,
              null,
              item => !this.selectedById[item.id],
              null,
              item => item.id
            );
            return this.render();
          };
          this.prototype.down = function() {
            this.setSelected(this.selected + 1);
            this.render();
            return readlineUtils.up(this.rl, 2);
          };
          this.prototype.up = function() {
            this.setSelected(this.selected - 1);
            return this.render();
          };
          this.prototype.listRender = function(items, pointer) {
            let columns;
            columns = process.stdout.columns;
            return Caf.array(items, (item, i) => {
              let line, isSelected;
              line = sliceAnsi(
                ((isSelected = i === pointer)
                  ? require("figures").pointer + ""
                  : " ") +
                  (this.multiselect
                    ? this.selectedById[item.id]
                      ? this.colors.selected(require("figures").radioOn)
                      : require("figures").radioOff
                    : "") +
                  " " +
                  item.value,
                0,
                columns - 1
              );
              return isSelected ? this.colors.currentLine(line) : line;
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
              content += this.colors.currentLine(
                (temp = this.answer.label) != null ? temp : this.answer.value
              );
            } else {
              content += this.rl.line;
              bottomContent = this.searching
                ? "  " + this.colors.tip("Searching...")
                : this.currentItems.length > 0
                ? this.paginator.paginate(
                    this.listRender(this.currentItems, this.selected),
                    this.selected,
                    this.opt.pageSize
                  )
                : "  " + this.colors.warning("No results...");
            }
            return this.screen.render(content, bottomContent);
          };
          this.prototype.getNormalizedItems = function(items) {
            return this.itemsWereStrings ||
              (items[0] && Caf.is(items[0], String))
              ? ((this.itemsWereStrings = true),
                Caf.array(items, item => {
                  if (!Caf.is(item, String)) {
                    throw new Error(
                      "If any item is a string, all items must be strings."
                    );
                  }
                  return { id: item, value: item };
                }))
              : Caf.array(items, item => {
                  if (!Caf.is(item.value, String)) {
                    throw new Error("Every item should have a .value.");
                  }
                  return !present(item.id)
                    ? merge(item, { id: item.value })
                    : item;
                });
          };
          this.prototype.search = function(searchTerm) {
            let firstSearch, thisPromise;
            this.setSelected(0);
            if (this.searchedOnce) {
              this.searching = true;
              this.currentItems = [];
              this.render();
            } else {
              firstSearch = true;
              this.searchedOnce = true;
            }
            return (this.lastPromise = thisPromise = this.opt.source(
              this.answers,
              (this.lastSearchTerm = searchTerm)
            ))
              .then(items => {
                let temp;
                return thisPromise === this.lastPromise
                  ? ((this.currentItems = this.getNormalizedItems(items)),
                    firstSearch
                      ? this.setSelected(
                          (temp = findDefaultItemIndex(
                            this.currentItems,
                            this.default
                          )) != null
                            ? temp
                            : 0
                        )
                      : undefined,
                    this.multiselect
                      ? (this.selectedById = merge(
                          this.selectedById,
                          Caf.object(
                            this.currentItems,
                            null,
                            item => item.selected,
                            null,
                            item => item.id
                          )
                        ))
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
              max(1, this.currentItems.length)
            ));
          };
        }
      ));
    }
  );
});
