"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Promise", "merge", "toSeconds"],
    [global, require("./StandardImport")],
    (Promise, merge, toSeconds) => {
      let UserConfig;
      return (UserConfig = Caf.defClass(
        class UserConfig extends require("./ConfigShared") {},
        function(UserConfig, classSuper, instanceSuper) {
          this.singletonClass();
          this.classGetter({
            configFilePathPromise: function() {
              return Promise.then(() =>
                require("path").join(
                  require("os").homedir(),
                  "git-genui.user.config.json"
                )
              );
            }
          });
          this.getter("currentProjectKey", {
            accounts: function() {
              let temp;
              return (temp = this.config.accounts) != null ? temp : {};
            },
            commitOptions: function() {
              let temp;
              return (temp = this.config.commitOptions) != null ? temp : {};
            },
            commitOptionsForProject: function(
              projectKey = this.currentProjectKey
            ) {
              return this.commitOptions[projectKey];
            }
          });
          this.setter({
            accounts: function(a) {
              return this.setConfigProperty("accounts", a);
            }
          });
          this.prototype.saveCommitOptionsForProject = function(
            commitOptions,
            projectKey = this.currentProjectKey
          ) {
            let updatedAt, temp, base;
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
