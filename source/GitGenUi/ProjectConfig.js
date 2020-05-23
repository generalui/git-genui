"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Promise", "SourceRoots", "process", "log"],
    [global, require("./StandardImport"), { path: require("path") }],
    (Promise, SourceRoots, process, log) => {
      let ProjectConfig;
      return (ProjectConfig = Caf.defClass(
        class ProjectConfig extends require("./ConfigShared") {},
        function(ProjectConfig, classSuper, instanceSuper) {
          this.singletonClass();
          this.sourceRootIndicatorFiles = [".git", this.configBasename];
          this.getter({
            project: function() {
              return this.config.project;
            }
          });
          this.classGetter({
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
              return (temp = this._repoRoot) != null
                ? temp
                : (this._repoRoot = Promise.then(() =>
                    new SourceRoots(
                      this.sourceRootIndicatorFiles
                    ).findSourceRoot(process.cwd())
                  ).catch(error => {
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
