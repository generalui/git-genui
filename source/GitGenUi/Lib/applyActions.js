"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Promise", "Error", "log", "grey", "compactFlattenAll", "merge"],
    [global, require("./StandardImport"), require("colors")],
    (Promise, Error, log, grey, compactFlattenAll, merge) => {
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
                  log(grey(`apply action: ${Caf.toString(actionName)}`));
                }
                return action(previousResult);
              })
                .then(result => {
                  let info, base, base1;
                  info = {
                    succeeded: compactFlattenAll(
                      Caf.exists((base = result.actionsApplied)) &&
                        base.succeeded,
                      actionName
                    ),
                    failed: compactFlattenAll(
                      Caf.exists((base1 = result.actionsApplied)) &&
                        base1.failed,
                      actionName
                    )
                  };
                  return merge(result, {
                    actionsApplied: Caf.object(info, null, v => v.length > 0)
                  });
                })
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
