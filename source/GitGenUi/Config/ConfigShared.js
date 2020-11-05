"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "BaseClass",
      "Promise",
      "isString",
      "present",
      "Error",
      "toInspectedObjects",
      "compactFlatten",
      "String",
      "Object",
      "formattedInspect",
      "lowerCamelCase",
      "merge",
      "deepMerge",
      "consistentJsonStringify",
      "JSON",
    ],
    [global, require("./StandardImport")],
    (
      BaseClass,
      Promise,
      isString,
      present,
      Error,
      toInspectedObjects,
      compactFlatten,
      String,
      Object,
      formattedInspect,
      lowerCamelCase,
      merge,
      deepMerge,
      consistentJsonStringify,
      JSON
    ) => {
      let ConfigShared;
      return (ConfigShared = Caf.defClass(
        class ConfigShared extends BaseClass {},
        function (ConfigShared, classSuper, instanceSuper) {
          this.initSingleton = function () {
            return this.singleton
              .init()
              .then(() => this.singleton.readyPromise)
              .then(() => this.singleton);
          };
          this.prototype.init = function (configFilePath) {
            return Promise.all([this.configPath, this.configBasename])
              .then(([configPath, configBasename]) => {
                if (!(isString(configPath) && present(configPath))) {
                  throw new Error("configPath must be a string");
                }
                if (!(isString(configBasename) && present(configBasename))) {
                  throw new Error("configBasename must be a string");
                }
                return require("path").join(configPath, configBasename);
              })
              .then((configFilePath) => {
                this.configFilePath = configFilePath;
                return this.load();
              });
          };
          this.property("config", "configFilePath", "existedAtLoad");
          this.getter({
            configPath: function () {
              return (() => {
                throw new Error("must override configPath");
              })();
            },
            configBasename: function () {
              return (() => {
                throw new Error("must override configBasename");
              })();
            },
            state: function () {
              return this.config;
            },
            homeDirRelativeConfigFilePath: function () {
              return this.configFilePath.replace(require("os").homedir(), "~");
            },
            inspectedObjects: function () {
              return toInspectedObjects(this.config);
            },
          });
          this.configFields = function (...fields) {
            return Caf.each2(compactFlatten(fields), (field) =>
              (() => {
                switch (false) {
                  case !Caf.is(field, String):
                    return this._addConfigField(field);
                  case !Caf.is(field, Object):
                    return Caf.each2(field, (_default, key) =>
                      this._addConfigField(key, _default)
                    );
                  default:
                    return (() => {
                      throw new Error(
                        `unsupported configFields param type: ${Caf.toString(
                          formattedInspect({ field })
                        )} (expecting String or Object)`
                      );
                    })();
                }
              })()
            );
          };
          this._addConfigField = function (field, _default) {
            this.getter({
              [field]: function () {
                let temp;
                return (temp = this.config[field]) != null ? temp : _default;
              },
            });
            this.prototype[
              lowerCamelCase(`set ${Caf.toString(field)}`)
            ] = function (v) {
              return this.setConfigProperty(field, v);
            };
            this.prototype[
              lowerCamelCase(`merge ${Caf.toString(field)} with`)
            ] = function (...args) {
              return this.setConfigProperty(field, merge(this[field], ...args));
            };
            return (this.prototype[
              lowerCamelCase(`deep merge ${Caf.toString(field)} with`)
            ] = function (...args) {
              return this.setConfigProperty(
                field,
                deepMerge(this[field], ...args)
              );
            });
          };
          this.prototype.setConfigProperty = function (key, value) {
            this._config = merge(this._config);
            this._config[key] = value;
            return this.save();
          };
          this.prototype.save = function () {
            return Promise.then(() =>
              require("fs-extra").writeFile(
                this.configFilePath,
                consistentJsonStringify(this.config, "  ")
              )
            ).then(() => this);
          };
          this.prototype.load = function () {
            return Promise.then(() =>
              require("fs-extra").exists(this.configFilePath)
            )
              .then((existedAtLoad) => {
                this.existedAtLoad = existedAtLoad;
                return this.existedAtLoad
                  ? require("fs-extra")
                      .readFile(this.configFilePath)
                      .then((data) => JSON.parse(data.toString()))
                  : {};
              })
              .then((config) => this.setConfig(config))
              .then(() => this);
          };
        }
      ));
    }
  );
});
