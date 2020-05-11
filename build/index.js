module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*******************!*\
  !*** ./index.caf ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return __webpack_require__(/*! ./source */ 3);
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 1 */
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 2 */
/*!******************************************************************************************!*\
  !*** external "require('caffeine-script-runtime' /* ABC - not inlining fellow NPM *_/)" ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('caffeine-script-runtime' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 3 */
/*!**************************!*\
  !*** ./source/index.caf ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return __webpack_require__(/*! ./GitGenUi */ 4);
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 4 */
/*!**********************************!*\
  !*** ./source/GitGenUi/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// generated by Neptune Namespaces v4.x.x
// file: GitGenUi/index.js

(module.exports = __webpack_require__(/*! ./namespace */ 5))
.includeInNamespace(__webpack_require__(/*! ./GitGenUi */ 14))
.addModules({
  Cli:               __webpack_require__(/*! ./Cli */ 15),
  Config:            __webpack_require__(/*! ./Config */ 18),
  Git:               __webpack_require__(/*! ./Git */ 50),
  GitGenUiPromptFor: __webpack_require__(/*! ./GitGenUiPromptFor */ 61),
  InquirerPlus:      __webpack_require__(/*! ./InquirerPlus */ 43),
  Pizza:             __webpack_require__(/*! ./pizza */ 74),
  StandardImport:    __webpack_require__(/*! ./StandardImport */ 19),
  Tracker:           __webpack_require__(/*! ./Tracker */ 33)
});
__webpack_require__(/*! ./Commands */ 40);
__webpack_require__(/*! ./Lib */ 21);
__webpack_require__(/*! ./PromptFor */ 57);
__webpack_require__(/*! ./Trackers */ 35);
__webpack_require__(/*! ./Widgets */ 47);

/***/ }),
/* 5 */
/*!**************************************!*\
  !*** ./source/GitGenUi/namespace.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// generated by Neptune Namespaces v4.x.x
// file: GitGenUi/namespace.js

module.exports = __webpack_require__(/*! neptune-namespaces */ 6).addNamespace(
  'GitGenUi',
  (class GitGenUi extends Neptune.PackageNamespace {})
  ._configureNamespace(__webpack_require__(/*! ../../package.json */ 7))
);
__webpack_require__(/*! ./Commands/namespace */ 8);
__webpack_require__(/*! ./Lib/namespace */ 10);
__webpack_require__(/*! ./PromptFor/namespace */ 11);
__webpack_require__(/*! ./Trackers/namespace */ 12);
__webpack_require__(/*! ./Widgets/namespace */ 13);

/***/ }),
/* 6 */
/*!*************************************************************************************!*\
  !*** external "require('neptune-namespaces' /* ABC - not inlining fellow NPM *_/)" ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('neptune-namespaces' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 7 */
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: author, bin, bugs, dependencies, description, devDependencies, homepage, license, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"author\":\"GenUI LLC\",\"bin\":{\"s3p\":\"./s3p\"},\"bugs\":\"https:/github.com/generalui/git-genui/issues\",\"dependencies\":{\"@art-suite/cli\":\"^1.1.1\",\"art-rest-client\":\"^1.7.0\",\"btoa\":\"^1.2.1\",\"fs-extra\":\"^9.0.0\",\"inquirer\":\"^7.1.0\",\"inquirer-autocomplete-prompt\":\"^1.0.2\",\"inquirer-checkbox-plus-prompt\":\"^1.0.1\",\"neptune-namespaces\":\"^4.0.0\",\"open\":\"^7.0.3\",\"pivotaljs\":\"^1.0.3\",\"simple-git\":\"^1.132.0\",\"stable\":\"^0.1.8\"},\"description\":\"git-genui streamlines: PivotalTracker updates, git-commits, pairing-git-commits, semantic-versioning\",\"devDependencies\":{\"art-build-configurator\":\"^1.26.9\",\"art-testbench\":\"^1.17.2\",\"caffeine-script\":\"^0.72.1\",\"case-sensitive-paths-webpack-plugin\":\"^2.2.0\",\"chai\":\"^4.2.0\",\"coffee-loader\":\"^0.7.3\",\"css-loader\":\"^3.0.0\",\"json-loader\":\"^0.5.7\",\"mocha\":\"^7.1.1\",\"mock-fs\":\"^4.11.0\",\"script-loader\":\"^0.7.2\",\"style-loader\":\"^1.0.0\",\"webpack\":\"^4.39.1\",\"webpack-cli\":\"*\",\"webpack-dev-server\":\"^3.7.2\",\"webpack-merge\":\"^4.2.1\",\"webpack-node-externals\":\"^1.7.2\",\"webpack-stylish\":\"^0.1.8\"},\"homepage\":\"https://github.com/generalui/git-genui\",\"license\":\"ISC\",\"name\":\"git-genui\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/generalui/git-genui.git\"},\"scripts\":{\"build\":\"webpack --progress\",\"start\":\"webpack-dev-server --hot --inline --progress --env.devServer\",\"test\":\"nn -s;mocha -u tdd\",\"testInBrowser\":\"webpack-dev-server --progress --env.devServer\"},\"version\":\"0.1.0\"}");

/***/ }),
/* 8 */
/*!***********************************************!*\
  !*** ./source/GitGenUi/Commands/namespace.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// generated by Neptune Namespaces v4.x.x
// file: GitGenUi/Commands/namespace.js

module.exports = __webpack_require__(/*! ../namespace */ 5).addNamespace(
  'Commands',
  class Commands extends Neptune.PackageNamespace {}
);
__webpack_require__(/*! ./CommitLib/namespace */ 9);

/***/ }),
/* 9 */
/*!*********************************************************!*\
  !*** ./source/GitGenUi/Commands/CommitLib/namespace.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// generated by Neptune Namespaces v4.x.x
// file: GitGenUi/Commands/CommitLib/namespace.js

module.exports = __webpack_require__(/*! ../namespace */ 8).addNamespace(
  'CommitLib',
  class CommitLib extends Neptune.PackageNamespace {}
);


/***/ }),
/* 10 */
/*!******************************************!*\
  !*** ./source/GitGenUi/Lib/namespace.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// generated by Neptune Namespaces v4.x.x
// file: GitGenUi/Lib/namespace.js

module.exports = __webpack_require__(/*! ../namespace */ 5).addNamespace(
  'Lib',
  class Lib extends Neptune.PackageNamespace {}
);


/***/ }),
/* 11 */
/*!************************************************!*\
  !*** ./source/GitGenUi/PromptFor/namespace.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// generated by Neptune Namespaces v4.x.x
// file: GitGenUi/PromptFor/namespace.js

module.exports = __webpack_require__(/*! ../namespace */ 5).addNamespace(
  'PromptFor',
  class PromptFor extends Neptune.PackageNamespace {}
);


/***/ }),
/* 12 */
/*!***********************************************!*\
  !*** ./source/GitGenUi/Trackers/namespace.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// generated by Neptune Namespaces v4.x.x
// file: GitGenUi/Trackers/namespace.js

module.exports = __webpack_require__(/*! ../namespace */ 5).addNamespace(
  'Trackers',
  class Trackers extends Neptune.PackageNamespace {}
);


/***/ }),
/* 13 */
/*!**********************************************!*\
  !*** ./source/GitGenUi/Widgets/namespace.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// generated by Neptune Namespaces v4.x.x
// file: GitGenUi/Widgets/namespace.js

module.exports = __webpack_require__(/*! ../namespace */ 5).addNamespace(
  'Widgets',
  class Widgets extends Neptune.PackageNamespace {}
);


