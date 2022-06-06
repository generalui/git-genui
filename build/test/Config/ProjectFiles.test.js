"use strict"
let Caf = require('caffeine-script-runtime');
Caf.defMod(module, () => {let parentImports; return Caf.importInvoke(["Config"], parentImports = [global, require('../StandardImport')], (Config) => {return Caf.importInvoke(["chainedTest", "ProjectFiles", "assert"], [parentImports, Config], (chainedTest, ProjectFiles, assert) => {return chainedTest("start", function() {return ProjectFiles.init();}).tapTest("valid files", function() {assert.eq("git-genui", ProjectFiles.projectFolder); return assert.match(ProjectFiles.projectRoot, /\/git-genui$/);});});});});
//# sourceMappingURL=ProjectFiles.test.js.map
