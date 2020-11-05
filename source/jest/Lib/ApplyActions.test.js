"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["describe", "test", "Error", "timeout", "assert", "applyActions"],
    [global, require("../StandardImport")],
    (describe, test, Error, timeout, assert, applyActions) => {
      return describe("applyActions", function () {
        let actions;
        actions = {
          addOne: (a) => a + 1,
          throwError: () =>
            (() => {
              throw new Error("OhNoes!");
            })(),
          double: (a) => a * 2,
          timeout: (a) => timeout(1, () => a),
          div3: (a) => a / 3,
        };
        test("undefined actions", () =>
          assert.resolved.eq(
            applyActions(1, undefined, undefined, { quiet: true }),
            { result: 1, actionsApplied: {} }
          ));
        test("0 actions", () =>
          assert.resolved.eq(applyActions(1, []), {
            result: 1,
            actionsApplied: {},
          }));
        test("1 action", () =>
          assert.resolved.eq(
            applyActions(1, ["addOne"], actions, { quiet: true }),
            { result: 2, actionsApplied: { succeeded: ["addOne"] } }
          ));
        test("3 actions", () =>
          assert.resolved.eq(
            applyActions(1, ["addOne", "double", "div3"], actions, {
              quiet: true,
            }),
            {
              result: 4 / 3,
              actionsApplied: { succeeded: ["addOne", "double", "div3"] },
            }
          ));
        test("Promise action", () =>
          assert.resolved.eq(
            applyActions(1, ["timeout"], actions, { quiet: true }),
            { result: 1, actionsApplied: { succeeded: ["timeout"] } }
          ));
        return test("error doesn't stop next action", () =>
          assert.resolved.eq(
            applyActions(1, ["throwError", "double"], actions, { quiet: true }),
            {
              result: 2,
              actionsApplied: { succeeded: ["double"], failed: ["throwError"] },
            }
          ));
      });
    }
  );
});
