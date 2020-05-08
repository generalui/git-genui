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
  return __webpack_require__(/*! ./GitGenUI */ 4);
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 4 */
/*!**********************************!*\
  !*** ./source/GitGenUI/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// generated by Neptune Namespaces v4.x.x
// file: GitGenUI/index.js

(module.exports = __webpack_require__(/*! ./namespace */ 5))
.includeInNamespace(__webpack_require__(/*! ./GitGenUI */ 12))
.addModules({
  Cli:            __webpack_require__(/*! ./Cli */ 13),
  Config:         __webpack_require__(/*! ./Config */ 16),
  Git:            __webpack_require__(/*! ./Git */ 48),
  InquirerPlus:   __webpack_require__(/*! ./InquirerPlus */ 41),
  Pizza:          __webpack_require__(/*! ./pizza */ 61),
  StandardImport: __webpack_require__(/*! ./StandardImport */ 17),
  Tracker:        __webpack_require__(/*! ./Tracker */ 31)
});
__webpack_require__(/*! ./CommandsV2 */ 38);
__webpack_require__(/*! ./Lib */ 19);
__webpack_require__(/*! ./Trackers */ 33);
__webpack_require__(/*! ./Widgets */ 45);

/***/ }),
/* 5 */
/*!**************************************!*\
  !*** ./source/GitGenUI/namespace.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// generated by Neptune Namespaces v4.x.x
// file: GitGenUI/namespace.js

module.exports = __webpack_require__(/*! neptune-namespaces */ 6).addNamespace(
  'GitGenUi',
  (class GitGenUi extends Neptune.PackageNamespace {})
  ._configureNamespace(__webpack_require__(/*! ../../package.json */ 7))
);
__webpack_require__(/*! ./CommandsV2/namespace */ 8);
__webpack_require__(/*! ./Lib/namespace */ 9);
__webpack_require__(/*! ./Trackers/namespace */ 10);
__webpack_require__(/*! ./Widgets/namespace */ 11);

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

module.exports = JSON.parse("{\"author\":\"GenUI LLC\",\"bin\":{\"s3p\":\"./s3p\"},\"bugs\":\"https:/github.com/generalui/git-genui/issues\",\"dependencies\":{\"@art-suite/cli\":\"^1.1.1\",\"art-rest-client\":\"^1.7.0\",\"btoa\":\"^1.2.1\",\"fs-extra\":\"^9.0.0\",\"inquirer\":\"^7.1.0\",\"inquirer-autocomplete-prompt\":\"^1.0.2\",\"inquirer-checkbox-plus-prompt\":\"^1.0.1\",\"neptune-namespaces\":\"^4.0.0\",\"open\":\"^7.0.3\",\"pivotaljs\":\"^1.0.3\",\"simple-git\":\"^1.132.0\",\"stable\":\"^0.1.8\",\"yargs\":\"^15.3.1\"},\"description\":\"git-genui streamlines: PivotalTracker updates, git-commits, pairing-git-commits, semantic-versioning\",\"devDependencies\":{\"art-build-configurator\":\"^1.26.9\",\"art-testbench\":\"^1.17.2\",\"caffeine-script\":\"^0.72.1\",\"case-sensitive-paths-webpack-plugin\":\"^2.2.0\",\"chai\":\"^4.2.0\",\"coffee-loader\":\"^0.7.3\",\"css-loader\":\"^3.0.0\",\"json-loader\":\"^0.5.7\",\"mocha\":\"^7.1.1\",\"mock-fs\":\"^4.11.0\",\"script-loader\":\"^0.7.2\",\"style-loader\":\"^1.0.0\",\"webpack\":\"^4.39.1\",\"webpack-cli\":\"*\",\"webpack-dev-server\":\"^3.7.2\",\"webpack-merge\":\"^4.2.1\",\"webpack-node-externals\":\"^1.7.2\",\"webpack-stylish\":\"^0.1.8\"},\"homepage\":\"https://github.com/generalui/git-genui\",\"license\":\"ISC\",\"name\":\"git-genui\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/generalui/git-genui.git\"},\"scripts\":{\"build\":\"webpack --progress\",\"start\":\"webpack-dev-server --hot --inline --progress --env.devServer\",\"test\":\"nn -s;mocha -u tdd\",\"testInBrowser\":\"webpack-dev-server --progress --env.devServer\"},\"version\":\"0.1.0\"}");