/***/ }),
/* 14 */
/*!**************************************!*\
  !*** ./source/GitGenUi/GitGenUi.caf ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return [__webpack_require__(/*! ./Cli */ 15), __webpack_require__(/*! ./Lib */ 21)];
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 15 */
/*!*********************************!*\
  !*** ./source/GitGenUi/Cli.caf ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["String", "merge"],
    [global, __webpack_require__(/*! art-standard-lib */ 16)],
    (String, merge) => {
      let fs;
      fs = __webpack_require__(/*! fs-extra */ 17);
      return {
        run: function() {
          return __webpack_require__(/*! ./Config */ 18)
            .load()
            .tap(config => __webpack_require__(/*! ./Tracker */ 33).tracker.init(config))
            .then(() => {
              let commands;
              commands = Caf.object(__webpack_require__(/*! ./Commands */ 40).modules, null, m =>
                Caf.is(m.description, String)
              );
              return __webpack_require__(/*! @art-suite/cli */ 73).start({
                commands: Caf.object(commands, ({ run }) => run),
                help: {
                  commands: Caf.object(commands, m =>
                    merge(m, {
                      options: { verbose: "run with verbose logging" }
                    })
                  )
                }
              });
            });
        }
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 16 */
/*!***********************************************************************************!*\
  !*** external "require('art-standard-lib' /* ABC - not inlining fellow NPM *_/)" ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('art-standard-lib' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 17 */
/*!***************************************************************************!*\
  !*** external "require('fs-extra' /* ABC - not inlining fellow NPM *_/)" ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('fs-extra' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 18 */
/*!************************************!*\
  !*** ./source/GitGenUi/Config.caf ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "BaseClass",
      "Promise",
      "SourceRoots",
      "process",
      "deepMerge",
      "JSON",
      "mergeInto",
      "path"
    ],
    [
      global,
      __webpack_require__(/*! ./StandardImport */ 19),
      {
        path: __webpack_require__(/*! path */ 29),
        fs: __webpack_require__(/*! fs-extra */ 17),
        glob: __webpack_require__(/*! glob-promise */ 30)
      }
    ],
    (
      BaseClass,
      Promise,
      SourceRoots,
      process,
      deepMerge,
      JSON,
      mergeInto,
      path
    ) => {
      let Config;
      return (Config = Caf.defClass(class Config extends BaseClass {}, function(
        Config,
        classSuper,
        instanceSuper
      ) {
        let realRequire;
        this.registerLoadersFilename = "register.js";
        this.configBasename = "git-genui.config";
        this.sourceRootIndicatorFiles = [
          ".git",
          `${Caf.toString(this.configBasename)}.*`
        ];
        realRequire = eval("require");
        this.config = {};
        this.classGetter({
          userConfigPath: function() {
            return this.userHome.then(
              dir => `${Caf.toString(dir)}/${Caf.toString(this.configBasename)}`
            );
          },
          repoConfigPath: function() {
            return this.repoRoot.then(
              dir => `${Caf.toString(dir)}/${Caf.toString(this.configBasename)}`
            );
          },
          userHome: function() {
            return Promise.then(() => __webpack_require__(/*! os */ 31).homedir());
          },
          repoRoot: function() {
            let temp;
            return (temp = this._repoRoot) != null
              ? temp
              : (this._repoRoot = new SourceRoots(
                  this.sourceRootIndicatorFiles
                ).findSourceRoot(process.cwd()));
          },
          userConfig: function() {
            let temp;
            return (temp = this._userConfig) != null
              ? temp
              : (this._userConfig = this.userHome.then(this._loadOneConfig));
          },
          projectConfig: function() {
            let temp;
            return (temp = this._projectConfig) != null
              ? temp
              : (this._projectConfig = this.repoRoot.then(this._loadOneConfig));
          },
          configPromise: () =>
            Promise.all([this.userConfig, this.projectConfig]).then(results =>
              deepMerge(this.config, ...results)
            )
        });
        this.writeUserConfig = (newConfig, mergeWithExisting = true) =>
          Promise.all([
            this.getUpdatedUserConfig(newConfig, mergeWithExisting),
            this.userConfigPath
          ]).then(([str, userConfigPath]) => {
            let filePath;
            return __webpack_require__(/*! fs-extra */ 17)
              .writeFile((filePath = userConfigPath + ".json"), str)
              .then(() => filePath);
          });
        this.getUpdatedUserConfig = (newConfig, mergeWithExisting = true) =>
          (mergeWithExisting
            ? this.userConfig.then(existingConfig =>
                deepMerge(existingConfig, newConfig)
              )
            : Promise.resolve(newConfig)
          ).then(configToWrite => JSON.stringify(configToWrite, null, "  "));
        this.load = () =>
          this.configPromise.then(config => mergeInto(this.config, config));
        this._loadOneConfig = (dir, name = this.configBasename) =>
          Promise.then(() => {
            let baseName;
            return __webpack_require__(/*! fs-extra */ 17).existsSync(
              (baseName = path.join(dir, name + ".json"))
            )
              ? realRequire(baseName)
              : undefined;
          });
      }));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 19 */
/*!********************************************!*\
  !*** ./source/GitGenUi/StandardImport.caf ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return __webpack_require__(/*! art-standard-lib */ 16).mergeWithSelf(
    __webpack_require__(/*! art-class-system */ 20),
    __webpack_require__(/*! ./Lib */ 21),
    __webpack_require__(/*! art-communication-status */ 32)
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 20 */
/*!***********************************************************************************!*\
  !*** external "require('art-class-system' /* ABC - not inlining fellow NPM *_/)" ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('art-class-system' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 21 */
/*!**************************************!*\
  !*** ./source/GitGenUi/Lib/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// generated by Neptune Namespaces v4.x.x
// file: GitGenUi/Lib/index.js

(module.exports = __webpack_require__(/*! ./namespace */ 10))
.includeInNamespace(__webpack_require__(/*! ./Lib */ 22))
.addModules({
  Autocomplete:   __webpack_require__(/*! ./Autocomplete */ 23),
  Git:            __webpack_require__(/*! ./Git */ 27),
  SearchSort:     __webpack_require__(/*! ./SearchSort */ 25),
  SourceRoots:    __webpack_require__(/*! ./SourceRoots */ 28),
  StandardImport: __webpack_require__(/*! ./StandardImport */ 24)
});

