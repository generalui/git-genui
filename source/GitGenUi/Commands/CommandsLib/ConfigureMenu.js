"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "updateStateWithPrompt",
      "tracker",
      "presentValue",
      "colors",
      "projectConfig",
      "userConfig",
      "log",
      "Promise",
      "merge",
      "getEnv",
      "menuApp",
      "present",
      "compactFlatten",
      "repeat"
    ],
    [
      global,
      require("../StandardImport"),
      require("../../UserConfig"),
      require("../../ProjectConfig"),
      require("./CommandMenuLib"),
      require("./Lib"),
      { colors: require("colors") }
    ],
    (
      updateStateWithPrompt,
      tracker,
      presentValue,
      colors,
      projectConfig,
      userConfig,
      log,
      Promise,
      merge,
      getEnv,
      menuApp,
      present,
      compactFlatten,
      repeat
    ) => {
      let getProjects,
        selectProject,
        editGitEmail,
        editTrackerToken,
        getTrackerToken;
      getProjects = function() {
        return tracker.projects.then(projects =>
          Caf.object(projects, null, null, null, v => v.id)
        );
      };
      selectProject = updateStateWithPrompt("projectId", function({
        projectId,
        projects
      }) {
        return require("../../PromptFor")
          .selectList({
            prompt: "Select project:",
            items: Caf.array(projects, ({ id, name, account_id }) => {
              return {
                projectId: id,
                default: id === projectId,
                value: `${Caf.toString(presentValue(name))} ${Caf.toString(
                  colors.grey(
                    `(id: ${Caf.toString(id)}, account-id: ${Caf.toString(
                      account_id
                    )})`
                  )
                )}`
              };
            })
          })
          .then(({ projectId }) => projectId)
          .tap(projectId =>
            projectConfig.deepMergeInto({
              project: {
                tracker: {
                  projectId,
                  name: require("../../Tracker").tracker.name
                }
              }
            })
          );
      });
      editGitEmail = updateStateWithPrompt("email", function({
        email,
        trackerEmail
      }) {
        return require("../../PromptFor")
          .input({
            message: "Enter your git email:",
            default: email != null ? email : trackerEmail
          })
          .tap(email =>
            userConfig.deepMergeInto({ accounts: { git: { email } } })
          );
      });
      editTrackerToken = function(state) {
        let trackerName, eTT;
        trackerName = state.trackerName;
        eTT = () =>
          require("../../PromptFor")
            .password({
              message: `Enter your ${Caf.toString(trackerName)} token:`
            })
            .tap(token =>
              userConfig.deepMergeInto({
                accounts: { [trackerName]: { token } }
              })
            )
            .tap(() => {})
            .tap(projectId =>
              projectConfig.deepMergeInto({
                project: { tracker: { name: trackerName } }
              })
            )
            .then(token =>
              tracker.myAccount.then(
                () => {
                  log(colors.green("Valid token."));
                  return token;
                },
                error => {
                  log(error);
                  log.warn("Invalid token.");
                  return eTT();
                }
              )
            );
        return eTT()
          .then(token =>
            Promise.deepAll({
              token,
              myAccount: tracker.myAccount,
              projects: getProjects()
            })
          )
          .then(({ token, myAccount, projects }) =>
            merge(state, { token, projects, trackerEmail: myAccount.email })
          );
      };
      getTrackerToken = function(state) {
        let email, trackerName, trackerEmail, temp;
        email = state.email;
        trackerName = state.trackerName;
        trackerEmail = state.trackerEmail;
        return require("./Auth")({
          email:
            (temp = trackerEmail != null ? trackerEmail : email) != null
              ? temp
              : getEnv().USER,
          trackerName
        })
          .tap(({ token, email }) =>
            userConfig.deepMergeInto({
              accounts: { [trackerName]: { token, email } }
            })
          )
          .then(({ token, email }) =>
            getProjects().then(projects =>
              merge({ trackerEmail: email }, state, { token, projects })
            )
          )
          .catch(() => {
            log.warn("Auth failed.");
            return state;
          });
      };
      return function(options) {
        let exitPrompt, prompt;
        if (Caf.exists(options)) {
          exitPrompt = options.exitPrompt;
          prompt = options.prompt;
        }
        return getProjects()
          .catch(() => log.warn("Tracker token is invalid."))
          .then(projects => {
            let trackerName, trackerAccount, base, base1, base2;
            return menuApp(
              {
                projects,
                projectId: require("../../Tracker").tracker.projectId,
                trackerName: (trackerName = require("../../Tracker").tracker
                  .name),
                trackerAccount: (trackerAccount =
                  Caf.exists((base = userConfig.accounts)) &&
                  base[trackerName]),
                token: Caf.exists(trackerAccount) && trackerAccount.token,
                trackerEmail:
                  Caf.exists(trackerAccount) && trackerAccount.email,
                email:
                  Caf.exists((base1 = userConfig.accounts)) &&
                  Caf.exists((base2 = base1.git)) && base2.email
              },
              ({ projects, email, token, projectId }) =>
                require("../../Tracker")
                  .tracker.myAccount.then(
                    me => {
                      if (present(prompt)) {
                        log(colors.green(prompt));
                      }
                      return me;
                    },
                    () => {
                      log.warn(
                        `Please configure your ${Caf.toString(
                          trackerName
                        )} token.`
                      );
                      return null;
                    }
                  )
                  .then(me => {
                    let temp, base3;
                    return require("../../PromptFor").selectList({
                      prompt: "Select action:",
                      items: compactFlatten([
                        {
                          action: getTrackerToken,
                          value: `1. get PivotalTracker token via auth  ${Caf.toString(
                            presentValue(Caf.exists(me) && me.name)
                          )}`
                        },
                        {
                          action: editTrackerToken,
                          value: `2. set PivotalTracker token manually  ${Caf.toString(
                            presentValue(
                              repeat(
                                "x",
                                (temp = Caf.exists(token) && token.length) !=
                                  null
                                  ? temp
                                  : 0
                              )
                            )
                          )}`
                        },
                        projectConfig.configFilePath
                          ? me != null
                            ? {
                                action: selectProject,
                                value: `3. select tracker project             ${Caf.toString(
                                  presentValue(
                                    Caf.exists((base3 = projects[projectId])) &&
                                      base3.name
                                  )
                                )}`
                              }
                            : {
                                action: state => state,
                                value: colors.grey(
                                  "3. select tracker project             configure token first"
                                )
                              }
                          : undefined,
                        {
                          value: `0. ${Caf.toString(
                            exitPrompt != null ? exitPrompt : "exit"
                          )}`
                        }
                      ])
                    });
                  })
            );
          });
      };
    }
  );
});
