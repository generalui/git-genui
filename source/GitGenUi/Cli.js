"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["log", "String", "dashCase", "merge"],
    [global, require("art-standard-lib")],
    (log, String, dashCase, merge) => {
      return {
        run: function() {
          log("start");
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
                    "git-genui's goal is to streamline developer workflow in these areas:\n\n* updating tracker stories\n* tracking semantic changes\n* tracking coauthors",
                  commands: Caf.object(commands, m =>
                    merge(m, {
                      options: merge(
                        {
                          quiet: "no extra output",
                          verbose: "run with verbose logging"
                        },
                        m.options
                      )
                    })
                  )
                }
              });
            });
        }
      };
    }
  );
});
