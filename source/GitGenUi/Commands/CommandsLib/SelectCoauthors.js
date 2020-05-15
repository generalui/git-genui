"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    return require("./Lib").updateStateWithPrompt("coauthors", function(state) {
      let myId, otherMembers, coauthors, base, temp;
      myId = Caf.exists((base = state.myAccount)) && base.id;
      otherMembers = Caf.array(
        state.members,
        null,
        member => member.id !== myId
      );
      return otherMembers.length > 0
        ? ((coauthors = undefined !== (temp = state.coauthors) ? temp : []),
          require("../../PromptFor")
            .selectList({
              multiselect: true,
              prompt: "Who did you coauthor this commit with?",
              items: Caf.array(otherMembers, ({ email, name }) => {
                return {
                  email,
                  selected: Caf.in(email, coauthors),
                  value: `${Caf.toString(name)} <${Caf.toString(email)}>`
                };
              })
            })
            .then(items => Caf.array(items, ({ email }) => email)))
        : state.coauthors;
    });
  })();
});