/***/ }),
/* 22 */
/*!*************************************!*\
  !*** ./source/GitGenUi/Lib/Lib.caf ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return (() => {
    return [
      __webpack_require__(/*! ./Autocomplete */ 23),
      __webpack_require__(/*! ./Git */ 27),
      __webpack_require__(/*! ./SearchSort */ 25),
      __webpack_require__(/*! ./SourceRoots */ 28)
    ];
  })();
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 23 */
/*!**********************************************!*\
  !*** ./source/GitGenUi/Lib/Autocomplete.caf ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["process", "Promise", "searchSort"],
    [global, __webpack_require__(/*! ./StandardImport */ 24), __webpack_require__(/*! ./SearchSort */ 25)],
    (process, Promise, searchSort) => {
      let autocompleteFromStrings;
      return {
        autocompleteFromStrings: (autocompleteFromStrings = function(strings) {
          return (answersSoFar, input) => {
            let columns;
            columns = process.stdout.columns;
            autocompleteFromStrings(input, strings);
            return Promise.resolve(
              Caf.array(searchSort(input, strings), str =>
                str.slice(0, columns - 3)
              )
            );
          };
        })
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 24 */
/*!************************************************!*\
  !*** ./source/GitGenUi/Lib/StandardImport.caf ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return __webpack_require__(/*! art-standard-lib */ 16).mergeWithSelf(__webpack_require__(/*! art-class-system */ 20));
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 25 */
/*!********************************************!*\
  !*** ./source/GitGenUi/Lib/SearchSort.caf ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["present", "RegExp", "escapeRegexp"],
    [global, __webpack_require__(/*! art-standard-lib */ 16)],
    (present, RegExp, escapeRegexp) => {
      let stableSort,
        prepSearchMatch,
        searchMatch,
        sortByMatchQuality,
        searchSort,
        approximateSearchSort;
      stableSort = __webpack_require__(/*! stable */ 26);
      prepSearchMatch = function(pattern) {
        return present(pattern)
          ? new RegExp(
              Caf.array(pattern.split(""), letter => escapeRegexp(letter)).join(
                ".*?"
              ),
              "i"
            )
          : /^/;
      };
      searchMatch = function(pattern, string) {
        return prepSearchMatch(pattern).test(string);
      };
      sortByMatchQuality = function(a, b) {
        let aString, aErrors, aPos, bString, bErrors, bPos;
        aString = a.string;
        aErrors = a.errors;
        aPos = a.position;
        bString = b.string;
        bErrors = b.errors;
        bPos = b.position;
        return aErrors === bErrors ? aPos - bPos : aErrors - bErrors;
      };
      return {
        searchSort: (searchSort = function(pattern, strings) {
          let r;
          return present(pattern)
            ? ((r = prepSearchMatch(pattern)),
              approximateSearchSort(
                pattern,
                Caf.array(strings, null, string => r.test(string))
              ))
            : strings;
        }),
        approximateSearchSort: (approximateSearchSort = function(
          pattern,
          strings
        ) {
          let r, sortedStringsWithErrors;
          r = prepSearchMatch(pattern);
          sortedStringsWithErrors = stableSort(
            Caf.array(strings, string => {
              let match, fullMatch, base;
              return (match =
                Caf.exists((base = fullMatch = r.exec(string))) && base[0])
                ? {
                    string,
                    position: fullMatch.index,
                    errors: match.length - pattern.length
                  }
                : { string, errors: 1 / 0 };
            }),
            sortByMatchQuality
          );
          return Caf.array(sortedStringsWithErrors, ({ string }) => string);
        })
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 26 */
/*!*************************************************************************!*\
  !*** external "require('stable' /* ABC - not inlining fellow NPM *_/)" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('stable' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 27 */
/*!*************************************!*\
  !*** ./source/GitGenUi/Lib/Git.caf ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["merge", "present", "Error", "compactFlattenAll"],
    [global, __webpack_require__(/*! ./StandardImport */ 24)],
    (merge, present, Error, compactFlattenAll) => {
      let normalizeGitStatus, nothingStaged, answersToCommit;
      return {
        normalizeGitStatus: (normalizeGitStatus = function(status) {
          let staged, unstaged, untracked;
          staged = [];
          unstaged = [];
          untracked = [];
          Caf.each2(status.files, file => {
            if (file.index && file.index !== "untracked") {
              staged.push(
                merge(file, { status: file.workingDir || file.index })
              );
            }
            return file.workingDir
              ? file.workingDir === "untracked"
                ? untracked.push(merge(file, { status: file.workingDir }))
                : unstaged.push(merge(file, { status: file.workingDir }))
              : undefined;
          });
          return { staged, unstaged, untracked };
        }),
        nothingStaged: (nothingStaged = function(status) {
          return (
            status.staged.length === 0 &&
            status.renamed.length === 0 &&
            status.created.length === 0 &&
            status.deleted.length === 0
          );
        }),
        answersToCommit: (answersToCommit = function({
          type,
          scope,
          story,
          subject,
          body,
          footer,
          coauthor,
          storyFinished
        }) {
          let statusString;
          if (!present(subject)) {
            throw new Error("missing subject");
          }
          if (!present(type)) {
            throw new Error("missing type");
          }
          return compactFlattenAll(
            type,
            scope ? `(${Caf.toString(scope)})` : undefined,
            ": ",
            story
              ? ((statusString = (() => {
                  switch (false) {
                    case !storyFinished:
                      return " (finished)";
                    case !(story.status === "unstarted"):
                      return " (started)";
                  }
                })()),
                `[#${Caf.toString(story.id)}]${Caf.toString(statusString)} `)
              : undefined,
            subject,
            body
              ? `\n\n${Caf.toString(body.replace(/\n[\n\s]*/g, "\n"))}`
              : undefined,
            coauthor
              ? `\n\n\nCoauthored-by: ${Caf.toString(coauthor)}`
              : undefined
          ).join("");
        })
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 28 */
/*!*********************************************!*\
  !*** ./source/GitGenUi/Lib/SourceRoots.caf ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["BaseClass", "Promise", "present", "compactFlatten"],
    [global, __webpack_require__(/*! ./StandardImport */ 24)],
    (BaseClass, Promise, present, compactFlatten) => {
      let fs, path, glob, SourceRoots;
      fs = __webpack_require__(/*! fs-extra */ 17);
      path = __webpack_require__(/*! path */ 29);
      glob = __webpack_require__(/*! glob-promise */ 30);
      return (SourceRoots = Caf.defClass(
        class SourceRoots extends BaseClass {
          constructor(...rootFiles) {
            super(...arguments);
            this.rootFiles = compactFlatten(rootFiles);
            this.knownSourceRoots = {};
          }
        },
        function(SourceRoots, classSuper, instanceSuper) {
          this.property(
            "sourceRootIndicatorFiles",
            "knownSourceRoots",
            "rootFiles"
          );
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
                  directory !== __webpack_require__(/*! os */ 31).homedir() &&
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 29 */
/*!***********************************************************************!*\
  !*** external "require('path' /* ABC - not inlining fellow NPM *_/)" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('path' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 30 */
/*!*******************************************************************************!*\
  !*** external "require('glob-promise' /* ABC - not inlining fellow NPM *_/)" ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('glob-promise' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 31 */
/*!*********************************************************************!*\
  !*** external "require('os' /* ABC - not inlining fellow NPM *_/)" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('os' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 32 */
/*!*******************************************************************************************!*\
  !*** external "require('art-communication-status' /* ABC - not inlining fellow NPM *_/)" ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('art-communication-status' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 33 */
/*!*************************************!*\
  !*** ./source/GitGenUi/Tracker.caf ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["BaseClass", "process", "present", "formatDate", "log", "blue", "green"],
    [
      global,
      __webpack_require__(/*! art-standard-lib */ 16),
      __webpack_require__(/*! art-class-system */ 20),
      __webpack_require__(/*! colors */ 34)
    ],
    (BaseClass, process, present, formatDate, log, blue, green) => {
      let Tracker;
      return (Tracker = Caf.defClass(
        class Tracker extends BaseClass {
          constructor(cfg) {
            super(...arguments);
            this.init(cfg);
          }
        },
        function(Tracker, classSuper, instanceSuper) {
          this.singletonClass();
          this.prototype.init = function(cfg) {
            let projectId, name, temp, base;
            if (
              Caf.exists(
                (temp =
                  Caf.exists(cfg) &&
                  Caf.exists((base = cfg.project)) && base.tracker)
              )
            ) {
              projectId = temp.projectId;
              name = temp.name;
            }
            this._tracker = __webpack_require__(/*! ./Trackers */ 35)[name];
            this._projectId = projectId;
            return (this.formatStory = this.formatStory.bind(this));
          };
          this.getter("projectId", "tracker", {
            stories: function() {
              let base;
              return (
                Caf.exists((base = this.tracker)) &&
                base.getStories(this.projectId)
              );
            },
            members: function() {
              let base;
              return (
                Caf.exists((base = this.tracker)) &&
                base.getMembers(this.projectId)
              );
            },
            myAccount: function() {
              let base;
              return (
                Caf.exists((base = this.tracker)) &&
                base.getMyAccount(this.projectId)
              );
            },
            projects: function() {
              let base;
              return Caf.exists((base = this.tracker)) && base.projects;
            }
          });
          this.prototype.getStoryUrl = function(storyId) {
            let base;
            return (
              Caf.exists((base = this.tracker)) &&
              base.getStoryUrl(this.projectId, storyId)
            );
          };
          this.prototype.getProjectUrl = function() {
            let base;
            return (
              Caf.exists((base = this.tracker)) &&
              base.getProjectUrl(this.projectId)
            );
          };
          this.prototype.openInBrowser = function() {
            let base;
            return (
              Caf.exists((base = this.tracker)) &&
              base.openInBrowser(this.projectId)
            );
          };
          this.prototype.updateStory = function(storyId, updates) {
            let base;
            return (
              Caf.exists((base = this.tracker)) &&
              base.updateStory(this.projectId, storyId, updates)
            );
          };
          this.prototype.createComment = function(storyId, text) {
            let base;
            return (
              Caf.exists((base = this.tracker)) &&
              base.createComment(this.projectId, storyId, text)
            );
          };
          this.prototype.authenticate = function(options) {
            let base;
            return (
              Caf.exists((base = this.tracker)) && base.authenticate(options)
            );
          };
          this.prototype.storyIsStartable = function(story) {
            let base;
            return (
              Caf.exists((base = this.tracker)) && base.storyIsStartable(story)
            );
          };
          this.prototype.formatStory = function(story, addLinks) {
            let idString;
            idString = `[#${Caf.toString(story.id)}]`;
            return `${Caf.toString(idString)} (${Caf.toString(
              story.state
            )}) ${Caf.toString(story.name)}`;
          };
          this.prototype.createCommentWithMessage = function(storyId, text) {
            return this.createComment(storyId, text).tap(() => {
              let dashes;
              return this.logStoryUpdateMessage(
                storyId,
                `comment added:\n${Caf.toString(
                  (dashes = "-".repeat(process.stdout.columns - 1))
                )}\n  ${Caf.toString(
                  text.replace(/\n/g, "\n  ")
                )}\n${Caf.toString(dashes)}`
              );
            });
          };
          this.prototype.updateStoryWithMessage = function(storyId, updates) {
            return this.updateStory(storyId, updates).tap(() =>
              this.logStoryUpdateMessage(
                storyId,
                (present(updates.state)
                  ? `'${Caf.toString(updates.state)}'`
                  : "updated") +
                  ` at ${Caf.toString(formatDate("h:MMtt (Z mmmm d, yyyy)"))}`
              )
            );
          };
          this.prototype.logStoryUpdateMessage = function(storyId, message) {
            return log(
              blue(`Story [#${Caf.toString(storyId)}]: `) + green(message)
            );
          };
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 34 */
/*!*************************************************************************!*\
  !*** external "require('colors' /* ABC - not inlining fellow NPM *_/)" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('colors' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 35 */
/*!*******************************************!*\
  !*** ./source/GitGenUi/Trackers/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// generated by Neptune Namespaces v4.x.x
// file: GitGenUi/Trackers/index.js

(module.exports = __webpack_require__(/*! ./namespace */ 12))

.addModules({
  PivotalTracker: __webpack_require__(/*! ./PivotalTracker */ 36)
});

/***/ }),
/* 36 */
/*!*****************************************************!*\
  !*** ./source/GitGenUi/Trackers/PivotalTracker.caf ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "BaseClass",
      "config",
      "getJson",
      "merge",
      "Error",
      "putJson",
      "postJson",
      "lowerCamelCase"
    ],
    [
      global,
      __webpack_require__(/*! art-standard-lib */ 16),
      __webpack_require__(/*! art-class-system */ 20),
      __webpack_require__(/*! ../Config */ 18),
      __webpack_require__(/*! art-rest-client */ 37)
    ],
    (
      BaseClass,
      config,
      getJson,
      merge,
      Error,
      putJson,
      postJson,
      lowerCamelCase
    ) => {
      let baseUrl, PivotalTracker;
      baseUrl = "https://www.pivotaltracker.com/services/v5";
      return (PivotalTracker = Caf.defClass(
        class PivotalTracker extends BaseClass {},
        function(PivotalTracker, classSuper, instanceSuper) {
          this.classGetter({
            commonRestOptions: function() {
              return {
                normalizedHeaders: {
                  "X-TrackerToken": config.accounts.pivotalTracker.token
                }
              };
            }
          });
          this.classGetter({
            projects: function() {
              return getJson(
                "https://www.pivotaltracker.com/services/v5/projects",
                this.commonRestOptions
              );
            },
            myAccount: function() {
              return getJson(
                "https://www.pivotaltracker.com/services/v5/me?date_format=millis",
                this.commonRestOptions
              ).then(this._normalizeAccount);
            }
          });
          this.getStories = function(projectId, options) {
            let states;
            if (Caf.exists(options)) {
              states = options.states;
            }
            states != null
              ? states
              : (states = [
                  "started",
                  "rejected",
                  "planned",
                  "unstarted",
                  "unscheduled",
                  "finished",
                  "delivered"
                ]);
            return getJson(
              `${Caf.toString(baseUrl)}/projects/${Caf.toString(
                projectId
              )}/stories?limit=500&date_format=millis&filter=state:${Caf.toString(
                states.join(",")
              )}`,
              this.commonRestOptions
            ).then(stories => stories.map(this._normalizeStory));
          };
          this.getMembers = projectId =>
            getJson(
              `${Caf.toString(baseUrl)}/projects/${Caf.toString(
                projectId
              )}/memberships`,
              this.commonRestOptions
            ).then(memberships =>
              Caf.array(memberships, ({ person }) => {
                let id, name, email;
                return ({ id, name, email } = person), { id, name, email };
              })
            );
          this.openInBrowser = function(projectId) {
            return __webpack_require__(/*! open */ 38)(this.getProjectUrl(projectId));
          };
          this.getProjectUrl = function(projectId) {
            return `https://www.pivotaltracker.com/n/projects/${Caf.toString(
              projectId
            )}`;
          };
          this.getStoryUrl = function(projectId, storyId) {
            return (
              this.getProjectUrl(projectId) +
              `/stories/${Caf.toString(storyId)}`
            );
          };
          this.authenticate = function({ username, password }) {
            return getJson(
              "https://www.pivotaltracker.com/services/v5/me",
              merge({
                headers: {
                  Authorization: `Basic ${Caf.toString(
                    __webpack_require__(/*! btoa */ 39)(
                      `${Caf.toString(username)}:${Caf.toString(password)}`
                    )
                  )}`
                }
              })
            ).then(this._normalizeAccount);
          };
          this.storyIsStartable = function(story) {
            return (
              story.state === "unstarted" ||
              story.state === "rejected" ||
              story.state === "unscheduled"
            );
          };
          this.updateStory = function(projectId, storyId, updates) {
            let state, estimate;
            ({ state, estimate } = updates);
            if (state) {
              if (!(state === "finished" || state === "started")) {
                throw new Error(`invalid state: ${Caf.toString(state)}`);
              }
            }
            return putJson(
              `${Caf.toString(baseUrl)}/projects/${Caf.toString(
                projectId
              )}/stories/${Caf.toString(storyId)}`,
              merge({ estimate, current_state: state }),
              this.commonRestOptions
            );
          };
          this.createComment = function(projectId, storyId, text) {
            return postJson(
              `${Caf.toString(baseUrl)}/projects/${Caf.toString(
                projectId
              )}/stories/${Caf.toString(storyId)}/comments`,
              { text },
              this.commonRestOptions
            );
          };
          this._normalizeStory = function(story) {
            let id,
              requested_by_id,
              current_state,
              story_type,
              name,
              updated_at,
              created_at,
              url,
              owner_ids,
              estimate;
            id = story.id;
            requested_by_id = story.requested_by_id;
            current_state = story.current_state;
            story_type = story.story_type;
            name = story.name;
            updated_at = story.updated_at;
            created_at = story.created_at;
            url = story.url;
            owner_ids = story.owner_ids;
            estimate = story.estimate;
            return {
              id,
              url,
              name,
              estimate,
              requestedById: requested_by_id,
              ownerIds: owner_ids,
              state: current_state,
              updatedAt: updated_at,
              createdAt: created_at
            };
          };
          this._normalizeAccount = function(account) {
            return merge(
              Caf.object(account, null, null, null, (v, k) =>
                k === "api_token" ? "token" : lowerCamelCase(k)
              ),
              { tracker: "PivotalTracker" }
            );
          };
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 37 */
/*!**********************************************************************************!*\
  !*** external "require('art-rest-client' /* ABC - not inlining fellow NPM *_/)" ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('art-rest-client' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 38 */
/*!***********************************************************************!*\
  !*** external "require('open' /* ABC - not inlining fellow NPM *_/)" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('open' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 39 */
/*!***********************************************************************!*\
  !*** external "require('btoa' /* ABC - not inlining fellow NPM *_/)" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('btoa' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 40 */
/*!*******************************************!*\
  !*** ./source/GitGenUi/Commands/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// generated by Neptune Namespaces v4.x.x
// file: GitGenUi/Commands/index.js

(module.exports = __webpack_require__(/*! ./namespace */ 8))

.addModules({
  Add:            __webpack_require__(/*! ./Add */ 41),
  Comment:        __webpack_require__(/*! ./Comment */ 52),
  Commit:         __webpack_require__(/*! ./Commit */ 53),
  Commit2:        __webpack_require__(/*! ./Commit2 */ 54),
  Init:           __webpack_require__(/*! ./Init */ 65),
  OpenTracker:    __webpack_require__(/*! ./OpenTracker */ 66),
  ShowConfig:     __webpack_require__(/*! ./ShowConfig */ 67),
  Stage:          __webpack_require__(/*! ./Stage */ 68),
  StandardImport: __webpack_require__(/*! ./StandardImport */ 42),
  Start:          __webpack_require__(/*! ./Start */ 69),
  Status:         __webpack_require__(/*! ./Status */ 70),
  Stories:        __webpack_require__(/*! ./Stories */ 71),
  WhoAmI:         __webpack_require__(/*! ./WhoAmI */ 72)
});
__webpack_require__(/*! ./CommitLib */ 55);

/***/ }),
/* 41 */
/*!******************************************!*\
  !*** ./source/GitGenUi/Commands/Add.caf ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["InteractiveAdd"],
    [global, __webpack_require__(/*! ./StandardImport */ 42), __webpack_require__(/*! ../Widgets */ 47)],
    InteractiveAdd => {
      return { description: "alias for stage", run: InteractiveAdd };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 42 */
/*!*****************************************************!*\
  !*** ./source/GitGenUi/Commands/StandardImport.caf ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return __webpack_require__(/*! ../StandardImport */ 19).mergeWithSelf(
    __webpack_require__(/*! ../InquirerPlus */ 43),
    { tracker: __webpack_require__(/*! ../Tracker */ 33).tracker }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 43 */
/*!******************************************!*\
  !*** ./source/GitGenUi/InquirerPlus.caf ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "Promise",
      "compactFlatten",
      "merge",
      "Function",
      "deepMerge",
      "log",
      "autocompleteFromStrings"
    ],
    [
      global,
      __webpack_require__(/*! art-standard-lib */ 16),
      __webpack_require__(/*! art-class-system */ 20),
      __webpack_require__(/*! ./Lib */ 21)
    ],
    (
      Promise,
      compactFlatten,
      merge,
      Function,
      deepMerge,
      log,
      autocompleteFromStrings
    ) => {
      let InquirerPlus;
      __webpack_require__(/*! inquirer */ 44).registerPrompt(
        "autocomplete",
        __webpack_require__(/*! inquirer-autocomplete-prompt */ 45)
      );
      __webpack_require__(/*! inquirer */ 44).registerPrompt(
        "checkbox-plus",
        __webpack_require__(/*! inquirer-checkbox-plus-prompt */ 46)
      );
      return (InquirerPlus = Caf.defClass(
        class InquirerPlus extends Object {},
        function(InquirerPlus, classSuper, instanceSuper) {
          let extendAskPromise;
          this.inquire = function(...prompts) {
            let serializer;
            serializer = new Promise.Serializer();
            return Promise.all(
              Caf.array(compactFlatten(prompts), prompt =>
                serializer.then(() => this._inquireOne(prompt))
              )
            ).then(merge);
          };
          this._inquireOne = function(prompt) {
            return __webpack_require__(/*! inquirer */ 44).prompt.then(result => {
              if (prompt.postprocess) {
                result[prompt.name] = prompt.postprocess(result[prompt.name]);
              }
              return result;
            });
          };
          extendAskPromise = askPromise => {
            return {
              then: function(a, b) {
                return extendAskPromise(askPromise.then(a, b));
              },
              tap: function(f) {
                return this.then(a => {
                  f(a);
                  return a;
                });
              },
              catch: function(f) {
                return this.then(a => a, f);
              },
              thenAsk: function(...prompts) {
                return this.then(a1 =>
                  __webpack_require__(/*! inquirer */ 44)
                    .prompt(
                      compactFlatten(
                        Caf.is(prompts, Function) ? prompts(a1) : prompts
                      )
                    )
                    .then(a2 => deepMerge(a1, a2))
                );
              }
            };
          };
          this.prime = defaultAnswers =>
            extendAskPromise(Promise.resolve(defaultAnswers));
          this.ask = (...prompts) =>
            extendAskPromise(
              __webpack_require__(/*! inquirer */ 44).prompt(compactFlatten(prompts))
            );
          this.AutoCompleteQ = function(options) {
            return log(
              "autoCompleteQ",
              merge(
                {
                  type: "autocomplete",
                  source: autocompleteFromStrings(
                    compactFlatten(options.strings)
                  )
                },
                options
              )
            );
          };
          this.YesNoQ = function(options) {
            return merge(
              {
                type: "expand",
                default:
                  options.default === true || options.default === "yes"
                    ? "yes"
                    : "no",
                choices: [
                  { key: "y", value: "yes", name: "yes" },
                  { key: "n", value: "no", name: "no" }
                ]
              },
              options
            );
          };
          this.InputQ = function(options) {
            return merge({ type: "input" }, options);
          };
          this.PasswordQ = function(options) {
            return merge({ type: "password" }, options);
          };
          this.CheckboxQ = function(options) {
            return merge(
              {
                type: "checkbox-plus",
                pageSize: 20,
                highlight: true,
                searchable: true,
                source: autocompleteFromStrings(compactFlatten(options.strings))
              },
              options
            );
          };
          this.SelectStoryQ = (stories, options) =>
            stories &&
            this.AutoCompleteQ(
              merge(
                {
                  name: "story",
                  message: "Select a story...",
                  pageSize: 20,
                  strings: compactFlatten([
                    stories.map(__webpack_require__(/*! ./Tracker */ 33).tracker.formatStory),
                    "(none)"
                  ]),
                  filter: val => {
                    let m, id;
                    return val === "(none)"
                      ? null
                      : (m = val.match(/^\[#([^\]]+)/))
                      ? ((id = m[1]),
                        Caf.find(
                          stories,
                          null,
                          story => `${Caf.toString(story.id)}` === id
                        ))
                      : undefined;
                  }
                },
                options
              )
            );
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 44 */
/*!***************************************************************************!*\
  !*** external "require('inquirer' /* ABC - not inlining fellow NPM *_/)" ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('inquirer' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 45 */
/*!***********************************************************************************************!*\
  !*** external "require('inquirer-autocomplete-prompt' /* ABC - not inlining fellow NPM *_/)" ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('inquirer-autocomplete-prompt' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 46 */
/*!************************************************************************************************!*\
  !*** external "require('inquirer-checkbox-plus-prompt' /* ABC - not inlining fellow NPM *_/)" ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('inquirer-checkbox-plus-prompt' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 47 */
/*!******************************************!*\
  !*** ./source/GitGenUi/Widgets/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// generated by Neptune Namespaces v4.x.x
// file: GitGenUi/Widgets/index.js

(module.exports = __webpack_require__(/*! ./namespace */ 13))

.addModules({
  InteractiveAdd: __webpack_require__(/*! ./InteractiveAdd */ 48),
  StandardImport: __webpack_require__(/*! ./StandardImport */ 49)
});

/***/ }),
/* 48 */
/*!****************************************************!*\
  !*** ./source/GitGenUi/Widgets/InteractiveAdd.caf ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["ask", "CheckboxQ", "pad"],
    [global, __webpack_require__(/*! ./StandardImport */ 49)],
    (ask, CheckboxQ, pad) => {
      return function() {
        return __webpack_require__(/*! ../Git */ 50)
          .getStatus()
          .then(({ files }) => {
            let strings;
            files = Caf.array(files, null, file => file.index !== "renamed");
            strings = Caf.array(
              files.sort((a, b) => a.path.localeCompare(b.path)),
              file =>
                `${Caf.toString(
                  pad(`(${Caf.toString(file.workingDir || "staged")})`, 15)
                )} ${Caf.toString(file.path)}`
            );
            return ask(
              CheckboxQ({
                name: "stagedFiles",
                message: "Select files to staged. Unselect files to unstage.",
                default: Caf.array(strings, null, string =>
                  /\(staged/.test(string)
                ),
                strings,
                filter: stagedFiles =>
                  Caf.array(
                    stagedFiles,
                    string => string.split(/^\(\w+\)\s+/)[1]
                  )
              })
            )
              .then(({ stagedFiles }) => stagedFiles)
              .then(selectedFiles =>
                Caf.each2(files, file =>
                  file.workingDir
                    ? Caf.in(file.path, selectedFiles)
                      ? __webpack_require__(/*! ../Git */ 50).stage(file.path)
                      : undefined
                    : !Caf.in(file.path, selectedFiles)
                    ? __webpack_require__(/*! ../Git */ 50).unstage(file.path)
                    : undefined
                )
              );
          })
          .then(() => __webpack_require__(/*! ../Git */ 50).printStatus());
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 49 */
/*!****************************************************!*\
  !*** ./source/GitGenUi/Widgets/StandardImport.caf ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return __webpack_require__(/*! ../StandardImport */ 19).mergeWithSelf(__webpack_require__(/*! ../InquirerPlus */ 43));
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 50 */
/*!*********************************!*\
  !*** ./source/GitGenUi/Git.caf ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "BaseClass",
      "Promise",
      "answersToCommit",
      "compactFlatten",
      "Object",
      "merge",
      "objectWithout",
      "log",
      "colors",
      "normalizeGitStatus",
      "pluralize",
      "pad"
    ],
    [global, __webpack_require__(/*! ./StandardImport */ 19), { colors: __webpack_require__(/*! colors */ 34) }],
    (
      BaseClass,
      Promise,
      answersToCommit,
      compactFlatten,
      Object,
      merge,
      objectWithout,
      log,
      colors,
      normalizeGitStatus,
      pluralize,
      pad
    ) => {
      let SimpleGit, Git;
      SimpleGit = __webpack_require__(/*! simple-git/promise */ 51)();
      return (Git = Caf.defClass(class Git extends BaseClass {}, function(
        Git,
        classSuper,
        instanceSuper
      ) {
        let statusCodes, decodeStatus;
        this.commit = function(options) {
          return Promise.then(() => SimpleGit.commit(answersToCommit(options)));
        };
        this.stage = function(...files) {
          return Promise.then(() => SimpleGit.add(compactFlatten(files)));
        };
        this.unstage = function(...files) {
          return Promise.then(() =>
            SimpleGit.reset(["head", ...compactFlatten(files)])
          );
        };
        this.classGetter({
          email: function() {
            return SimpleGit.raw(["config", "user.email"]);
          },
          status: function() {
            return Promise.then(() => SimpleGit.status()).then(o =>
              Caf.object(Object.keys(o), k => {
                let status;
                status = o[k];
                return k === "files"
                  ? (status = Caf.array(status, file =>
                      merge(objectWithout(file, "working_dir"), {
                        index: decodeStatus(file.index),
                        workingDir: decodeStatus(file.working_dir)
                      })
                    ))
                  : status;
              })
            );
          }
        });
        statusCodes = {
          D: "deleted",
          C: "conflicted",
          R: "renamed",
          A: "added",
          M: "modified",
          "?": "untracked",
          " ": null
        };
        decodeStatus = function(statusCode) {
          return statusCodes[statusCode];
        };
        this.printStatus = function() {
          let unstagedColors, stagedColors;
          unstagedColors = {
            deleted: "red",
            conflicted: "magenta",
            added: "yellow",
            renamed: "blue",
            modified: "red",
            untracked: "red",
            staged: "green"
          };
          stagedColors = {
            deleted: "brightRed",
            conflicted: "brightMagenta",
            added: "brightYellow",
            renamed: "brightBlue",
            modified: "brightCyan",
            untracked: "brightGray",
            staged: "brightGreen"
          };
          return this.status.tap(status => {
            let outputOne, staged, unstaged, untracked;
            log(
              `Branch:\n  ${Caf.toString(
                colors.green(status.current)
              )}                       ${Caf.toString(
                colors.grey(`(tracking: ${Caf.toString(status.tracking)})`)
              )}`
            );
            outputOne = ({ path, status }) =>
              `  ${Caf.toString(pad(status + ":", 12))} ${Caf.toString(path)}`;
            ({ staged, unstaged, untracked } = normalizeGitStatus(status));
            if (staged.length > 0) {
              log(
                `\nChanges to be committed:       ${Caf.toString(
                  colors.grey(
                    `(${Caf.toString(pluralize("file", staged.length))})`
                  )
                )}`
              );
              log(
                Caf.array(staged, file =>
                  file.status === "modified"
                    ? colors.yellow(outputOne(file))
                    : colors.green(outputOne(file))
                )
                  .sort()
                  .join("\n")
              );
            }
            if (unstaged.length > 0) {
              log(
                `\nChanges not staged to commit:  ${Caf.toString(
                  colors.grey(
                    `(${Caf.toString(pluralize("file", unstaged.length))})`
                  )
                )}`
              );
              log(
                colors.red(
                  Caf.array(unstaged, file => outputOne(file))
                    .sort()
                    .join("\n")
                )
              );
            }
            return untracked.length > 0
              ? (log(
                  `\nUntracked files:               ${Caf.toString(
                    colors.grey(
                      `(${Caf.toString(pluralize("file", untracked.length))})`
                    )
                  )}`
                ),
                log(
                  colors.red(
                    Caf.array(untracked, file => outputOne(file))
                      .sort()
                      .join("\n")
                  )
                ))
              : undefined;
          });
        };
      }));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 51 */
/*!*************************************************************************************!*\
  !*** external "require('simple-git/promise' /* ABC - not inlining fellow NPM *_/)" ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('simple-git/promise' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 52 */
/*!**********************************************!*\
  !*** ./source/GitGenUi/Commands/Comment.caf ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["ask", "SelectStoryQ", "InputQ", "log"],
    [global, __webpack_require__(/*! ./StandardImport */ 42), __webpack_require__(/*! ../InquirerPlus */ 43)],
    (ask, SelectStoryQ, InputQ, log) => {
      return {
        description: "comment on a story",
        run: function(options) {
          return __webpack_require__(/*! ../Tracker */ 33)
            .tracker.stories.then(stories =>
              ask(
                SelectStoryQ(stories, {
                  message: "What story do you want to comment on?"
                })
              )
            )
            .then(({ story }) =>
              story
                ? ask(
                    InputQ({ name: "comment", message: "Comment:" })
                  ).then(({ comment }) =>
                    __webpack_require__(/*! ../Tracker */ 33).tracker.createComment(
                      story.id,
                      comment
                    )
                  )
                : log("Canceled")
            );
        }
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 53 */
/*!*********************************************!*\
  !*** ./source/GitGenUi/Commands/Commit.caf ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "nothingStaged",
      "log",
      "process",
      "Promise",
      "tracker",
      "ask",
      "SelectStoryQ",
      "YesNoQ",
      "AutoCompleteQ",
      "InputQ",
      "present",
      "merge",
      "answersToCommit"
    ],
    [global, __webpack_require__(/*! ./StandardImport */ 42), __webpack_require__(/*! ../InquirerPlus */ 43)],
    (
      nothingStaged,
      log,
      process,
      Promise,
      tracker,
      ask,
      SelectStoryQ,
      YesNoQ,
      AutoCompleteQ,
      InputQ,
      present,
      merge,
      answersToCommit
    ) => {
      return {
        description: "interactive commit",
        run: function(options) {
          return __webpack_require__(/*! ../Git */ 50)
            .status.then(status =>
              nothingStaged(status)
                ? __webpack_require__(/*! ../Widgets */ 47)
                    .InteractiveAdd()
                    .then(status =>
                      nothingStaged(status)
                        ? (log(
                            "\nNothing is staged in git.\nPlease 'git add' something."
                          ),
                          process.exit(1))
                        : undefined
                    )
                : __webpack_require__(/*! ../Git */ 50)
                    .printStatus()
                    .then(() => log(""))
            )
            .then(() =>
              Promise.deepAll({
                stories: tracker.stories,
                members: tracker.members,
                myAccount: tracker.myAccount
              })
            )
            .then(({ stories, members, myAccount, verbose }) =>
              Promise.then(() =>
                ask(
                  SelectStoryQ(stories, {
                    message: "What story does this commit advance?"
                  }),
                  YesNoQ({
                    name: "storyFinished",
                    when: ({ story }) => story != null,
                    message: "Is the story finished?"
                  }),
                  AutoCompleteQ({
                    name: "type",
                    pageSize: 20,
                    message: "What type of commit is this?",
                    filter: val => val.split(":")[0].toLowerCase(),
                    strings: [
                      "wip:               work-in-progress, possibly non-working, no version change (yet)",
                      "patch/test:        tests added, improved or fixed          version + 0.0.1",
                      "patch/fix:         code fixed and passing tests            version + 0.0.1",
                      "patch/improvement: patch-sized feature improvement         version + 0.0.1",
                      "patch/refactor:    code quality improved                   version + 0.0.1",
                      "patch/perf:        performance improved                    version + 0.0.1",
                      "patch/constants:   strings / non-functional constants      version + 0.0.1",
                      "patch/asset:       assets: images, fonts, etc...           version + 0.0.1",
                      "patch/doc:         README/documentation/comments updated   version + 0.0.1",
                      "patch/whitespace:  code formatting / non-functional change version + 0.0.1",
                      "patch/other:       other patch-level change or chore       version + 0.0.1",
                      "minor/feature:     new feature added or extended           version + 0.1.0",
                      "minor/depricate:   feature depricated                      version + 0.1.0",
                      "major/change:      breaking feature change                 version + 1.0.0",
                      "major/removal:     breaking feature removal                version + 1.0.0"
                    ]
                  })
                )
              )
                .then(answers => {
                  let coauthorList, base;
                  return ask(
                    InputQ({
                      name: "subject",
                      default: Caf.exists((base = answers.story)) && base.name,
                      message: "Enter git commit message:",
                      validate: v =>
                        present(v) ? true : "Please enter a message"
                    }),
                    (coauthorList = Caf.array(
                      members,
                      null,
                      member => member.id !== myAccount.id
                    )).length > 0
                      ? AutoCompleteQ({
                          name: "coauthor",
                          message: "Are you pairing with someone?",
                          default: null,
                          strings: [
                            "(no one)",
                            Caf.array(
                              coauthorList,
                              ({ email, name }) =>
                                `${Caf.toString(name)} <${Caf.toString(email)}>`
                            )
                          ]
                        })
                      : undefined
                  ).then(_a => merge(answers, _a));
                })
                .tap(answers => {
                  if (answers.coauthor === "(no one)") {
                    answers.coauthor = null;
                  }
                  return (answers.storyFinished =
                    answers.storyFinished === true ||
                    answers.storyFinished === "yes");
                })
                .then(answers => {
                  let message;
                  message = answersToCommit(answers);
                  log(
                    `\ncommit-message: ${Caf.toString(
                      __webpack_require__(/*! colors */ 34).green(message)
                    )}\n`
                  );
                  return ask(
                    YesNoQ({
                      type: "expand",
                      name: "commit",
                      default: true,
                      message: "'git commit' now?"
                    })
                  ).then(({ commit }) =>
                    commit
                      ? __webpack_require__(/*! ../Git */ 50)
                          .commit(answers)
                          .tap(results => {
                            let branch, changes, insertions, deletions;
                            ({
                              branch,
                              commit,
                              summary: { changes, insertions, deletions }
                            } = results);
                            changes = changes | 0;
                            insertions = insertions | 0;
                            return (deletions = deletions | 0);
                          })
                          .tap(({ commit }) => {
                            let story, storyFinished, newState;
                            story = answers.story;
                            storyFinished = answers.storyFinished;
                            return Caf.exists(story) && story.id
                              ? ((newState =
                                  story.state === "started" ||
                                  tracker.storyIsStartable(story)
                                    ? storyFinished
                                      ? "finished"
                                      : "started"
                                    : undefined),
                                Promise.all([
                                  newState
                                    ? tracker.updateStoryWithMessage(story.id, {
                                        state: newState
                                      })
                                    : Promise.resolve(),
                                  tracker.createCommentWithMessage(
                                    story.id,
                                    `${Caf.toString(
                                      newState || "progressed"
                                    )} with commit: ${Caf.toString(
                                      commit
                                    )}\n\n${Caf.toString(
                                      message
                                    )}\nby git-genui v${Caf.toString(
                                      __webpack_require__(/*! ../../../package */ 7).version
                                    )}`
                                  )
                                ]))
                              : undefined;
                          })
                          .catch(error => log.error(error))
                      : log(" canceled...")
                  );
                })
            );
        }
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 54 */
/*!**********************************************!*\
  !*** ./source/GitGenUi/Commands/Commit2.caf ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["ActionMenu"],
    [global, __webpack_require__(/*! ./StandardImport */ 42), __webpack_require__(/*! ./CommitLib */ 55)],
    ActionMenu => {
      return {
        description: "interactive commit2",
        run: function(options) {
          return ActionMenu();
        }
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 55 */
/*!*****************************************************!*\
  !*** ./source/GitGenUi/Commands/CommitLib/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// generated by Neptune Namespaces v4.x.x
// file: GitGenUi/Commands/CommitLib/index.js

(module.exports = __webpack_require__(/*! ./namespace */ 9))