/***/ }),
/* 8 */
/*!*************************************************!*\
  !*** ./source/GitGenUI/CommandsV2/namespace.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// generated by Neptune Namespaces v4.x.x
// file: GitGenUI/CommandsV2/namespace.js

module.exports = __webpack_require__(/*! ../namespace */ 5).addNamespace(
  'CommandsV2',
  class CommandsV2 extends Neptune.PackageNamespace {}
);


/***/ }),
/* 9 */
/*!******************************************!*\
  !*** ./source/GitGenUI/Lib/namespace.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// generated by Neptune Namespaces v4.x.x
// file: GitGenUI/Lib/namespace.js

module.exports = __webpack_require__(/*! ../namespace */ 5).addNamespace(
  'Lib',
  class Lib extends Neptune.PackageNamespace {}
);


/***/ }),
/* 10 */
/*!***********************************************!*\
  !*** ./source/GitGenUI/Trackers/namespace.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// generated by Neptune Namespaces v4.x.x
// file: GitGenUI/Trackers/namespace.js

module.exports = __webpack_require__(/*! ../namespace */ 5).addNamespace(
  'Trackers',
  class Trackers extends Neptune.PackageNamespace {}
);


/***/ }),
/* 11 */
/*!**********************************************!*\
  !*** ./source/GitGenUI/Widgets/namespace.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// generated by Neptune Namespaces v4.x.x
// file: GitGenUI/Widgets/namespace.js

module.exports = __webpack_require__(/*! ../namespace */ 5).addNamespace(
  'Widgets',
  class Widgets extends Neptune.PackageNamespace {}
);


