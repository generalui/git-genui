"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Promise", "present", "getEnv", "log"],
    [global, require("./StandardImport")],
    (Promise, present, getEnv, log) => {
      let externalEditor;
      externalEditor = function (value) {
        return Promise.withCallback((callback) =>
          require("external-editor").editAsync(value, callback)
        );
      };
      return function (value) {
        let moreInfo;
        moreInfo =
          "More info: https://wiki.archlinux.org/index.php/Environment_variables";
        return (!present(getEnv().EDITOR)
          ? (log.warn(
              `No external editor set. For a full-screen editing experience, set the EDITOR environment variable to your editor of choice.\n  ${Caf.toString(
                moreInfo
              )}`
            ),
            require("../PromptFor")
              .input({ message: "Edit your commit body:", default: value })
              .tap((v) => log({ doneA: v })))
          : (log(
              `Opening external editor: ${Caf.toString(
                getEnv().EDITOR
              )}\n  (if this doesn't work, hit Control-C, then set the EDITOR environment variable to your editor of choice.)\n  ${Caf.toString(
                moreInfo
              )}`
            ),
            externalEditor(value))
        )
          .tap((v) => log({ doneB: v }))
          .then((newValue) => newValue.trim())
          .then((newValue) => (present(newValue) ? newValue : null));
      };
    }
  );
});
