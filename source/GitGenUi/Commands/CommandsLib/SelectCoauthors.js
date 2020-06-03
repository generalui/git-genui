"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    return require("./Lib").updateStateWithPrompt("coauthors", function(state) {
      let myId, coauthors, base, base1, temp;
      myId = Caf.exists((base = state.myAccount)) && base.id;
      return (Caf.exists((base1 = state.members)) && base1.length) > 0
        ? ((coauthors = undefined !== (temp = state.coauthors) ? temp : []),
          require("../../PromptFor")
            .selectList({
              multiselect: true,
              prompt: "Who did you coauthor this commit with?",
              items: Caf.array(state.members, ({ email, name }) => {
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
