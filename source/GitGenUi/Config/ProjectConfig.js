"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let ProjectConfig;
    return (ProjectConfig = Caf.defClass(
      class ProjectConfig extends require("./ConfigShared") {},
      function (ProjectConfig, classSuper, instanceSuper) {
        this.singletonClass();
        this.configFields({ tracker: {}, commit: { format: "standard" } });
        this.getter({
          configBasename: function () {
            return "git-genui.config.json";
          },
          configPath: function () {
            return require("./ProjectFiles").projectRoot;
          },
          conventionalCommit: function () {
            return this.commit.format === "conventionalCommit";
          },
          standardCommit: function () {
            return this.commit.format === "standard";
          },
        });
        this.prototype.init = function () {
          return require("./ProjectFiles")
            .init()
            .then(() => instanceSuper.init.apply(this, arguments));
        };
      }
    ));
  })();
});
