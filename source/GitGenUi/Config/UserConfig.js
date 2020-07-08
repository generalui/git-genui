"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["os", "Promise", "ProjectFiles", "present", "Error", "merge", "toSeconds"],
    [
      global,
      require("./StandardImport"),
      {
        ProjectFiles: require("./ProjectFiles"),
        path: require("path"),
        os: require("os")
      }
    ],
    (os, Promise, ProjectFiles, present, Error, merge, toSeconds) => {
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
          this.getter({
            configBasename: function() {
              return "git-genui.user.config.json";
            },
            configPath: function() {
              return os.homedir();
            },
            commitOptionsForProject: function(projectKey = this.projectKey) {
              return this.commitOptions[projectKey];
            }
          });
          this.property("projectKey");
          this.configFields({ accounts: {}, commitOptions: {} });
          this.prototype.init = function(git) {
            git != null ? git : (git = require("../Git"));
            return instanceSuper.init
              .apply(this, arguments)
              .then(() =>
                Promise.deepAll({
                  origin: git.origin,
                  remotes: git.remotes,
                  projectFolder: ProjectFiles.projectFolder
                })
              )
              .catch(error => {
                return {};
              })
              .then(getProjectKey)
              .then(projectKey => (this.projectKey = projectKey));
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
