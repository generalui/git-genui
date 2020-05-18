"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Promise", "present"],
    [global, require("../StandardImport")],
    (Promise, present) => {
      let fillInMissingState;
      return (fillInMissingState = function(state) {
        return Promise.resolve(state)
          .then(state =>
            state.status.staged.length === 0
              ? require("./EditGitStage")(state)
              : state
          )
          .then(state =>
            !present(state.message)
              ? require("./EditCommitMessage")(state)
              : state
          )
          .then(state => (!state.story ? require("./StoryMenu")(state) : state))
          .then(state =>
            !present(state.type) ? require("./SelectCommitType")(state) : state
          );
      });
    }
  );
});