/***/ }),
/* 12 */
/*!**************************************!*\
  !*** ./source/GitGenUI/GitGenUI.caf ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return [__webpack_require__(/*! ./Cli */ 13), __webpack_require__(/*! ./Lib */ 19)];
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 13 */
/*!*********************************!*\
  !*** ./source/GitGenUI/Cli.caf ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["String", "merge"],
    [global, __webpack_require__(/*! art-standard-lib */ 14)],
    (String, merge) => {
      let fs;
      fs = __webpack_require__(/*! fs-extra */ 15);
      return {
        run: function() {
          return __webpack_require__(/*! ./Config */ 16)
            .load()
            .tap(config => __webpack_require__(/*! ./Tracker */ 31).tracker.init(config))
            .then(() => {
              let commandsMap;
              commandsMap = Caf.object(
                __webpack_require__(/*! ./CommandsV2 */ 38).modules,
                null,
                m => Caf.is(m.description, String)
              );
              return __webpack_require__(/*! @art-suite/cli */ 60).start({
                commands: Caf.object(commandsMap, ({ run }) => run),
                help: {
                  commands: Caf.object(commandsMap, m =>
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
/* 14 */
/*!***********************************************************************************!*\
  !*** external "require('art-standard-lib' /* ABC - not inlining fellow NPM *_/)" ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('art-standard-lib' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 15 */
/*!***************************************************************************!*\
  !*** external "require('fs-extra' /* ABC - not inlining fellow NPM *_/)" ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('fs-extra' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 16 */
/*!************************************!*\
  !*** ./source/GitGenUI/Config.caf ***!
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
      __webpack_require__(/*! ./StandardImport */ 17),
      {
        path: __webpack_require__(/*! path */ 27),
        fs: __webpack_require__(/*! fs-extra */ 15),
        glob: __webpack_require__(/*! glob-promise */ 28)
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
            return Promise.then(() => __webpack_require__(/*! os */ 29).homedir());
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
            return __webpack_require__(/*! fs-extra */ 15)
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
            return __webpack_require__(/*! fs-extra */ 15).existsSync(
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
/* 17 */
/*!********************************************!*\
  !*** ./source/GitGenUI/StandardImport.caf ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return __webpack_require__(/*! art-standard-lib */ 14).mergeWithSelf(
    __webpack_require__(/*! art-class-system */ 18),
    __webpack_require__(/*! ./Lib */ 19),
    __webpack_require__(/*! art-communication-status */ 30)
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 18 */
/*!***********************************************************************************!*\
  !*** external "require('art-class-system' /* ABC - not inlining fellow NPM *_/)" ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('art-class-system' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 19 */
/*!**************************************!*\
  !*** ./source/GitGenUI/Lib/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// generated by Neptune Namespaces v4.x.x
// file: GitGenUI/Lib/index.js

(module.exports = __webpack_require__(/*! ./namespace */ 9))
.includeInNamespace(__webpack_require__(/*! ./Lib */ 20))
.addModules({
  Autocomplete:   __webpack_require__(/*! ./Autocomplete */ 21),
  Git:            __webpack_require__(/*! ./Git */ 25),
  SearchSort:     __webpack_require__(/*! ./SearchSort */ 23),
  SourceRoots:    __webpack_require__(/*! ./SourceRoots */ 26),
  StandardImport: __webpack_require__(/*! ./StandardImport */ 22)
});

/***/ }),
/* 20 */
/*!*************************************!*\
  !*** ./source/GitGenUI/Lib/Lib.caf ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return (() => {
    return [
      __webpack_require__(/*! ./Autocomplete */ 21),
      __webpack_require__(/*! ./Git */ 25),
      __webpack_require__(/*! ./SearchSort */ 23),
      __webpack_require__(/*! ./SourceRoots */ 26)
    ];
  })();
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 21 */
/*!**********************************************!*\
  !*** ./source/GitGenUI/Lib/Autocomplete.caf ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["process", "Promise", "searchSort"],
    [global, __webpack_require__(/*! ./StandardImport */ 22), __webpack_require__(/*! ./SearchSort */ 23)],
    (process, Promise, searchSort) => {
      let autocompleteFromStrings;
      return {
        autocompleteFromStrings: (autocompleteFromStrings = function(strings) {
          return (answersSoFar, input) => {
            let columns;
            columns = process.stdout.columns;
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
/* 22 */
/*!************************************************!*\
  !*** ./source/GitGenUI/Lib/StandardImport.caf ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return __webpack_require__(/*! art-standard-lib */ 14).mergeWithSelf(__webpack_require__(/*! art-class-system */ 18));
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 23 */
/*!********************************************!*\
  !*** ./source/GitGenUI/Lib/SearchSort.caf ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["present", "RegExp", "escapeRegexp"],
    [global, __webpack_require__(/*! art-standard-lib */ 14)],
    (present, RegExp, escapeRegexp) => {
      let stableSort,
        prepSearchMatch,
        searchMatch,
        sortByMatchQuality,
        searchSort,
        approximateSearchSort;
      stableSort = __webpack_require__(/*! stable */ 24);
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
/* 24 */
/*!*************************************************************************!*\
  !*** external "require('stable' /* ABC - not inlining fellow NPM *_/)" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('stable' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 25 */
/*!*************************************!*\
  !*** ./source/GitGenUI/Lib/Git.caf ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["present", "Error", "compactFlattenAll"],
    [global, __webpack_require__(/*! ./StandardImport */ 22)],
    (present, Error, compactFlattenAll) => {
      let answersToCommit;
      return {
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
/* 26 */
/*!*********************************************!*\
  !*** ./source/GitGenUI/Lib/SourceRoots.caf ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["BaseClass", "Promise", "present", "compactFlatten"],
    [global, __webpack_require__(/*! ./StandardImport */ 22)],
    (BaseClass, Promise, present, compactFlatten) => {
      let fs, path, glob, SourceRoots;
      fs = __webpack_require__(/*! fs-extra */ 15);
      path = __webpack_require__(/*! path */ 27);
      glob = __webpack_require__(/*! glob-promise */ 28);
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
                  directory !== __webpack_require__(/*! os */ 29).homedir() &&
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
/* 27 */
/*!***********************************************************************!*\
  !*** external "require('path' /* ABC - not inlining fellow NPM *_/)" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('path' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 28 */
/*!*******************************************************************************!*\
  !*** external "require('glob-promise' /* ABC - not inlining fellow NPM *_/)" ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('glob-promise' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 29 */
/*!*********************************************************************!*\
  !*** external "require('os' /* ABC - not inlining fellow NPM *_/)" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('os' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 30 */
/*!*******************************************************************************************!*\
  !*** external "require('art-communication-status' /* ABC - not inlining fellow NPM *_/)" ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('art-communication-status' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 31 */
/*!*************************************!*\
  !*** ./source/GitGenUI/Tracker.caf ***!
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
      __webpack_require__(/*! art-standard-lib */ 14),
      __webpack_require__(/*! art-class-system */ 18),
      __webpack_require__(/*! colors */ 32)
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
            this._tracker = __webpack_require__(/*! ./Trackers */ 33)[name];
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
/* 32 */
/*!*************************************************************************!*\
  !*** external "require('colors' /* ABC - not inlining fellow NPM *_/)" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('colors' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 33 */
/*!*******************************************!*\
  !*** ./source/GitGenUI/Trackers/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// generated by Neptune Namespaces v4.x.x
// file: GitGenUI/Trackers/index.js

(module.exports = __webpack_require__(/*! ./namespace */ 10))

