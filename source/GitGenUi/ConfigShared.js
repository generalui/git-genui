"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "BaseClass",
      "Promise",
      "toInspectedObjects",
      "merge",
      "deepMerge",
      "consistentJsonStringify",
      "JSON"
    ],
    [global, require("./StandardImport")],
    (
      BaseClass,
      Promise,
      toInspectedObjects,
      merge,
      deepMerge,
      consistentJsonStringify,
      JSON
    ) => {
      let ConfigShared;
      return (ConfigShared = Caf.defClass(
        class ConfigShared extends BaseClass {},
        function(ConfigShared, classSuper, instanceSuper) {
          this.initSingleton = function() {
            return this.getConfigFilePathPromise()
              .then(configFilePath => this.singleton.init(configFilePath))
              .then(() => this.singleton.readyPromise)
              .then(() => this.singleton);
          };
          this.prototype.init = function(configFilePath) {
            this.configFilePath = configFilePath;
            return Promise.resolve();
          };
          this.property("config");
          this.getter("configFilePath", {
            state: function() {
              return this.config;
            },
            homeDirRelativeConfigFilePath: function() {
              return this.configFilePath.replace(require("os").homedir(), "~");
            },
            readyPromise: function() {
              return this._readyPromise;
            },
            inspectedObjects: function() {
              return toInspectedObjects(this.config);
            }
          });
          this.setter({
            configFilePath: function(cfp) {
              this._configFilePath = cfp;
              return this._load();
            }
          });
          this.prototype.setConfigProperty = function(key, value) {
            this._config = merge(this._config);
            this._config[key] = value;
            return this._save();
          };
          this.prototype.deepMergeInto = function(config) {
            this._config = deepMerge(this._config, config);
            return this._save();
          };
          this.prototype._save = function() {
            let filePath;
            return require("fs-extra")
              .writeFile(
                (filePath = this.configFilePath),
                consistentJsonStringify(this.config, "  ")
              )
              .then(() => this.config);
          };
          this.prototype._load = function() {
            return (this._readyPromise = Promise.then(() =>
              require("fs-extra").exists(this.configFilePath)
            )
              .then(exists =>
                exists
                  ? require("fs-extra")
                      .readFile(this.configFilePath)
                      .then(data => JSON.parse(data.toString()))
                  : {}
              )
              .then(config => this.setConfig(config)));
          };
        }
      ));
    }
  );
});
