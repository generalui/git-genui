"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "updateStateWithPrompt",
      "tracker",
      "presentValue",
      "Style",
      "projectConfig",
      "userConfig",
      "log",
      "Promise",
      "merge",
      "getEnv",
      "menuApp",
      "present",
      "compactFlatten",
      "repeat",
      "selectCommitFormat"
    ],
    [
      global,
      require("../StandardImport"),
      require("./Lib"),
      {
        Style: require("../../Style"),
        selectCommitFormat: require("./SelectCommitFormat")
      }
    ],
    (
      updateStateWithPrompt,
      tracker,
      presentValue,
      Style,
      projectConfig,
      userConfig,
      log,
      Promise,
      merge,
      getEnv,
      menuApp,
      present,
      compactFlatten,
      repeat,
      selectCommitFormat
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
                  Style.grey(
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
            projectConfig.mergeTrackerWith({
              projectId,
              name: require("../../Tracker").tracker.name
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
          .tap(email => userConfig.mergeAccountsWith({ git: { email } }));
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
              userConfig.mergeAccountsWith({ [trackerName]: { token } })
            )
            .tap(() => {})
            .tap(
              projectId =>
                (projectConfig.mergeTrackerWith = { name: trackerName })
            )
            .then(token =>
              tracker.myAccount.then(
                () => {
                  log(Style.green("Valid token."));
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
            userConfig.mergeAccountsWith({ [trackerName]: { token, email } })
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
            let trackerName, trackerAccount, base;
            return menuApp(
              {
                projects,
                projectId: require("../../Tracker").tracker.projectId,
                trackerName: (trackerName = require("../../Tracker").tracker
                  .name),
                trackerAccount: (trackerAccount =
                  userConfig.accounts[trackerName]),
                token: Caf.exists(trackerAccount) && trackerAccount.token,
                trackerEmail:
                  Caf.exists(trackerAccount) && trackerAccount.email,
                email:
                  Caf.exists((base = userConfig.accounts.git)) && base.email
              },
              state => {
                let projectId, token;
                projectId = state.projectId;
                token = state.token;
                return require("../../Tracker")
                  .tracker.myAccount.then(
                    me => {
                      if (present(prompt)) {
                        log(Style.green(prompt));
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
                  .then(me =>
                    require("../../PromptFor").menu(state, {
                      exitPrompt,
                      prompt: "Configure git-genui:",
                      items: state => {
                        let temp, base1;
                        return compactFlatten([
                          {
                            action: getTrackerToken,
                            label: "set PivotalTracker token via auth",
                            value: Caf.exists(me) && me.name
                          },
                          {
                            action: editTrackerToken,
                            label: "set PivotalTracker token manually",
                            value: repeat(
                              "x",
                              (temp = Caf.exists(token) && token.length) != null
                                ? temp
                                : 0
                            )
                          },
                          projectConfig.configFilePath
                            ? {
                                action: selectProject,
                                disabled: !(me != null),
                                label: "select tracker project",
                                value:
                                  me != null
                                    ? Caf.exists(
                                        (base1 = projects[state.projectId])
                                      ) && base1.name
                                    : "configure token first"
                              }
                            : undefined,
                          {
                            action: selectCommitFormat,
                            label: "select commit format",
                            value: projectConfig.commit.format
                          }
                        ]);
                      }
                    })
                  );
              }
            );
          });
      };
    }
  );
});
