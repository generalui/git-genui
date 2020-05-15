"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Promise", "log", "merge", "clientFailureNotAuthorized", "Error"],
    [global, require("../StandardImport")],
    (Promise, log, merge, clientFailureNotAuthorized, Error) => {
      let auth;
      return (auth = function({ email, username, trackerName }) {
        return Promise.then(() =>
          require("../../PromptFor").input({
            default: email != null ? email : username,
            message: `What is your ${Caf.toString(
              trackerName
            )} email or username?`
          })
        ).then(username =>
          require("../../PromptFor")
            .password({
              default: email,
              message: `What is your ${Caf.toString(
                trackerName
              )} password? (used only to fetch API token)`
            })
            .then(password =>
              require("../../Tracker")
                .tracker.authenticate({ password, username })
                .tap(({ id, name, initials, username }) =>
                  log({ success: merge({ id, name, initials, username }) })
                )
                .catch(error => {
                  if (error.status === clientFailureNotAuthorized) {
                    log.warn("Invalid password. Please try again.");
                  } else {
                    log.error({ message: error.message, status: error.status });
                  }
                  return (() => {
                    throw Error;
                  })();
                })
            )
        );
      });
    }
  );
});
