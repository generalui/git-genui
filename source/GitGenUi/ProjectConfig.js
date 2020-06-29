"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["merge", "objectWithout", "Promise", "SourceRoots", "process", "log"],
    [global, require("./StandardImport"), { path: require("path") }],
    (merge, objectWithout, Promise, SourceRoots, process, log) => {
      let ProjectConfig;
      return (ProjectConfig = Caf.defClass(
        class ProjectConfig extends require("./ConfigShared") {},
        function(ProjectConfig, classSuper, instanceSuper) {
          this.singletonClass();
          this.sourceRootIndicatorFiles = [".git", this.configBasename];
          this.configFields("tracker", { commit: { format: "standard" } });
          this.prototype._load = function() {
            return instanceSuper._load
              .apply(this, arguments)
              .then(config =>
                this.setConfig(this._normalizeDepricatedConfig(config))
              );
          };
          this.prototype._normalizeDepricatedConfig = function(config) {
            return Caf.exists(config) && config.project
              ? merge(objectWithout(config, "project"), config.project)
              : config;
          };
          this.classGetter("repoRoot", {
            projectFolder: function() {
              return require("path").basename(this.repoRoot);
            },
            configBasename: function() {
              return "git-genui.config.json";
            },
            configFilePathPromise: function() {
              return this.repoRootPromise.then(
                dir => dir && require("path").join(dir, this.configBasename)
              );
            },
            repoRootPromise: function() {
              let temp;
              return (temp = this._repoRootPromise) != null
                ? temp
                : (this._repoRootPromise = Promise.then(() =>
                    new SourceRoots(
                      this.sourceRootIndicatorFiles
                    ).findSourceRoot(process.cwd())
                  )
                    .tap(r => (this._repoRoot = r))
                    .catch(error => {
                      log({ error });
                      log.warn(
                        'No in a project. Expecing to find the ".git" folder a current or parent folder.'
                      );
                      return null;
                    }));
            }
          });
        }
      ));
    }
  );
});
