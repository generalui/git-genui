"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Promise", "Error", "log", "grey"],
    [global, require("./StandardImport"), require("../Style")],
    (Promise, Error, log, grey) => {
      let applyActions;
      return (applyActions = function (input, actionList, actions, options) {
        let resultPromise, actionsApplied;
        resultPromise = Promise.then(() => input);
        actionsApplied = { succeeded: [], failed: [] };
        Caf.each2(
          actionList,
          (actionName, index) =>
            (resultPromise = resultPromise.then((previousResult) =>
              Promise.then(() => {
                let action;
                if (!(action = actions[actionName])) {
                  throw new Error(
                    `No action named ${Caf.toString(actionName)}`
                  );
                }
                if (!(Caf.exists(options) && options.quiet)) {
                  log(grey(`apply action: ${Caf.toString(actionName)}`));
                }
                return action(previousResult);
              })
                .tap(() => actionsApplied.succeeded.push(actionName))
                .tapCatch(() => actionsApplied.failed.push(actionName))
                .catch((error) => {
                  if (!(Caf.exists(options) && options.quiet)) {
                    log.error({
                      message: `Error in action ${Caf.toString(
                        actionName
                      )} (order = ${Caf.toString(index + 1)} / ${Caf.toString(
                        actionList.length
                      )})`,
                      error,
                    });
                  }
                  return previousResult;
                })
            ))
        );
        return resultPromise.then((result) => {
          return {
            result,
            actionsApplied: Caf.object(
              actionsApplied,
              null,
              (v) => v.length > 0
            ),
          };
        });
      });
    }
  );
});
