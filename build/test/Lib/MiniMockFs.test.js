"use strict"
let Caf = require('caffeine-script-runtime');
Caf.defMod(module, () => {return Caf.importInvoke(["chainedTest", "createMockFs", "assert", "merge"], [global, require('../StandardImport'), require('../../GitGenUi/Lib/MiniMockFs')], (chainedTest, createMockFs, assert, merge) => {let initialFiles; initialFiles = {a: "hi"}; return chainedTest("createMockFs", function() {return createMockFs(initialFiles);}).softTapTest("getTree", function(mockFs) {return assert.eq(mockFs.getTree(), initialFiles);}).tapTest("writeFile", function(mockFs) {return mockFs.writeFile("foo", "bar-body");}).softTapTest("getTree after write", function(mockFs) {return assert.eq(mockFs.getTree(), merge(initialFiles, {foo: "bar-body"}));}).tapTest("readFile", function(mockFs) {return mockFs.readFile("foo").then((file) => assert.eq(file, "bar-body"));}).tapTest("readFile rejects", function(mockFs) {return assert.rejects(mockFs.readFile("bar"));}).tapTest("exists", function(mockFs) {return mockFs.exists("foo").then(assert.true).then(() => mockFs.exists("bar")).then(assert.false);}).tapTest("write pathed file", function(mockFs) {return mockFs.writeFile("root/user/alien", "alien-body");}).softTapTest("getTree", function(mockFs) {return assert.eq(mockFs.getTree(), {a: "hi", foo: "bar-body", root: {user: {alien: "alien-body"}}});}).softTapTest("readFile pathed", function(mockFs) {return mockFs.readFile("root/user/alien").then((contents) => assert.eq(contents, "alien-body"));}).softTapTest("exists pathed - when true", function(mockFs) {return mockFs.exists("root/user/alien").then(assert.true);}).softTapTest("exists pathed - when false", function(mockFs) {return mockFs.exists("root/user/alien2").then(assert.false);});});});
//# sourceMappingURL=MiniMockFs.test.js.map