.addModules({
  PivotalTracker: __webpack_require__(/*! ./PivotalTracker */ 34)
});

/***/ }),
/* 34 */
/*!*****************************************************!*\
  !*** ./source/GitGenUI/Trackers/PivotalTracker.caf ***!
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
      __webpack_require__(/*! art-standard-lib */ 14),
      __webpack_require__(/*! art-class-system */ 18),
      __webpack_require__(/*! ../Config */ 16),
      __webpack_require__(/*! art-rest-client */ 35)
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
            return __webpack_require__(/*! open */ 36)(this.getProjectUrl(projectId));
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
                    __webpack_require__(/*! btoa */ 37)(
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
/* 35 */
/*!**********************************************************************************!*\
  !*** external "require('art-rest-client' /* ABC - not inlining fellow NPM *_/)" ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('art-rest-client' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 36 */
/*!***********************************************************************!*\
  !*** external "require('open' /* ABC - not inlining fellow NPM *_/)" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('open' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 37 */
/*!***********************************************************************!*\
  !*** external "require('btoa' /* ABC - not inlining fellow NPM *_/)" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('btoa' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 38 */
/*!*********************************************!*\
  !*** ./source/GitGenUI/CommandsV2/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// generated by Neptune Namespaces v4.x.x
// file: GitGenUI/CommandsV2/index.js

(module.exports = __webpack_require__(/*! ./namespace */ 8))

.addModules({
  Add:            __webpack_require__(/*! ./Add */ 39),
  Comment:        __webpack_require__(/*! ./Comment */ 50),
  Commit:         __webpack_require__(/*! ./Commit */ 51),
  Init:           __webpack_require__(/*! ./Init */ 52),
  OpenTracker:    __webpack_require__(/*! ./OpenTracker */ 53),
  ShowConfig:     __webpack_require__(/*! ./ShowConfig */ 54),
  Stage:          __webpack_require__(/*! ./Stage */ 55),
  StandardImport: __webpack_require__(/*! ./StandardImport */ 40),
  Start:          __webpack_require__(/*! ./Start */ 56),
  Status:         __webpack_require__(/*! ./Status */ 57),
  Stories:        __webpack_require__(/*! ./Stories */ 58),
  WhoAmI:         __webpack_require__(/*! ./WhoAmI */ 59)
});

