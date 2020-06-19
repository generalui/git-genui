"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Promise", "Error", "log"],
    [global, require("./StandardImport"), require("colors")],
    (Promise, Error, log) => {
      let applyActions;
      return (applyActions = function(input, actionList, actions, options) {
        let resultPromise;
        resultPromise = Promise.then(() => input);
        Caf.each2(
          actionList,
          (actionName, index) =>
            (resultPromise = resultPromise.then(previousResult =>
              Promise.then(() => {
                let action;
                if (!(action = actions[actionName])) {
                  throw new Error(
                    `No action named ${Caf.toString(actionName)}`
                  );
                }
                if (!(Caf.exists(options) && options.quiet)) {
                  log(`apply action: ${Caf.toString(actionName)}`);
                }
                return action(previousResult);
              })
                .tap(result => log({ apply: { actionName, result } }))
                .catch(error => {
                  if (!(Caf.exists(options) && options.quiet)) {
                    log.error({
                      message: `Error in action ${Caf.toString(
                        actionName
                      )} (order = ${Caf.toString(index)} / ${Caf.toString(
                        actionList.length
                      )})`,
                      error
                    });
                  }
                  return previousResult;
                })
            ))
        );
        return resultPromise;
      });
    }
  );
});
