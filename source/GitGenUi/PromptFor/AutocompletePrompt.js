"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["String", "Error", "Function", "isArray", "max"],
    [global, require("art-standard-lib")],
    (String, Error, Function, isArray, max) => {
      let readlineUtils,
        Base,
        Paginator,
        colors,
        applyColors,
        AutocompletePrompt;
      readlineUtils = require("inquirer/lib/utils/readline");
      Base = require("inquirer/lib/prompts/base");
      Paginator = require("inquirer/lib/utils/paginator");
      colors = {
        tip: require("chalk").tip,
        selected: require("chalk").selected,
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
          constructor(questions, rl, answers) {
            super(...arguments);
            if (!Caf.is(this.opt.source, Function)) {
              this.throwParamError("source");
            }
            this.currentChoices = [];
            this.renderCount = 0;
            this.selected = 0;
            this.opt.default = null;
            this.colors = applyColors(this.opt.colors);
            this.paginator = new Paginator();
          }
        },
        function(AutocompletePrompt, classSuper, instanceSuper) {
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
            this.rl.on("keypress", e => {
              let base;
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
            return this.rl.on("line", line => {
              let choice;
              return this.currentChoices.length <= this.selected
                ? (this.rl.write(line), this.search(line))
                : ((choice = this.currentChoices[this.selected]),
                  (this.answer = choice.value),
                  (this.answerName = choice.name),
                  (this.shortAnswer = choice.short),
                  (this.status = "answered"),
                  this.render(),
                  this.screen.done(),
                  this.done(choice.value));
            });
          };
          this.prototype.listRender = function(choices, pointer) {
            return Caf.array(choices, (choice, i) => {
              let isSelected;
              return (isSelected = i === pointer)
                ? this.colors.selected(
                    `${Caf.toString(require("figures").pointer)} ${Caf.toString(
                      choice.name
                    )}`
                  )
                : `  ${Caf.toString(choice.name)}`;
            }).join("\n");
          };
          this.prototype.render = function() {
            let content, bottomContent;
            content = this.getQuestion();
            bottomContent = "";
            if (this.renderCount === 0) {
              content += this.colors.tip("(Use arrow keys or type to search)");
            }
            this.renderCount++;
            if (this.status === "answered") {
              content += this.colors.selected(
                this.shortAnswer || this.answerName || this.answer
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
            let thisPromise;
            return this.lastSearchTerm !== searchTerm
              ? ((this.selected = 0),
                this.renderCount > 0
                  ? ((this.searching = true),
                    (this.currentChoices = []),
                    this.render())
                  : undefined,
                (this.lastPromise = thisPromise = this.opt.source(
                  this.answers,
                  (this.lastSearchTerm = searchTerm)
                )).then(choices =>
                  thisPromise === this.lastPromise
                    ? (Caf.find(
                        (this.currentChoices = choices),
                        (choice, i) => (this.selected = i),
                        (choice, i) => choice.selected
                      ),
                      (this.searching = false),
                      this.render())
                    : undefined
                ))
              : undefined;
          };
          this.prototype.setSelected = function(selected) {
            return (this.selected = Caf.mod(
              selected,
              max(1, this.currentChoices.length)
            ));
          };
        }
      ));
    }
  );
});