/***/ }),
/* 39 */
/*!********************************************!*\
  !*** ./source/GitGenUI/CommandsV2/Add.caf ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["InteractiveAdd"],
    [global, __webpack_require__(/*! ./StandardImport */ 40), __webpack_require__(/*! ../Widgets */ 45)],
    InteractiveAdd => {
      return { description: "alias for stage", run: InteractiveAdd };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 40 */
/*!*******************************************************!*\
  !*** ./source/GitGenUI/CommandsV2/StandardImport.caf ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return __webpack_require__(/*! ../StandardImport */ 17).mergeWithSelf(
    __webpack_require__(/*! ../InquirerPlus */ 41),
    { tracker: __webpack_require__(/*! ../Tracker */ 31).tracker }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 41 */
/*!******************************************!*\
  !*** ./source/GitGenUI/InquirerPlus.caf ***!
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
      "autocompleteFromStrings"
    ],
    [
      global,
      __webpack_require__(/*! art-standard-lib */ 14),
      __webpack_require__(/*! art-class-system */ 18),
      __webpack_require__(/*! ./Lib */ 19)
    ],
    (
      Promise,
      compactFlatten,
      merge,
      Function,
      deepMerge,
      autocompleteFromStrings
    ) => {
      let InquirerPlus;
      __webpack_require__(/*! inquirer */ 42).registerPrompt(
        "autocomplete",
        __webpack_require__(/*! inquirer-autocomplete-prompt */ 43)
      );
      __webpack_require__(/*! inquirer */ 42).registerPrompt(
        "checkbox-plus",
        __webpack_require__(/*! inquirer-checkbox-plus-prompt */ 44)
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
            return __webpack_require__(/*! inquirer */ 42).prompt.then(result => {
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
                  __webpack_require__(/*! inquirer */ 42)
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
              __webpack_require__(/*! inquirer */ 42).prompt(compactFlatten(prompts))
            );
          this.AutoCompleteQ = function(options) {
            return merge(
              {
                type: "autocomplete",
                source: autocompleteFromStrings(compactFlatten(options.strings))
              },
              options
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
                    stories.map(__webpack_require__(/*! ./Tracker */ 31).tracker.formatStory),
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
/* 42 */
/*!***************************************************************************!*\
  !*** external "require('inquirer' /* ABC - not inlining fellow NPM *_/)" ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('inquirer' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 43 */
/*!***********************************************************************************************!*\
  !*** external "require('inquirer-autocomplete-prompt' /* ABC - not inlining fellow NPM *_/)" ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('inquirer-autocomplete-prompt' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 44 */
/*!************************************************************************************************!*\
  !*** external "require('inquirer-checkbox-plus-prompt' /* ABC - not inlining fellow NPM *_/)" ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('inquirer-checkbox-plus-prompt' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 45 */
/*!******************************************!*\
  !*** ./source/GitGenUI/Widgets/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// generated by Neptune Namespaces v4.x.x
// file: GitGenUI/Widgets/index.js

(module.exports = __webpack_require__(/*! ./namespace */ 11))

.addModules({
  InteractiveAdd: __webpack_require__(/*! ./InteractiveAdd */ 46),
  StandardImport: __webpack_require__(/*! ./StandardImport */ 47)
});

/***/ }),
/* 46 */
/*!****************************************************!*\
  !*** ./source/GitGenUI/Widgets/InteractiveAdd.caf ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["ask", "CheckboxQ", "pad"],
    [global, __webpack_require__(/*! ./StandardImport */ 47)],
    (ask, CheckboxQ, pad) => {
      return function() {
        return __webpack_require__(/*! ../Git */ 48)
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
                      ? __webpack_require__(/*! ../Git */ 48).stage(file.path)
                      : undefined
                    : !Caf.in(file.path, selectedFiles)
                    ? __webpack_require__(/*! ../Git */ 48).unstage(file.path)
                    : undefined
                )
              );
          })
          .then(() => __webpack_require__(/*! ../Git */ 48).printStatus());
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 47 */
/*!****************************************************!*\
  !*** ./source/GitGenUI/Widgets/StandardImport.caf ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return __webpack_require__(/*! ../StandardImport */ 17).mergeWithSelf(__webpack_require__(/*! ../InquirerPlus */ 41));
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 48 */
/*!*********************************!*\
  !*** ./source/GitGenUI/Git.caf ***!
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
      "pluralize",
      "pad",
      "present"
    ],
    [global, __webpack_require__(/*! ./StandardImport */ 17), { colors: __webpack_require__(/*! colors */ 32) }],
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
      pluralize,
      pad,
      present
    ) => {
      let SimpleGit, Git;
      SimpleGit = __webpack_require__(/*! simple-git/promise */ 49)();
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
            outputOne = ({ path }, status, clr) =>
              colors[clr](
                `  ${Caf.toString(pad(status + ":", 12))} ${Caf.toString(path)}`
              );
            staged = [];
            unstaged = [];
            untracked = [];
            Caf.each2(status.files, file =>
              !present(file.workingDir)
                ? staged.push(outputOne(file, file.index, "green"))
                : file.workingDir === "untracked"
                ? untracked.push(outputOne(file, file.workingDir, "red"))
                : unstaged.push(outputOne(file, file.workingDir, "red"))
            );
            if (staged.length > 0) {
              log(
                `\nChanges to be committed:       ${Caf.toString(
                  colors.grey(
                    `(${Caf.toString(pluralize("file", staged.length))})`
                  )
                )}`
              );
              log(staged.sort().join("\n"));
            }
            if (unstaged.length > 0) {
              log(
                `\nChanges not staged to commit:  ${Caf.toString(
                  colors.grey(
                    `(${Caf.toString(pluralize("file", unstaged.length))})`
                  )
                )}`
              );
              log(unstaged.sort().join("\n"));
            }
            return untracked.length > 0
              ? (log(
                  `\nUntracked files:               ${Caf.toString(
                    colors.grey(
                      `(${Caf.toString(pluralize("file", untracked.length))})`
                    )
                  )}`
                ),
                log(untracked.sort().join("\n")))
              : undefined;
          });
        };
      }));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 49 */
