"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["BaseClass", "Promise", "present", "compactFlatten"],
    [global, require("./StandardImport")],
    (BaseClass, Promise, present, compactFlatten) => {
      let fs, path, glob, SourceRoots;
      fs = require("fs-extra");
      path = require("path");
      glob = require("glob-promise");
      return (SourceRoots = Caf.defClass(
        class SourceRoots extends BaseClass {
          constructor(...rootFiles) {
            super(...arguments);
            this.rootFiles = compactFlatten(rootFiles);
            this.knownSourceRoots = {};
          }
        },
        function(SourceRoots, classSuper, instanceSuper) {
          this.property("knownSourceRoots", "rootFiles");
          this.prototype.findSourceRoot = function(directory) {
            directory = path.resolve(directory);
            return fs.stat(directory).then(stat => {
              if (!stat.isDirectory()) {
                directory = path.dirname(directory);
              }
              return (
                this.knownSourceRoots[directory] ||
                this._findRootR(directory).then(
                  sourceRoot =>
                    (this.knownSourceRoots[directory] = sourceRoot || false)
                )
              );
            });
          };
          this.prototype._findRootR = function(directory) {
            return Promise.all(
              Caf.array(this.rootFiles, file => {
                let p;
                return glob((p = path.join(directory, file))).then(found =>
                  found.length > 0 ? true : undefined
                );
              })
            ).then(rootFileExistResults =>
              Caf.find(rootFileExistResults)
                ? directory
                : directory !== "/" &&
                  directory !== require("os").homedir() &&
                  present(directory)
                ? this._findRootR(path.dirname(directory), this.rootFiles)
                : null
            );
          };
        }
      ));
    }
  );
});
