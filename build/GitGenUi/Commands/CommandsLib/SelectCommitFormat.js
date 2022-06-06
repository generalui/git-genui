"use strict"
let Caf = require('caffeine-script-runtime');
Caf.defMod(module, () => {return Caf.importInvoke(["projectConfig"], [global, require('../StandardImport')], (projectConfig) => {let selectCommitFormat; return selectCommitFormat = function() {return require('../../PromptFor').item({message: "Select your commit format", items: [{format: "standard", value: "standard:           Commit types are grouped into patch, minor and major changes"}, {format: "conventionalCommit", value: "conventionalCommit: Commit using the www.ConventionalCommits.org standard"}], default: {format: projectConfig.commit.format}}).then(({format}) => projectConfig.mergeCommitWith({format}));};});});
//# sourceMappingURL=SelectCommitFormat.js.map
