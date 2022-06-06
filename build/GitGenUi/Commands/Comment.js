"use strict"
let Caf = require('caffeine-script-runtime');
Caf.defMod(module, () => {return Caf.importInvoke(["ensureTrackerConfigured", "log"], [global, require('./StandardImport'), require('./CommandsLib')], (ensureTrackerConfigured, log) => {return {description: "comment on a story", run: function(options) {return ensureTrackerConfigured().then(() => require('../Tracker').tracker.stories).then((stories) => require('../GitGenUiPromptFor').story(stories, "What story do you want to comment on?")).then((story) => story ? require('../PromptFor').input({message: "Comment:"}).then((comment) => require('../Tracker').tracker.createComment(story.id, comment)) : log("Canceled"));}};});});
//# sourceMappingURL=Comment.js.map