.addModules({
  ActionMenu:        __webpack_require__(/*! ./ActionMenu */ 56),
  EditCommitMessage: __webpack_require__(/*! ./EditCommitMessage */ 63),
  EditGitStage:      __webpack_require__(/*! ./EditGitStage */ 59),
  SelectCommitType:  __webpack_require__(/*! ./SelectCommitType */ 62),
  SelectPairs:       __webpack_require__(/*! ./SelectPairs */ 64),
  StoryMenu:         __webpack_require__(/*! ./StoryMenu */ 60)
});

/***/ }),
/* 56 */
/*!***********************************************************!*\
  !*** ./source/GitGenUi/Commands/CommitLib/ActionMenu.caf ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "present",
      "Array",
      "String",
      "formattedInspect",
      "normalizeGitStatus",
      "compactFlatten",
      "tracker",
      "Promise"
    ],
    [global, __webpack_require__(/*! ../StandardImport */ 42)],
    (
      present,
      Array,
      String,
      formattedInspect,
      normalizeGitStatus,
      compactFlatten,
      tracker,
      Promise
    ) => {
      let colorizeValue, colorNotPresent, presentValue, noop, ActionMenu;
      colorizeValue = __webpack_require__(/*! colors */ 34).yellow;
      colorNotPresent = __webpack_require__(/*! colors */ 34).grey;
      presentValue = function(value, noneValue = "none") {
        return present(value)
          ? Caf.is(value, Array) && Caf.is(value[0], String)
            ? Caf.array(value, v => colorizeValue(v)).join(", ")
            : Caf.is(value, String)
            ? colorizeValue(value)
            : formattedInspect(value, { color: true })
          : colorNotPresent(noneValue);
      };
      noop = function(a) {
        return a;
      };
      ActionMenu = function(state) {
        let status,
          stories,
          members,
          myAccount,
          commitMessage,
          commitType,
          story,
          pairingWith,
          otherMembers,
          staged,
          unstaged,
          untracked,
          nStatus,
          statusColors,
          statusSummary;
        status = state.status;
        stories = state.stories;
        members = state.members;
        myAccount = state.myAccount;
        commitMessage = state.commitMessage;
        commitType = state.commitType;
        story = state.story;
        pairingWith = state.pairingWith;
        otherMembers = Caf.array(
          members,
          null,
          member => member.id !== myAccount.id
        );
        ({ staged, unstaged, untracked } = nStatus = normalizeGitStatus(
          status
        ));
        statusColors = { staged: "green", unstaged: "red", untracked: "red" };
        statusSummary = compactFlatten(
          Caf.array(
            ["staged", "unstaged", "untracked"],
            statusCat =>
              __webpack_require__(/*! colors */ 34)[statusColors[statusCat]](
                `${Caf.toString(nStatus[statusCat].length)} ${Caf.toString(
                  statusCat
                )}`
              ),
            statusCat => {
              let base;
              return (
                (Caf.exists((base = nStatus[statusCat])) && base.length) > 0
              );
            }
          )
        ).join(", ");
        return __webpack_require__(/*! ../../PromptFor */ 57)
          .selectList({
            prompt: "Select action:",
            items: compactFlatten([
              {
                action: __webpack_require__(/*! ./EditGitStage */ 59),
                value: `1. Edit staged files:      ${Caf.toString(
                  statusSummary
                )}`
              },
              {
                action: __webpack_require__(/*! ./StoryMenu */ 60),
                value: `2. Select story:           ${Caf.toString(
                  !myAccount
                    ? colorNotPresent("configure tracker")
                    : presentValue(
                        story ? tracker.formatStory(story) : undefined
                      )
                )}`
              },
              {
                action: __webpack_require__(/*! ./SelectCommitType */ 62),
                value: `3. Select type:            ${Caf.toString(
                  presentValue(commitType)
                )}`
              },
              {
                action: __webpack_require__(/*! ./EditCommitMessage */ 63),
                value: `4. Edit message:           ${Caf.toString(
                  presentValue(commitMessage)
                )}`
              },
              {
                action: __webpack_require__(/*! ./SelectPairs */ 64),
                value: `5. Change selected pairs:  ${Caf.toString(
                  !myAccount
                    ? colorNotPresent("configure tracker")
                    : otherMembers.length === 0
                    ? colorNotPresent("only you")
                    : presentValue(pairingWith)
                )}`
              },
              { key: "commitNow", value: "6. Commit now" },
              { key: "abort", value: "0. Abort / quit" }
            ])
          })
          .then(({ action }) =>
            action != null
              ? Promise.then(() => action(state)).then(newState =>
                  newState ? ActionMenu(newState) : undefined
                )
              : undefined
          );
      };
      return function() {
        return Promise.deepAll({
          status: __webpack_require__(/*! ../../Git */ 50).status,
          stories: tracker.stories,
          members: tracker.members,
          myAccount: tracker.myAccount
        }).then(ActionMenu);
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 57 */
/*!********************************************!*\
  !*** ./source/GitGenUi/PromptFor/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// generated by Neptune Namespaces v4.x.x
// file: GitGenUi/PromptFor/index.js

(module.exports = __webpack_require__(/*! ./namespace */ 11))
.includeInNamespace(__webpack_require__(/*! ./PromptFor */ 58))
;