/*!*************************************************************************************!*\
  !*** external "require('simple-git/promise' /* ABC - not inlining fellow NPM *_/)" ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('simple-git/promise' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 50 */
/*!************************************************!*\
  !*** ./source/GitGenUI/CommandsV2/Comment.caf ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["ask", "SelectStoryQ", "InputQ", "log"],
    [global, __webpack_require__(/*! ./StandardImport */ 40), __webpack_require__(/*! ../InquirerPlus */ 41)],
    (ask, SelectStoryQ, InputQ, log) => {
      return {
        description: "comment on a story",
        run: function(options) {
          return __webpack_require__(/*! ../Tracker */ 31)
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
                    __webpack_require__(/*! ../Tracker */ 31).tracker.createComment(
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
/* 51 */
/*!***********************************************!*\
  !*** ./source/GitGenUI/CommandsV2/Commit.caf ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
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
    [global, __webpack_require__(/*! ./StandardImport */ 40), __webpack_require__(/*! ../InquirerPlus */ 41)],
    (
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
      let nothingStaged;
      nothingStaged = function(status) {
        return (
          status.staged.length === 0 &&
          status.renamed.length === 0 &&
          status.created.length === 0 &&
          status.deleted.length === 0
        );
      };
      return {
        description: "interactive commit",
        run: function(options) {
          return __webpack_require__(/*! ../Git */ 48)
            .status.then(status =>
              nothingStaged(status)
                ? __webpack_require__(/*! ../Widgets */ 45)
                    .InteractiveAdd()
                    .then(status =>
                      nothingStaged(status)
                        ? (log(
                            "\nNothing is staged in git.\nPlease 'git add' something."
                          ),
                          process.exit(1))
                        : undefined
                    )
                : __webpack_require__(/*! ../Git */ 48)
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
                      "patch/other:       other patch-level change                version + 0.0.1",
                      "minor/feature:     feature added or extended               version + 0.1.0",
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
                      __webpack_require__(/*! colors */ 32).green(message)
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
                      ? __webpack_require__(/*! ../Git */ 48)
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
/* 52 */
/*!*********************************************!*\
  !*** ./source/GitGenUI/CommandsV2/Init.caf ***!
  \*********************************************/
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
      __webpack_require__(/*! ./StandardImport */ 40),
      __webpack_require__(/*! ../InquirerPlus */ 41),
      { colors: __webpack_require__(/*! colors */ 32) }
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
          return __webpack_require__(/*! ../Git */ 48)
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
                  return __webpack_require__(/*! ../Tracker */ 31)
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
                  __webpack_require__(/*! ../Config */ 16).writeUserConfig({
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
/* 53 */
/*!****************************************************!*\
  !*** ./source/GitGenUI/CommandsV2/OpenTracker.caf ***!
  \****************************************************/
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
        return __webpack_require__(/*! ../Tracker */ 31).tracker.openInBrowser();
      }
    };
  })();
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 54 */
/*!***************************************************!*\
  !*** ./source/GitGenUI/CommandsV2/ShowConfig.caf ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["log"],
    [global, __webpack_require__(/*! ./StandardImport */ 40)],
    log => {
      return {
        description: "show the merged configurarion for git-genui",
        run: function() {
          return log(__webpack_require__(/*! ../Config */ 16).config);
        }
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 55 */
/*!**********************************************!*\
  !*** ./source/GitGenUI/CommandsV2/Stage.caf ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["InteractiveAdd"],
    [global, __webpack_require__(/*! ./StandardImport */ 40), __webpack_require__(/*! ../Widgets */ 45)],
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
/* 56 */
/*!**********************************************!*\
  !*** ./source/GitGenUI/CommandsV2/Start.caf ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["tracker", "log", "ask", "SelectStoryQ", "present", "Promise", "merge"],
    [global, __webpack_require__(/*! ./StandardImport */ 40), __webpack_require__(/*! ../InquirerPlus */ 41)],
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
                log(__webpack_require__(/*! colors */ 32).cyan("Stories already started:"));
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
/* 57 */
/*!***********************************************!*\
  !*** ./source/GitGenUI/CommandsV2/Status.caf ***!
  \***********************************************/
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
        return __webpack_require__(/*! ../Git */ 48).printStatus();
      }
    };
  })();
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 58 */
/*!************************************************!*\
  !*** ./source/GitGenUI/CommandsV2/Stories.caf ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["log", "tracker"],
    [global, __webpack_require__(/*! ./StandardImport */ 40), __webpack_require__(/*! ../InquirerPlus */ 41)],
    (log, tracker) => {
      return {
        description: "list all open stories",
        run: function(options) {
          return __webpack_require__(/*! ../Tracker */ 31).tracker.stories.then(stories =>
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
/* 59 */
/*!***********************************************!*\
  !*** ./source/GitGenUI/CommandsV2/WhoAmI.caf ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["log", "Array", "Object"],
    [global, __webpack_require__(/*! ./StandardImport */ 40)],
    (log, Array, Object) => {
      return {
        description: "show which tracker account you are logged in with",
        run: function(options) {
          return __webpack_require__(/*! ../Tracker */ 31).tracker.myAccount.then(account =>
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
/* 60 */
/*!*********************************************************************************!*\
  !*** external "require('@art-suite/cli' /* ABC - not inlining fellow NPM *_/)" ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('@art-suite/cli' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 61 */
/*!***********************************!*\
  !*** ./source/GitGenUI/pizza.caf ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["log", "Number", "isNaN", "parseFloat"],
    [global, __webpack_require__(/*! art-standard-lib */ 14)],
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
        return __webpack_require__(/*! inquirer */ 42)
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