"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["log", "process"],
    [global, require("../StandardImport")],
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
          ? require("../../PromptFor")
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
