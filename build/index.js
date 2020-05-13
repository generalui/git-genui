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
  ConfigShared:      __webpack_require__(/*! ./ConfigShared */ 33),
  Git:               __webpack_require__(/*! ./Git */ 34),
  GitGenUiPromptFor: __webpack_require__(/*! ./GitGenUiPromptFor */ 64),
  InquirerPlus:      __webpack_require__(/*! ./InquirerPlus */ 47),
  ProjectConfig:     __webpack_require__(/*! ./ProjectConfig */ 37),
  StandardImport:    __webpack_require__(/*! ./StandardImport */ 18),
  Tracker:           __webpack_require__(/*! ./Tracker */ 38),
  UserConfig:        __webpack_require__(/*! ./UserConfig */ 17)
});
__webpack_require__(/*! ./Commands */ 44);
__webpack_require__(/*! ./Lib */ 20);
__webpack_require__(/*! ./PromptFor */ 58);
__webpack_require__(/*! ./Trackers */ 39);
__webpack_require__(/*! ./Widgets */ 51);

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

module.exports = JSON.parse("{\"author\":\"GenUI LLC\",\"bin\":{\"s3p\":\"./s3p\"},\"bugs\":\"https:/github.com/generalui/git-genui/issues\",\"dependencies\":{\"@art-suite/cli\":\"^1.1.1\",\"art-rest-client\":\"^1.7.0\",\"btoa\":\"^1.2.1\",\"fs-extra\":\"^9.0.0\",\"inquirer\":\"^7.1.0\",\"inquirer-autocomplete-prompt\":\"^1.0.2\",\"inquirer-checkbox-plus-prompt\":\"^1.0.1\",\"neptune-namespaces\":\"^4.0.0\",\"open\":\"^7.0.3\",\"pivotaljs\":\"^1.0.3\",\"simple-git\":\"^1.132.0\",\"stable\":\"^0.1.8\"},\"description\":\"git-genui streamlines: PivotalTracker updates, git-commits, pairing-git-commits, semantic-versioning\",\"devDependencies\":{\"art-build-configurator\":\"^1.26.9\",\"art-testbench\":\"^1.17.2\",\"caffeine-script\":\"^0.72.1\",\"case-sensitive-paths-webpack-plugin\":\"^2.2.0\",\"chai\":\"^4.2.0\",\"coffee-loader\":\"^0.7.3\",\"css-loader\":\"^3.0.0\",\"json-loader\":\"^0.5.7\",\"mocha\":\"^7.1.1\",\"mock-fs\":\"^4.11.0\",\"script-loader\":\"^0.7.2\",\"style-loader\":\"^1.0.0\",\"webpack\":\"^4.39.1\",\"webpack-cli\":\"*\",\"webpack-dev-server\":\"^3.7.2\",\"webpack-merge\":\"^4.2.1\",\"webpack-node-externals\":\"^1.7.2\",\"webpack-stylish\":\"^0.1.8\"},\"homepage\":\"https://github.com/generalui/git-genui\",\"license\":\"ISC\",\"name\":\"git-genui\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/generalui/git-genui.git\"},\"scripts\":{\"build\":\"webpack --progress\",\"start\":\"webpack-dev-server --hot --inline --progress --env.devServer\",\"test\":\"nn -s;mocha -u tdd\",\"testInBrowser\":\"webpack-dev-server --progress --env.devServer\"},\"version\":\"0.2.1\"}");

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
  return [__webpack_require__(/*! ./Cli */ 15), __webpack_require__(/*! ./Lib */ 20)];
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
    ["String", "log", "dashCase", "merge"],
    [global, __webpack_require__(/*! art-standard-lib */ 16)],
    (String, log, dashCase, merge) => {
      return {
        run: function() {
          return __webpack_require__(/*! ./UserConfig */ 17)
            .initSingleton()
            .then(() => __webpack_require__(/*! ./ProjectConfig */ 37).initSingleton())
            .then(projectConfig =>
              __webpack_require__(/*! ./Tracker */ 38).tracker.init(projectConfig)
            )
            .then(() => {
              let commands;
              commands = Caf.object(__webpack_require__(/*! ./Commands */ 44).modules, null, m =>
                Caf.is(m.description, String)
              );
              return __webpack_require__(/*! @art-suite/cli */ 74).start({
                commands: Caf.object(commands, ({ run }, command) => params => {
                  !params.quiet &&
                    log(
                      __webpack_require__(/*! colors */ 35).bold(
                        __webpack_require__(/*! colors */ 35).brightWhite(
                          `git genui ${Caf.toString(dashCase(command))}`
                        )
                      )
                    );
                  return run(params);
                }),
                help: {
                  commands: Caf.object(commands, m =>
                    merge(m, {
                      options: {
                        quiet: "no extra output",
                        verbose: "run with verbose logging"
                      }
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
/*!****************************************!*\
  !*** ./source/GitGenUi/UserConfig.caf ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Promise", "merge", "toSeconds"],
    [global, __webpack_require__(/*! ./StandardImport */ 18)],
    (Promise, merge, toSeconds) => {
      let UserConfig;
      return (UserConfig = Caf.defClass(
        class UserConfig extends __webpack_require__(/*! ./ConfigShared */ 33) {},
        function(UserConfig, classSuper, instanceSuper) {
          this.singletonClass();
          this.classGetter({
            configFilePathPromise: function() {
              return Promise.then(() =>
                __webpack_require__(/*! path */ 29).join(
                  __webpack_require__(/*! os */ 31).homedir(),
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
          this.prototype.init = function() {
            return instanceSuper.init
              .apply(this, arguments)
              .then(() => __webpack_require__(/*! ./Git */ 34).origin)
              .then(origin => (this._currentProjectKey = origin));
          };
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 18 */
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
    __webpack_require__(/*! art-class-system */ 19),
    __webpack_require__(/*! ./Lib */ 20),
    __webpack_require__(/*! art-communication-status */ 32)
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 19 */
/*!***********************************************************************************!*\
  !*** external "require('art-class-system' /* ABC - not inlining fellow NPM *_/)" ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('art-class-system' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 20 */
/*!**************************************!*\
  !*** ./source/GitGenUi/Lib/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// generated by Neptune Namespaces v4.x.x
// file: GitGenUi/Lib/index.js

(module.exports = __webpack_require__(/*! ./namespace */ 10))
.includeInNamespace(__webpack_require__(/*! ./Lib */ 21))
.addModules({
  Autocomplete:   __webpack_require__(/*! ./Autocomplete */ 22),
  Git:            __webpack_require__(/*! ./Git */ 26),
  SearchSort:     __webpack_require__(/*! ./SearchSort */ 24),
  SourceRoots:    __webpack_require__(/*! ./SourceRoots */ 27),
  StandardImport: __webpack_require__(/*! ./StandardImport */ 23)
});

/***/ }),
/* 21 */
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
      __webpack_require__(/*! ./Autocomplete */ 22),
      __webpack_require__(/*! ./Git */ 26),
      __webpack_require__(/*! ./SearchSort */ 24),
      __webpack_require__(/*! ./SourceRoots */ 27)
    ];
  })();
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 22 */
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
    ["process", "Promise", "approximateSearchSort"],
    [global, __webpack_require__(/*! ./StandardImport */ 23), __webpack_require__(/*! ./SearchSort */ 24)],
    (process, Promise, approximateSearchSort) => {
      let autocompleteFromStrings;
      return {
        autocompleteFromStrings: (autocompleteFromStrings = function(strings) {
          return (answersSoFar, input) => {
            let columns;
            columns = process.stdout.columns;
            autocompleteFromStrings(input, strings);
            return Promise.resolve(
              Caf.array(approximateSearchSort(input, strings), str =>
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
/* 23 */
/*!************************************************!*\
  !*** ./source/GitGenUi/Lib/StandardImport.caf ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return __webpack_require__(/*! art-standard-lib */ 16).mergeWithSelf(__webpack_require__(/*! art-class-system */ 19));
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 24 */
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
    ["RegExp", "escapeRegexp", "min", "present", "nearInfinity"],
    [global, __webpack_require__(/*! art-standard-lib */ 16)],
    (RegExp, escapeRegexp, min, present, nearInfinity) => {
      let stableSort,
        searchMatch,
        compareMatchQuality,
        getSearchRegExp,
        getMatchQuality,
        approximateSearchSort;
      stableSort = __webpack_require__(/*! stable */ 25);
      searchMatch = function(searchString, string) {
        return getSearchRegExp(searchString).test(string);
      };
      return {
        compareMatchQuality: (compareMatchQuality = function(a, b) {
          return a.quality - b.quality;
        }),
        getSearchRegExp: (getSearchRegExp = function(searchString) {
          return {
            searchString,
            caseInsensative: new RegExp(
              Caf.array(searchString.split(""), letter =>
                escapeRegexp(letter)
              ).join(".*?"),
              "ig"
            ),
            caseSensative: new RegExp(
              Caf.array(searchString.split(""), letter =>
                escapeRegexp(letter)
              ).join(".*?"),
              "g"
            )
          };
        }),
        getMatchQuality: (getMatchQuality = function(
          string,
          { caseInsensative, caseSensative, searchString }
        ) {
          let quality, match, fullMatch;
          quality = 1 / 0;
          caseSensative.lastIndex = caseInsensative.lastIndex;
          match = fullMatch = null;
          while (
            (fullMatch = caseInsensative.exec(string)) &&
            (match = fullMatch[0])
          ) {
            let caseSensativeMatchLength, position, base, base1;
            caseSensativeMatchLength =
              Caf.exists((base = caseSensative.exec(string))) &&
              Caf.exists((base1 = base[0])) && base1.length;
            caseSensative.lastIndex = caseInsensative.lastIndex =
              1 + (position = fullMatch.index);
            quality = min(
              quality,
              (match.length * 10000 +
                (caseSensativeMatchLength === match.length ? 1 : 0)) *
                10000 +
                position
            );
          }
          return quality;
        }),
        approximateSearchSort: (approximateSearchSort = function(
          searchString,
          strings
        ) {
          let searchRegExp, sortedStringsWithMatchLength, found;
          if (!present(searchString)) {
            return strings;
          }
          searchRegExp = getSearchRegExp(searchString);
          sortedStringsWithMatchLength = stableSort(
            Caf.each2(
              strings,
              string => {
                let quality;
                return nearInfinity >
                  (quality = getMatchQuality(string, searchRegExp))
                  ? found.push({ quality, string })
                  : undefined;
              },
              null,
              (found = [])
            ),
            compareMatchQuality
          );
          return Caf.array(
            sortedStringsWithMatchLength,
            ({ string }) => string
          );
        })
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 25 */
/*!*************************************************************************!*\
  !*** external "require('stable' /* ABC - not inlining fellow NPM *_/)" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('stable' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 26 */
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
    [global, __webpack_require__(/*! ./StandardImport */ 23)],
    (merge, present, Error, compactFlattenAll) => {
      let normalizeGitStatus,
        nothingStaged,
        answersToCommit,
        getGitCommitMessage;
      return {
        normalizeGitStatus: (normalizeGitStatus = function(status) {
          let staged, unstaged, untracked;
          if (!status.files) {
            return status;
          }
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
          return {
            staged,
            unstaged,
            untracked,
            current: status.current,
            traking: status.traking,
            ahead: status.ahead,
            behind: status.behind
          };
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
        }),
        getGitCommitMessage: (getGitCommitMessage = function({
          type,
          story,
          message,
          coauthors,
          storyStatus
        }) {
          return compactFlattenAll(
            type != null ? type : "(type)",
            ": ",
            Caf.exists(story) && story.id
              ? `[#${Caf.toString(story.id)}]${Caf.toString(
                  storyStatus && storyStatus !== story.status
                    ? ` (${Caf.toString(storyStatus)})`
                    : undefined
                )} `
              : undefined,
            message != null ? message : "(message)",
            coauthors
              ? "\n\n\n" +
                  Caf.array(coauthors, coauthor =>
                    `Coauthored-by: ${Caf.toString(coauthor)}"`.join("\n")
                  )
              : undefined
          ).join("");
        })
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 27 */
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
    [global, __webpack_require__(/*! ./StandardImport */ 23)],
    (BaseClass, Promise, present, compactFlatten) => {
      let fs, path, glob, SourceRoots;
      fs = __webpack_require__(/*! fs-extra */ 28);
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
/* 28 */
/*!***************************************************************************!*\
  !*** external "require('fs-extra' /* ABC - not inlining fellow NPM *_/)" ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('fs-extra' /* ABC - not inlining fellow NPM */);

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
/*!******************************************!*\
  !*** ./source/GitGenUi/ConfigShared.caf ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["BaseClass", "Promise", "toInspectedObjects", "merge", "JSON"],
    [global, __webpack_require__(/*! ./StandardImport */ 18)],
    (BaseClass, Promise, toInspectedObjects, merge, JSON) => {
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
          this.prototype._save = function() {
            let filePath;
            return __webpack_require__(/*! fs-extra */ 28)
              .writeFile(
                (filePath = this.configFilePath),
                JSON.stringify(this.config, null, "  ")
              )
              .then(() => this.config);
          };
          this.prototype._load = function() {
            return (this._readyPromise = Promise.then(() =>
              __webpack_require__(/*! fs-extra */ 28).exists(this.configFilePath)
            )
              .then(exists =>
                exists
                  ? __webpack_require__(/*! fs-extra */ 28)
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 34 */
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
      "getGitCommitMessage",
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
    [global, __webpack_require__(/*! ./StandardImport */ 18), { colors: __webpack_require__(/*! colors */ 35) }],
    (
      BaseClass,
      Promise,
      getGitCommitMessage,
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
      SimpleGit = __webpack_require__(/*! simple-git/promise */ 36)();
      return (Git = Caf.defClass(class Git extends BaseClass {}, function(
        Git,
        classSuper,
        instanceSuper
      ) {
        let statusCodes, decodeStatus;
        this.commit = function(options) {
          return Promise.then(() =>
            SimpleGit.commit(getGitCommitMessage(options))
          );
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
          remotes: function() {
            return Promise.then(() => SimpleGit.getRemotes(true));
          },
          origin: function() {
            return this.remotes.then(remotes =>
              Caf.find(
                remotes,
                remote => remote.refs.fetch,
                remote => remote.name === "origin"
              )
            );
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
          return Promise.all([this.status, this.origin]).tap(
            ([status, origin]) => {
              let outputOne, staged, unstaged, untracked;
              log(`Origin:        ${Caf.toString(colors.green(origin))}`);
              log(
                `Branch:        ${Caf.toString(colors.green(status.current))}`
              );
              log(
                `Tracking:      ${Caf.toString(colors.green(status.tracking))}`
              );
              outputOne = ({ path, status }) =>
                `  ${Caf.toString(pad(status + ":", 12))} ${Caf.toString(
                  path
                )}`;
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
                    file.status === "modified" && file.index !== "modified"
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
            }
          );
        };
      }));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 35 */
/*!*************************************************************************!*\
  !*** external "require('colors' /* ABC - not inlining fellow NPM *_/)" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('colors' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 36 */
/*!*************************************************************************************!*\
  !*** external "require('simple-git/promise' /* ABC - not inlining fellow NPM *_/)" ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('simple-git/promise' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 37 */
/*!*******************************************!*\
  !*** ./source/GitGenUi/ProjectConfig.caf ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Promise", "SourceRoots", "process"],
    [global, __webpack_require__(/*! ./StandardImport */ 18), { path: __webpack_require__(/*! path */ 29) }],
    (Promise, SourceRoots, process) => {
      let ProjectConfig;
      return (ProjectConfig = Caf.defClass(
        class ProjectConfig extends __webpack_require__(/*! ./ConfigShared */ 33) {},
        function(ProjectConfig, classSuper, instanceSuper) {
          this.singletonClass();
          this.configBasename = "git-genui.config.json";
          this.sourceRootIndicatorFiles = [".git", this.configBasename];
          this.getter({
            project: function() {
              return this.config.project;
            }
          });
          this.classGetter({
            configFilePathPromise: function() {
              return this.repoRootPromise.then(dir =>
                __webpack_require__(/*! path */ 29).join(dir, this.configBasename)
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
                  ));
            }
          });
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 38 */
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
    [
      "BaseClass",
      "blue",
      "grey",
      "process",
      "present",
      "formatDate",
      "log",
      "green"
    ],
    [
      global,
      __webpack_require__(/*! art-standard-lib */ 16),
      __webpack_require__(/*! art-class-system */ 19),
      __webpack_require__(/*! colors */ 35)
    ],
    (BaseClass, blue, grey, process, present, formatDate, log, green) => {
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
          this.prototype.init = function(projectConfig) {
            let projectId, name, temp, base;
            if (
              Caf.exists(
                (temp =
                  Caf.exists(projectConfig) &&
                  Caf.exists((base = projectConfig.project)) && base.tracker)
              )
            ) {
              projectId = temp.projectId;
              name = temp.name;
            }
            this._tracker = __webpack_require__(/*! ./Trackers */ 39)[name];
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
            return story.id
              ? `${Caf.toString(
                  blue(`[#${Caf.toString(story.id)}]`)
                )} ${Caf.toString(
                  grey(`(${Caf.toString(story.state)})`)
                )} ${Caf.toString(story.name)}`
              : "(none)";
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
/* 39 */
/*!*******************************************!*\
  !*** ./source/GitGenUi/Trackers/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// generated by Neptune Namespaces v4.x.x
// file: GitGenUi/Trackers/index.js

(module.exports = __webpack_require__(/*! ./namespace */ 12))

.addModules({
  PivotalTracker: __webpack_require__(/*! ./PivotalTracker */ 40)
});

/***/ }),
/* 40 */
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
      "userConfig",
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
      __webpack_require__(/*! art-class-system */ 19),
      __webpack_require__(/*! art-rest-client */ 41),
      __webpack_require__(/*! ../UserConfig */ 17)
    ],
    (
      BaseClass,
      userConfig,
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
                  "X-TrackerToken": userConfig.accounts.pivotalTracker.token
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
            return __webpack_require__(/*! open */ 42)(this.getProjectUrl(projectId));
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
                    __webpack_require__(/*! btoa */ 43)(
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
/* 41 */
/*!**********************************************************************************!*\
  !*** external "require('art-rest-client' /* ABC - not inlining fellow NPM *_/)" ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('art-rest-client' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 42 */
/*!***********************************************************************!*\
  !*** external "require('open' /* ABC - not inlining fellow NPM *_/)" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('open' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 43 */
/*!***********************************************************************!*\
  !*** external "require('btoa' /* ABC - not inlining fellow NPM *_/)" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('btoa' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 44 */
/*!*******************************************!*\
  !*** ./source/GitGenUi/Commands/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// generated by Neptune Namespaces v4.x.x
// file: GitGenUi/Commands/index.js

(module.exports = __webpack_require__(/*! ./namespace */ 8))

.addModules({
  Add:            __webpack_require__(/*! ./Add */ 45),
  Comment:        __webpack_require__(/*! ./Comment */ 54),
  Commit:         __webpack_require__(/*! ./Commit */ 55),
  Init:           __webpack_require__(/*! ./Init */ 65),
  OpenTracker:    __webpack_require__(/*! ./OpenTracker */ 66),
  ShowConfig:     __webpack_require__(/*! ./ShowConfig */ 67),
  Stage:          __webpack_require__(/*! ./Stage */ 68),
  StandardImport: __webpack_require__(/*! ./StandardImport */ 46),
  Start:          __webpack_require__(/*! ./Start */ 69),
  Status:         __webpack_require__(/*! ./Status */ 70),
  Stories:        __webpack_require__(/*! ./Stories */ 71),
  Version:        __webpack_require__(/*! ./Version */ 72),
  WhoAmI:         __webpack_require__(/*! ./WhoAmI */ 73)
});
__webpack_require__(/*! ./CommitLib */ 56);

/***/ }),
/* 45 */
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
    [global, __webpack_require__(/*! ./StandardImport */ 46), __webpack_require__(/*! ../Widgets */ 51)],
    InteractiveAdd => {
      return { description: "alias for stage", run: InteractiveAdd };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 46 */
/*!*****************************************************!*\
  !*** ./source/GitGenUi/Commands/StandardImport.caf ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return __webpack_require__(/*! ../StandardImport */ 18).mergeWithSelf(
    __webpack_require__(/*! ../InquirerPlus */ 47),
    { tracker: __webpack_require__(/*! ../Tracker */ 38).tracker }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 47 */
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
      __webpack_require__(/*! art-class-system */ 19),
      __webpack_require__(/*! ./Lib */ 20)
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
      __webpack_require__(/*! inquirer */ 48).registerPrompt(
        "autocomplete",
        __webpack_require__(/*! inquirer-autocomplete-prompt */ 49)
      );
      __webpack_require__(/*! inquirer */ 48).registerPrompt(
        "checkbox-plus",
        __webpack_require__(/*! inquirer-checkbox-plus-prompt */ 50)
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
            return __webpack_require__(/*! inquirer */ 48).prompt.then(result => {
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
                  __webpack_require__(/*! inquirer */ 48)
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
              __webpack_require__(/*! inquirer */ 48).prompt(compactFlatten(prompts))
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
                    stories.map(__webpack_require__(/*! ./Tracker */ 38).tracker.formatStory),
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
/* 48 */
/*!***************************************************************************!*\
  !*** external "require('inquirer' /* ABC - not inlining fellow NPM *_/)" ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('inquirer' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 49 */
/*!***********************************************************************************************!*\
  !*** external "require('inquirer-autocomplete-prompt' /* ABC - not inlining fellow NPM *_/)" ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('inquirer-autocomplete-prompt' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 50 */
/*!************************************************************************************************!*\
  !*** external "require('inquirer-checkbox-plus-prompt' /* ABC - not inlining fellow NPM *_/)" ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('inquirer-checkbox-plus-prompt' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 51 */
/*!******************************************!*\
  !*** ./source/GitGenUi/Widgets/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// generated by Neptune Namespaces v4.x.x
// file: GitGenUi/Widgets/index.js

(module.exports = __webpack_require__(/*! ./namespace */ 13))

.addModules({
  InteractiveAdd: __webpack_require__(/*! ./InteractiveAdd */ 52),
  StandardImport: __webpack_require__(/*! ./StandardImport */ 53)
});

/***/ }),
/* 52 */
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
    [global, __webpack_require__(/*! ./StandardImport */ 53)],
    (ask, CheckboxQ, pad) => {
      return function() {
        return __webpack_require__(/*! ../Git */ 34)
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
                      ? __webpack_require__(/*! ../Git */ 34).stage(file.path)
                      : undefined
                    : !Caf.in(file.path, selectedFiles)
                    ? __webpack_require__(/*! ../Git */ 34).unstage(file.path)
                    : undefined
                )
              );
          })
          .then(() => __webpack_require__(/*! ../Git */ 34).printStatus());
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 53 */
/*!****************************************************!*\
  !*** ./source/GitGenUi/Widgets/StandardImport.caf ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return __webpack_require__(/*! ../StandardImport */ 18).mergeWithSelf(__webpack_require__(/*! ../InquirerPlus */ 47));
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 54 */
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
    [global, __webpack_require__(/*! ./StandardImport */ 46), __webpack_require__(/*! ../InquirerPlus */ 47)],
    (ask, SelectStoryQ, InputQ, log) => {
      return {
        description: "comment on a story",
        run: function(options) {
          return __webpack_require__(/*! ../Tracker */ 38)
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
                    __webpack_require__(/*! ../Tracker */ 38).tracker.createComment(
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
/* 55 */
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
      "present",
      "Array",
      "String",
      "formattedInspect",
      "Promise",
      "log",
      "compactFlatten",
      "EditGitStage",
      "StoryMenu",
      "stripAnsi",
      "tracker",
      "SelectCommitType",
      "EditCommitMessage",
      "SelectCoauthors",
      "getGitCommitMessage",
      "userConfig",
      "merge",
      "normalizeGitStatus"
    ],
    [
      global,
      __webpack_require__(/*! ./StandardImport */ 46),
      __webpack_require__(/*! ../UserConfig */ 17),
      __webpack_require__(/*! ./CommitLib */ 56)
    ],
    (
      present,
      Array,
      String,
      formattedInspect,
      Promise,
      log,
      compactFlatten,
      EditGitStage,
      StoryMenu,
      stripAnsi,
      tracker,
      SelectCommitType,
      EditCommitMessage,
      SelectCoauthors,
      getGitCommitMessage,
      userConfig,
      merge,
      normalizeGitStatus
    ) => {
      let colorizeValue,
        colorNotPresent,
        presentValue,
        noop,
        CommitNow,
        ActionMenu,
        saveState,
        fillInMissingState,
        validateStory;
      colorizeValue = __webpack_require__(/*! colors */ 35).yellow;
      colorNotPresent = __webpack_require__(/*! colors */ 35).grey;
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
      CommitNow = function(state) {
        return (state.pretend
          ? Promise.resolve({
              branch: state.status.current,
              commit: "pretending",
              summary: { changes: 123, insertions: 456, deletions: 789 }
            })
          : __webpack_require__(/*! ../Git */ 34).commit(state)
        ).then(({ branch, commit, summary }) => {
          let staged;
          ({ staged } = state.status);
          log({
            success: {
              committed: Caf.array(staged, ({ path }) => path),
              branch,
              commit,
              summary: Caf.object(summary, v => v | 0)
            }
          });
          return null;
        });
      };
      ActionMenu = function(state) {
        let status,
          stories,
          members,
          myAccount,
          message,
          type,
          story,
          coauthors,
          otherMembers,
          staged,
          unstaged,
          untracked,
          statusColors,
          statusSummary;
        if (!state) {
          return;
        }
        status = state.status;
        stories = state.stories;
        members = state.members;
        myAccount = state.myAccount;
        message = state.message;
        type = state.type;
        story = state.story;
        coauthors = state.coauthors;
        otherMembers = Caf.array(
          members,
          null,
          member => member.id !== myAccount.id
        );
        ({ staged, unstaged, untracked } = status);
        statusColors = { staged: "green", unstaged: "red", untracked: "red" };
        statusSummary = compactFlatten(
          Caf.array(
            ["staged", "unstaged", "untracked"],
            statusCat =>
              __webpack_require__(/*! colors */ 35)[statusColors[statusCat]](
                `${Caf.toString(status[statusCat].length)} ${Caf.toString(
                  statusCat
                )}`
              ),
            statusCat => {
              let base;
              return (
                (Caf.exists((base = status[statusCat])) && base.length) > 0
              );
            }
          )
        ).join(", ");
        return __webpack_require__(/*! ../PromptFor */ 58)
          .selectList({
            prompt: "Select action:",
            items: compactFlatten([
              {
                action: EditGitStage,
                value: `1. Edit staged files:      ${Caf.toString(
                  statusSummary
                )}`
              },
              {
                action: StoryMenu,
                value: `2. Select story:           ${Caf.toString(
                  !myAccount
                    ? colorNotPresent("configure tracker")
                    : presentValue(
                        story
                          ? stripAnsi(tracker.formatStory(story))
                          : undefined
                      )
                )}`
              },
              {
                action: SelectCommitType,
                value: `3. Select type:            ${Caf.toString(
                  presentValue(type)
                )}`
              },
              {
                action: EditCommitMessage,
                value: `4. Edit message:           ${Caf.toString(
                  presentValue(message)
                )}`
              },
              {
                action: SelectCoauthors,
                value: `5. Change coauthors:       ${Caf.toString(
                  !myAccount
                    ? colorNotPresent("configure tracker")
                    : otherMembers.length === 0
                    ? colorNotPresent("only you")
                    : presentValue(coauthors)
                )}`
              },
              {
                action: CommitNow,
                value: `6. Commit now              ${Caf.toString(
                  __webpack_require__(/*! colors */ 35).grey(getGitCommitMessage(state))
                )}`
              },
              { key: "abort", value: "0. Abort / quit" }
            ])
          })
          .then(({ action }) =>
            action != null
              ? Promise.then(() => action(state))
                  .then(saveState)
                  .then(ActionMenu)
              : undefined
          );
      };
      saveState = function(state) {
        let message, type, coauthors, story;
        if (state) {
          userConfig.saveCommitOptionsForProject(
            (({ message, type, coauthors, story } = state),
            { message, type, coauthors, story })
          );
        }
        return state;
      };
      fillInMissingState = function(state) {
        return Promise.resolve(state)
          .then(state =>
            state.status.staged.length === 0 ? EditGitStage(state) : state
          )
          .then(state => (!state.story ? StoryMenu(state) : state))
          .then(state =>
            !present(state.type) ? SelectCommitType(state) : state
          )
          .then(state =>
            !present(state.message) ? EditCommitMessage(state) : state
          );
      };
      validateStory = function(state) {
        let story, stories, storyId;
        story = state.story;
        stories = state.stories;
        if ((storyId = Caf.exists(story) && story.id)) {
          if (
            !(story = Caf.find(stories, null, story => story.id === storyId))
          ) {
            log.warn(
              merge({ message: "Invalid story or storyId", story, storyId })
            );
          }
          state.story = story;
        }
        return state;
      };
      return {
        description: "interactive commit2",
        run: function(options) {
          let message, coauthors, type, storyId;
          return Promise.deepAll(
            merge(
              userConfig.commitOptionsForProject,
              (({ message, coauthors, type, storyId } = options),
              { message, coauthors, type, storyId }),
              {
                status: __webpack_require__(/*! ../Git */ 34).status.then(normalizeGitStatus),
                stories: tracker.stories,
                members: tracker.members,
                myAccount: tracker.myAccount,
                options
              }
            )
          )
            .then(validateStory)
            .then(fillInMissingState)
            .then(saveState)
            .then(ActionMenu);
        }
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 56 */
/*!*****************************************************!*\
  !*** ./source/GitGenUi/Commands/CommitLib/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// generated by Neptune Namespaces v4.x.x
// file: GitGenUi/Commands/CommitLib/index.js

(module.exports = __webpack_require__(/*! ./namespace */ 9))

.addModules({
  EditCommitMessage: __webpack_require__(/*! ./EditCommitMessage */ 57),
  EditGitStage:      __webpack_require__(/*! ./EditGitStage */ 60),
  SelectCoauthors:   __webpack_require__(/*! ./SelectCoauthors */ 61),
  SelectCommitType:  __webpack_require__(/*! ./SelectCommitType */ 62),
  StoryMenu:         __webpack_require__(/*! ./StoryMenu */ 63)
});

/***/ }),
/* 57 */
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
    [global, __webpack_require__(/*! ../StandardImport */ 46)],
    merge => {
      return function(state) {
        return __webpack_require__(/*! ../../PromptFor */ 58)
          .input({ message: "Enter your git-commit message:" })
          .then(message => merge(state, { message }));
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 58 */
/*!********************************************!*\
  !*** ./source/GitGenUi/PromptFor/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// generated by Neptune Namespaces v4.x.x
// file: GitGenUi/PromptFor/index.js

(module.exports = __webpack_require__(/*! ./namespace */ 11))
.includeInNamespace(__webpack_require__(/*! ./PromptFor */ 59))
;

/***/ }),
/* 59 */
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
      __webpack_require__(/*! art-class-system */ 19),
      __webpack_require__(/*! ../Lib */ 20)
    ],
    (present, Error, merge, autocompleteFromStrings) => {
      let inquire, Core;
      __webpack_require__(/*! inquirer */ 48).registerPrompt(
        "autocomplete",
        __webpack_require__(/*! inquirer-autocomplete-prompt */ 49)
      );
      __webpack_require__(/*! inquirer */ 48).registerPrompt(
        "checkbox-plus",
        __webpack_require__(/*! inquirer-checkbox-plus-prompt */ 50)
      );
      inquire = function(options) {
        if (present(options.name)) {
          throw new Error(
            "no need to specify 'name' - just your value is returned w/o a wrapping object"
          );
        }
        return __webpack_require__(/*! inquirer */ 48)
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
/* 60 */
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
    [global, __webpack_require__(/*! ../StandardImport */ 46)],
    merge => {
      return function(state) {
        return __webpack_require__(/*! ../../Widgets */ 51)
          .InteractiveAdd()
          .then(() => __webpack_require__(/*! ../../Git */ 34).status)
          .then(status => merge(state, { status }));
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 61 */
/*!****************************************************************!*\
  !*** ./source/GitGenUi/Commands/CommitLib/SelectCoauthors.caf ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["log", "process"],
    [global, __webpack_require__(/*! ../StandardImport */ 46)],
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
          ? __webpack_require__(/*! ../../PromptFor */ 58)
              .selectList({
                prompt: "Who did you coauthor this commit with?",
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
    [global, __webpack_require__(/*! ../StandardImport */ 46)],
    merge => {
      return function(state) {
        return __webpack_require__(/*! ../../PromptFor */ 58)
          .selectList({
            prompt: "Select action:",
            items: [
              {
                type: "wip",
                value:
                  "wip:               work-in-progress, possibly non-working, no version change (yet)"
              },
              {
                type: "patch/test",
                value:
                  "patch/test:        tests added, improved or fixed          version + 0.0.1"
              },
              {
                type: "patch/fix",
                value:
                  "patch/fix:         code fixed and passing tests            version + 0.0.1"
              },
              {
                type: "patch/improvement",
                value:
                  "patch/improvement: patch-sized feature improvement         version + 0.0.1"
              },
              {
                type: "patch/refactor",
                value:
                  "patch/refactor:    code quality improved                   version + 0.0.1"
              },
              {
                type: "patch/perf",
                value:
                  "patch/perf:        performance improved                    version + 0.0.1"
              },
              {
                type: "patch/constants",
                value:
                  "patch/constants:   strings / non-functional constants      version + 0.0.1"
              },
              {
                type: "patch/asset",
                value:
                  "patch/asset:       assets: images, fonts, etc...           version + 0.0.1"
              },
              {
                type: "patch/doc",
                value:
                  "patch/doc:         README/documentation/comments updated   version + 0.0.1"
              },
              {
                type: "patch/whitespace",
                value:
                  "patch/whitespace:  code formatting / non-functional change version + 0.0.1"
              },
              {
                type: "patch/other",
                value:
                  "patch/other:       other patch-level change or chore       version + 0.0.1"
              },
              {
                type: "minor/feature",
                value:
                  "minor/feature:     new feature added or extended           version + 0.1.0"
              },
              {
                type: "minor/depricate",
                value:
                  "minor/depricate:   feature depricated                      version + 0.1.0"
              },
              {
                type: "major/change",
                value:
                  "major/change:      breaking feature change                 version + 1.0.0"
              },
              {
                type: "major/removal",
                value:
                  "major/removal:     breaking feature removal                version + 1.0.0"
              }
            ]
          })
          .then(({ type }) => merge(state, { type }));
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 63 */
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
    [global, __webpack_require__(/*! ../StandardImport */ 46)],
    merge => {
      return function(state) {
        return __webpack_require__(/*! ../../GitGenUiPromptFor */ 64)
          .story(state.stories, "What story does this commit advance most?")
          .then(story => merge(state, { story }));
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 64 */
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
    [global, __webpack_require__(/*! ./StandardImport */ 18)],
    Promise => {
      let formatStory;
      formatStory = __webpack_require__(/*! ./Tracker */ 38).tracker.formatStory;
      return {
        story: (stories, prompt) =>
          Promise.then(() =>
            stories
              ? __webpack_require__(/*! ./PromptFor */ 58)
                  .selectList({
                    prompt: prompt != null ? prompt : "Select a story...",
                    items: Caf.array(
                      stories,
                      story => {
                        return { story, value: formatStory(story) };
                      },
                      null,
                      [{ value: "(none)", story: {} }]
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
      "userConfig",
      "colors"
    ],
    [
      global,
      __webpack_require__(/*! ./StandardImport */ 46),
      __webpack_require__(/*! ../InquirerPlus */ 47),
      __webpack_require__(/*! ../UserConfig */ 17),
      { colors: __webpack_require__(/*! colors */ 35) }
    ],
    (
      ask,
      InputQ,
      PasswordQ,
      clientFailureNotAuthorized,
      log,
      tracker,
      userConfig,
      colors
    ) => {
      return {
        description:
          "initialize ~/git-genui.config.js with your PivotalTracker information",
        run: function(options) {
          let _username;
          _username = null;
          return __webpack_require__(/*! ../Git */ 34)
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
                  return __webpack_require__(/*! ../Tracker */ 38)
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
                  userConfig.readyPromise.then(
                    () =>
                      (userConfig.accounts = {
                        pivotalTracker: { token },
                        git: { email: gitEmail }
                      })
                  )
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
        return __webpack_require__(/*! ../Tracker */ 38).tracker.openInBrowser();
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
  return (() => {
    return {
      description: "show the merged configurarion for git-genui",
      run: function() {
        return {
          userConfig: __webpack_require__(/*! ../UserConfig */ 17).userConfig,
          projectConfig: __webpack_require__(/*! ../ProjectConfig */ 37).projectConfig
        };
      }
    };
  })();
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
    [global, __webpack_require__(/*! ./StandardImport */ 46), __webpack_require__(/*! ../Widgets */ 51)],
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
    [global, __webpack_require__(/*! ./StandardImport */ 46), __webpack_require__(/*! ../InquirerPlus */ 47)],
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
                log(__webpack_require__(/*! colors */ 35).cyan("Stories already started:"));
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
        __webpack_require__(/*! ../Git */ 34).printStatus();
        return null;
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
    [global, __webpack_require__(/*! ./StandardImport */ 46), __webpack_require__(/*! ../InquirerPlus */ 47)],
    (log, tracker) => {
      return {
        description: "list all open stories",
        run: function(options) {
          __webpack_require__(/*! ../Tracker */ 38).tracker.stories.then(stories =>
            Caf.each2(stories, story =>
              log("  " + tracker.formatStory(story, true))
            )
          );
          return null;
        }
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 72 */
/*!**********************************************!*\
  !*** ./source/GitGenUi/Commands/Version.caf ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return {
    description: "show version",
    run: function() {
      return __webpack_require__(/*! ../../../package */ 7).version;
    }
  };
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 73 */
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
    [global, __webpack_require__(/*! ./StandardImport */ 46)],
    (log, Array, Object) => {
      return {
        description: "show which tracker account you are logged in with",
        run: function(options) {
          return __webpack_require__(/*! ../Tracker */ 38).tracker.myAccount.then(account =>
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
/* 74 */
/*!*********************************************************************************!*\
  !*** external "require('@art-suite/cli' /* ABC - not inlining fellow NPM *_/)" ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('@art-suite/cli' /* ABC - not inlining fellow NPM */);

/***/ })
/******/ ]);