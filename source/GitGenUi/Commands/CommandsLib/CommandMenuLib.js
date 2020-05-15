"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Promise", "merge"],
    [global, require("../StandardImport"), require("../../UserConfig")],
    (Promise, merge) => {
      let updateStateWithPrompt, menuApp;
      return {
        updateStateWithPrompt: (updateStateWithPrompt = function(
          statePropName,
          promptF
        ) {
          return state =>
            Promise.then(() => promptF(state))
              .then(value =>
                value === undefined ? state[statePropName] : value
              )
              .then(value => merge(state, { [statePropName]: value }));
        }),
        menuApp: (menuApp = function(state, menuF) {
          return menuF(state).then(({ action }) =>
            action != null
              ? Promise.then(() => action(state)).then(newState =>
                  menuApp(newState != null ? newState : state, menuF)
                )
              : undefined
          );
        })
      };
    }
  );
});
