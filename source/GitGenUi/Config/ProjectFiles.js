"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["BaseClass", "SourceRoots", "process", "path"],
    [
      global,
      require("./StandardImport"),
      { path: require("path"), SourceRoots: require("./SourceRoots") }
    ],
    (BaseClass, SourceRoots, process, path) => {
      let ProjectFiles;
      return (ProjectFiles = Caf.defClass(
        class ProjectFiles extends BaseClass {},
        function(ProjectFiles, classSuper, instanceSuper) {
          this.projectConfigFilename = "git-genui.config.json";
          this.projectRootIndicatorFiles = [".git", this.projectConfigFilename];
          this.init = function() {
            return (this._projectFilesInitPromise = new SourceRoots(
              this.projectRootIndicatorFiles
            )
              .findSourceRoot(process.cwd())
              .then(projectRoot => {
                this.projectRoot = projectRoot;
                return (this.projectFolder = path.basename(this.projectRoot));
              }));
          };
          this.classProperty("projectFolder", "projectRoot");
        }
      ));
    }
  );
});
