"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["String", "log", "dashCase", "merge"],
    [global, require("art-standard-lib")],
    (String, log, dashCase, merge) => {
      return {
        run: function() {
          return require("./Config")
            .load()
            .then(projectConfig =>
              require("./Tracker").tracker.init(projectConfig)
            )
            .then(() => {
              let commands;
              commands = Caf.object(require("./Commands").modules, null, m =>
                Caf.is(m.description, String)
              );
              return require("@art-suite/cli").start({
                commands: Caf.object(commands, ({ run }, command) => params => {
                  !params.quiet &&
                    log(
                      require("colors").bold(
                        require("colors").brightWhite(
                          `git genui ${Caf.toString(dashCase(command))}`
                        )
                      )
                    );
                  return run(params);
                }),
                help: {
                  description:
                    "git-genui's goal is to streamline developer workflow in these areas:\n\n* updating tracker stories\n* tracking semantic changes\n* tracking coauthors\n\nThe primary command is 'git-genui commit'. That command will prompt you through any configuration needed and all options for making a commit. The primary affect is to craft a well-formated git-commit message. Optionally, you can pass one or more of the commit options on the command-line.",
                  commands: Caf.object(commands, m => merge(m, m.options))
                }
              });
            });
        }
      };
    }
  );
});