/***/ }),
/* 58 */
/*!*************************************************!*\
  !*** ./source/GitGenUi/PromptFor/PromptFor.caf ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["present", "Error", "merge", "autocompleteFromStrings"],
    [
      global,
      __webpack_require__(/*! art-standard-lib */ 16),
      __webpack_require__(/*! art-class-system */ 20),
      __webpack_require__(/*! ../Lib */ 21)
    ],
    (present, Error, merge, autocompleteFromStrings) => {
      let inquire, Core;
      __webpack_require__(/*! inquirer */ 44).registerPrompt(
        "autocomplete",
        __webpack_require__(/*! inquirer-autocomplete-prompt */ 45)
      );
      __webpack_require__(/*! inquirer */ 44).registerPrompt(
        "checkbox-plus",
        __webpack_require__(/*! inquirer-checkbox-plus-prompt */ 46)
      );
      inquire = function(options) {
        if (present(options.name)) {
          throw new Error(
            "no need to specify 'name' - just your value is returned w/o a wrapping object"
          );
        }
        return __webpack_require__(/*! inquirer */ 44)
          .prompt(merge(options, { name: "value", message: options.prompt }))
          .then(({ value }) => value);
      };
      return (Core = Caf.defClass(class Core extends Object {}, function(
        Core,
        classSuper,
        instanceSuper
      ) {
        this.selectList = function({ items, multiselect, prompt }) {
          let strings, base, from, into, to, i, temp;
          strings = present(
            Caf.exists(items) && Caf.exists((base = items[0])) && base.value
          )
            ? ((from = items),
              (into = []),
              from != null
                ? ((to = from.length),
                  (i = 0),
                  (() => {
                    while (i < to) {
                      let value;
                      ({ value } = from[i]);
                      into.push(value);
                      temp = i++;
                    }
                    return temp;
                  })())
                : undefined,
              into)
            : items;
          return inquire({
            prompt,
            type: multiselect ? "checkbox-plus" : "autocomplete",
            pageSize: 20,
            source: autocompleteFromStrings(strings),
            highlight: true,
            searchable: true
          }).then(value =>
            items !== strings ? items[strings.indexOf(value)] : value
          );
        };
        this.yesNo = function(options) {
          return inquire(
            merge(
              {
                type: "expand",
                default:
                  options.default === true || options.default === "yes"
                    ? "yes"
                    : "no",
                choices: [
                  { key: "y", value: "yes", name: "yes" },
                  { key: "n", value: "no", name: "no" }
                ]
              },
              options
            )
          );
        };
        this.input = function(options) {
          return inquire(merge({ type: "input" }, options));
        };
        this.password = function(options) {
          return inquire(merge({ type: "password" }, options));
        };
      }));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 59 */
/*!*************************************************************!*\
  !*** ./source/GitGenUi/Commands/CommitLib/EditGitStage.caf ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["merge"],
    [global, __webpack_require__(/*! ../StandardImport */ 42)],
    merge => {
      return function(state) {
        return __webpack_require__(/*! ../../Widgets */ 47)
          .InteractiveAdd()
          .then(status => merge(state, { status }));
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 60 */
/*!**********************************************************!*\
  !*** ./source/GitGenUi/Commands/CommitLib/StoryMenu.caf ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["merge"],
    [global, __webpack_require__(/*! ../StandardImport */ 42)],
    merge => {
      return function(state) {
        return __webpack_require__(/*! ../../GitGenUiPromptFor */ 61)
          .story(state.stories, "What story does this commit advance?")
          .then(story => merge(state, { story }));
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 61 */
/*!***********************************************!*\
  !*** ./source/GitGenUi/GitGenUiPromptFor.caf ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Promise"],
    [global, __webpack_require__(/*! ./StandardImport */ 19)],
    Promise => {
      let formatStory;
      formatStory = __webpack_require__(/*! ./Tracker */ 33).tracker.formatStory;
      return {
        story: (stories, message) =>
          Promise.then(() =>
            stories
              ? __webpack_require__(/*! ./PromptFor */ 57)
                  .selectList({
                    message: message != null ? message : "Select a story...",
                    items: Caf.array(
                      stories,
                      story => {
                        return { story, value: formatStory(story) };
                      },
                      null,
                      [{ storyId: null, value: "(none)" }]
                    )
                  })
                  .then(({ story }) => story)
              : undefined
          )
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 62 */
/*!*****************************************************************!*\
  !*** ./source/GitGenUi/Commands/CommitLib/SelectCommitType.caf ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["merge"],
    [global, __webpack_require__(/*! ../StandardImport */ 42)],
    merge => {
      return function(state) {
        return __webpack_require__(/*! ../../PromptFor */ 57)
          .selectList({
            prompt: "Select action:",
            items: [
              {
                commitType: "wip",
                value:
                  "wip:               work-in-progress, possibly non-working, no version change (yet)"
              },
              {
                commitType: "patch/test",
                value:
                  "patch/test:        tests added, improved or fixed          version + 0.0.1"
              },
              {
                commitType: "patch/fix",
                value:
                  "patch/fix:         code fixed and passing tests            version + 0.0.1"
              },
              {
                commitType: "patch/improvement",
                value:
                  "patch/improvement: patch-sized feature improvement         version + 0.0.1"
              },
              {
                commitType: "patch/refactor",
                value:
                  "patch/refactor:    code quality improved                   version + 0.0.1"
              },
              {
                commitType: "patch/perf",
                value:
                  "patch/perf:        performance improved                    version + 0.0.1"
              },
              {
                commitType: "patch/constants",
                value:
                  "patch/constants:   strings / non-functional constants      version + 0.0.1"
              },
              {
                commitType: "patch/asset",
                value:
                  "patch/asset:       assets: images, fonts, etc...           version + 0.0.1"
              },
              {
                commitType: "patch/doc",
                value:
                  "patch/doc:         README/documentation/comments updated   version + 0.0.1"
              },
              {
                commitType: "patch/whitespace",
                value:
                  "patch/whitespace:  code formatting / non-functional change version + 0.0.1"
              },
              {
                commitType: "patch/other",
                value:
                  "patch/other:       other patch-level change or chore       version + 0.0.1"
              },
              {
                commitType: "minor/feature",
                value:
                  "minor/feature:     new feature added or extended           version + 0.1.0"
              },
              {
                commitType: "minor/depricate",
                value:
                  "minor/depricate:   feature depricated                      version + 0.1.0"
              },
              {
                commitType: "major/change",
                value:
                  "major/change:      breaking feature change                 version + 1.0.0"
              },
              {
                commitType: "major/removal",
                value:
                  "major/removal:     breaking feature removal                version + 1.0.0"
              }
            ]
          })
          .then(({ commitType }) => merge(state, { commitType }));
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 63 */
/*!******************************************************************!*\
  !*** ./source/GitGenUi/Commands/CommitLib/EditCommitMessage.caf ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["merge"],
    [global, __webpack_require__(/*! ../StandardImport */ 42)],
    merge => {
      return function(state) {
        return __webpack_require__(/*! ../../PromptFor */ 57)
          .input({ message: "Enter your git-commit message:" })
          .then(commitMessage => merge(state, { commitMessage }));
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 64 */
/*!************************************************************!*\
  !*** ./source/GitGenUi/Commands/CommitLib/SelectPairs.caf ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["log", "process"],
    [global, __webpack_require__(/*! ../StandardImport */ 42)],
    (log, process) => {
      return function(state) {
        let myId, otherMembers, base;
        myId = Caf.exists((base = state.myAccount)) && base.id;
        otherMembers = Caf.array(
          state.members,
          null,
          member => member.id !== myId
        );
        return otherMembers.length > 0
          ? __webpack_require__(/*! ../../PromptFor */ 57)
              .selectList({
                prompt: "Who are you pairing with?",
                items: Caf.array(otherMembers, ({ email, name }) => {
                  return {
                    email,
                    value: `${Caf.toString(name)} <${Caf.toString(email)}>`
                  };
                })
              })
              .then(items => {
                log({ items });
                log.warn("debug-exiting");
                return process.exit(1);
              })
          : state;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 65 */
/*!*******************************************!*\
  !*** ./source/GitGenUi/Commands/Init.caf ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "ask",
      "InputQ",
      "PasswordQ",
      "clientFailureNotAuthorized",
      "log",
      "tracker",
      "colors"
    ],
    [
      global,
      __webpack_require__(/*! ./StandardImport */ 42),
      __webpack_require__(/*! ../InquirerPlus */ 43),
      { colors: __webpack_require__(/*! colors */ 34) }
    ],
    (
      ask,
      InputQ,
      PasswordQ,
      clientFailureNotAuthorized,
      log,
      tracker,
      colors
    ) => {
      return {
        description:
          "initialize ~/git-genui.config.js with your PivotalTracker information",
        run: function(options) {
          let _username;
          _username = null;
          return __webpack_require__(/*! ../Git */ 50)
            .email.catch(() => null)
            .then(gitEmail => {
              let auth;
              _username = gitEmail = Caf.exists(gitEmail) && gitEmail.trim();
              auth = () =>
                ask(
                  InputQ({
                    name: "username",
                    default: _username,
                    message: "What is your PivotalTracker email?"
                  }),
                  PasswordQ({
                    name: "password",
                    message:
                      "What is your PivotalTracker password? (used only to fetch API token)"
                  })
                ).then(({ password, username }) => {
                  _username = username;
                  return __webpack_require__(/*! ../Tracker */ 33)
                    .tracker.authenticate({ password, username })
                    .catch(error => {
                      if (error.status === clientFailureNotAuthorized) {
                        log.warn("Invalid password. Please try again.");
                      } else {
                        log.error({
                          message: error.message,
                          status: error.status
                        });
                      }
                      return auth();
                    });
                });
              return auth()
                .thenAsk(({ email }) =>
                  InputQ({
                    name: "gitEmail",
                    message: "What is your git email?",
                    default: gitEmail || email
                  })
                )
                .thenAsk(({ token }) => {
                  tracker.init({
                    accounts: { pivotalTracker: { token } },
                    project: { tracker: { name: "PivotalTracker" } }
                  });
                  return tracker.projects.then(projects => log({ projects }));
                })
                .then(({ token, gitEmail }) =>
                  __webpack_require__(/*! ../Config */ 18).writeUserConfig({
                    accounts: {
                      pivotalTracker: { token },
                      git: { email: gitEmail }
                    }
                  })
                )
                .then(writtenFile =>
                  log(
                    colors.green(`Success. Wrote: ${Caf.toString(writtenFile)}`)
                  )
                );
            });
        }
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 66 */
/*!**************************************************!*\
  !*** ./source/GitGenUi/Commands/OpenTracker.caf ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return (() => {
    return {
      description: "open tracker in the browser",
      run: function() {
        return __webpack_require__(/*! ../Tracker */ 33).tracker.openInBrowser();
      }
    };
  })();
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 67 */
/*!*************************************************!*\
  !*** ./source/GitGenUi/Commands/ShowConfig.caf ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["log"],
    [global, __webpack_require__(/*! ./StandardImport */ 42)],
    log => {
      return {
        description: "show the merged configurarion for git-genui",
        run: function() {
          return log(__webpack_require__(/*! ../Config */ 18).config);
        }
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 68 */
/*!********************************************!*\
  !*** ./source/GitGenUi/Commands/Stage.caf ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["InteractiveAdd"],
    [global, __webpack_require__(/*! ./StandardImport */ 42), __webpack_require__(/*! ../Widgets */ 47)],
    InteractiveAdd => {
      return {
        description: "add (stage) or remove (unstage) files to commit",
        run: InteractiveAdd
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 69 */
/*!********************************************!*\
  !*** ./source/GitGenUi/Commands/Start.caf ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["tracker", "log", "ask", "SelectStoryQ", "present", "Promise", "merge"],
    [global, __webpack_require__(/*! ./StandardImport */ 42), __webpack_require__(/*! ../InquirerPlus */ 43)],
    (tracker, log, ask, SelectStoryQ, present, Promise, merge) => {
      return {
        description: "start a story",
        run: function(options) {
          return tracker.stories
            .then(stories => {
              let started;
              started = Caf.array(
                stories,
                null,
                story => story.state === "started"
              );
              if (started.length > 0) {
                log(__webpack_require__(/*! colors */ 34).cyan("Stories already started:"));
                Caf.each2(started, story =>
                  log("  " + tracker.formatStory(story))
                );
                log("");
              }
              return ask(
                SelectStoryQ(
                  Caf.array(stories, null, story =>
                    tracker.storyIsStartable(story)
                  ),
                  { message: "What story do you want to start?" }
                )
              );
            })
            .then(({ story }) => {
              let into, i1;
              return story
                ? (!present(story.estimate)
                    ? ask({
                        type: "expand",
                        name: "estimate",
                        default: "no",
                        message: "Estimate story to start it:",
                        choices:
                          ((into = []),
                          (i1 = 0),
                          (() => {
                            while (i1 <= 3) {
                              let i;
                              i = i1;
                              into.push({
                                key: `${Caf.toString(i)}`,
                                value: i,
                                name: i
                              });
                              i1++;
                            }
                          })(),
                          into)
                      })
                    : Promise.resolve({})
                  )
                    .then(updates => merge(updates, { state: "started" }))
                    .then(updates =>
                      tracker.updateStoryWithMessage(story.id, updates)
                    )
                : log("Canceled");
            });
        }
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 70 */
/*!*********************************************!*\
  !*** ./source/GitGenUi/Commands/Status.caf ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return (() => {
    return {
      description: "show git status",
      run: function() {
        return __webpack_require__(/*! ../Git */ 50).printStatus();
      }
    };
  })();
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 71 */
/*!**********************************************!*\
  !*** ./source/GitGenUi/Commands/Stories.caf ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["log", "tracker"],
    [global, __webpack_require__(/*! ./StandardImport */ 42), __webpack_require__(/*! ../InquirerPlus */ 43)],
    (log, tracker) => {
      return {
        description: "list all open stories",
        run: function(options) {
          return __webpack_require__(/*! ../Tracker */ 33).tracker.stories.then(stories =>
            Caf.each2(stories, story =>
              log("  " + tracker.formatStory(story, true))
            )
          );
        }
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 72 */
/*!*********************************************!*\
  !*** ./source/GitGenUi/Commands/WhoAmI.caf ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["log", "Array", "Object"],
    [global, __webpack_require__(/*! ./StandardImport */ 42)],
    (log, Array, Object) => {
      return {
        description: "show which tracker account you are logged in with",
        run: function(options) {
          return __webpack_require__(/*! ../Tracker */ 33).tracker.myAccount.then(account =>
            log(
              Caf.object(
                account,
                null,
                v => !Caf.is(v, Array) && !Caf.is(v, Object)
              )
            )
          );
        }
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 73 */
/*!*********************************************************************************!*\
  !*** external "require('@art-suite/cli' /* ABC - not inlining fellow NPM *_/)" ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('@art-suite/cli' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 74 */
/*!***********************************!*\
  !*** ./source/GitGenUi/pizza.caf ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["log", "Number", "isNaN", "parseFloat"],
    [global, __webpack_require__(/*! art-standard-lib */ 16)],
    (log, Number, isNaN, parseFloat) => {
      return function(argv) {
        let questions;
        log("Hi, welcome to Node Pizza");
        questions = [
          {
            type: "confirm",
            name: "toBeDelivered",
            message: "Is this for delivery?",
            default: false
          },
          {
            type: "input",
            name: "phone",
            message: "What's your phone number?",
            validate: value =>
              /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i.test(
                value
              ) || "Please enter a valid phone number"
          },
          {
            type: "list",
            name: "size",
            message: "What size do you need?",
            choices: ["Large", "Medium", "Small"],
            filter: val => val.toLowerCase()
          },
          {
            type: "input",
            name: "quantity",
            message: "How many do you need?",
            validate: value =>
              !isNaN(parseFloat(value)) || "Please enter a number",
            filter: Number
          },
          {
            type: "expand",
            name: "toppings",
            message: "What about the toppings?",
            choices: [
              {
                key: "p",
                value: "PepperoniCheese",
                name: "Pepperoni and cheese"
              },
              { key: "a", value: "alldressed", name: "All dressed" },
              { key: "w", value: "hawaiian", name: "Hawaiian" }
            ]
          },
          {
            type: "rawlist",
            name: "beverage",
            message: "You also get a free 2L beverage",
            choices: ["Pepsi", "7up", "Coke"]
          },
          {
            type: "input",
            name: "comments",
            message: "Any comments on your purchase experience?",
            default: "Nope, all good!"
          },
          {
            type: "list",
            name: "prize",
            message: "For leaving a comment, you get a freebie",
            choices: ["cake", "fries"],
            when: answers => answers.comments !== "Nope, all good!"
          }
        ];
        return __webpack_require__(/*! inquirer */ 44)
          .prompt(questions)
          .then(answers => {
            log("\nOrder receipt:");
            return log({ answers });
          });
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ })
/******/ ]);