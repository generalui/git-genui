"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Promise", "present", "Error", "merge", "toSeconds"],
    [global, require("./StandardImport")],
    (Promise, present, Error, merge, toSeconds) => {
      let UserConfig;
      return (UserConfig = Caf.defClass(
        class UserConfig extends require("./ConfigShared") {},
        function(UserConfig, classSuper, instanceSuper) {
          let getProjectKey;
          this.singletonClass();
          this.getProjectKey = getProjectKey = function({
            origin,
            remotes,
            projectFolder
          }) {
            let temp, base, base1;
            return (temp =
              origin != null
                ? origin
                : Caf.exists(remotes) &&
                  Caf.exists((base = remotes[0])) &&
                    Caf.exists((base1 = base.refs)) && base1.fetch) != null
              ? temp
              : projectFolder;
          };
          this.classGetter({
            configBasename: function() {
              return "git-genui.user.config.json";
            },
            configFilePathPromise: function() {
              return Promise.then(() =>
                require("path").join(
                  require("os").homedir(),
                  this.configBasename
                )
              );
            }
          });
          this.getter("projectKey", {
            commitOptionsForProject: function(projectKey = this.projectKey) {
              return this.commitOptions[projectKey];
            }
          });
          this.configFields({ accounts: {}, commitOptions: {} });
          this.prototype.init = function() {
            return instanceSuper.init
              .apply(this, arguments)
              .then(() =>
                Promise.deepAll({
                  origin: require("../Git").origin,
                  remotes: require("../Git").remotes,
                  projectFolder: require("./ProjectConfig").repoRootPromise.then(
                    require("path").basename
                  )
                })
              )
              .catch(() => {
                return {};
              })
              .then(getProjectKey)
              .then(k => (this._projectKey = k));
          };
          this.prototype.saveCommitOptionsForProject = function(
            commitOptions,
            projectKey = this.projectKey
          ) {
            let updatedAt, temp, base;
            if (!present(projectKey)) {
              throw new Error("projectKey required to save default options");
            }
            return this.setConfigProperty(
              "commitOptions",
              merge(this.commitOptions, {
                [projectKey]: merge(commitOptions, {
                  updatedAt: (updatedAt = toSeconds()),
                  createdAt:
                    (temp =
                      Caf.exists((base = this.commitOptions[projectKey])) &&
                      base.createdAt) != null
                      ? temp
                      : updatedAt
                })
              })
            );
          };
        }
      ));
    }
  );
});
