"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "ConfigureMenu",
      "Promise",
      "ignoreRejections",
      "tracker",
      "merge",
      "userConfig",
      "validateStory",
      "validateType",
      "fillInMissingState",
      "saveState",
      "log",
      "process",
      "present",
      "getGitCommitMessage",
      "compactFlatten",
      "EditCommitMessage",
      "presentValue",
      "projectConfig",
      "StoryMenu",
      "stripAnsi",
      "colorNotPresent",
      "SelectCommitType",
      "SelectCoauthors",
      "EditGitStage",
      "CommitNow"
    ],
    [
      global,
      require("./StandardImport"),
      require("../UserConfig"),
      require("./CommandsLib"),
      require("../ProjectConfig"),
      require("../Git")
    ],
    (
      ConfigureMenu,
      Promise,
      ignoreRejections,
      tracker,
      merge,
      userConfig,
      validateStory,
      validateType,
      fillInMissingState,
      saveState,
      log,
      process,
      present,
      getGitCommitMessage,
      compactFlatten,
      EditCommitMessage,
      presentValue,
      projectConfig,
      StoryMenu,
      stripAnsi,
      colorNotPresent,
      SelectCommitType,
      SelectCoauthors,
      EditGitStage,
      CommitNow
    ) => {
      let configure, statusColors;
      configure = function(state) {
        return ConfigureMenu({ exitPrompt: "back" })
          .then(() =>
            Promise.deepAll({
              stories: ignoreRejections(() => tracker.stories),
              members: ignoreRejections(() => tracker.members),
              myAccount: ignoreRejections(() => tracker.myAccount)
            })
          )
          .then(updates => merge(state, updates));
      };
      statusColors = { staged: "green", unstaged: "red", untracked: "red" };
      return {
        description:
          "Commit is the main command for git-genui. The primary goal is to generate a well-formatted git-commit message. Commit will prompt for configuration of needed, as well as giving an opportunity to stage or unstage files for the commit. Alternatively, you can stage files for your commit before calling git-genui-commit.\n\nAll commandline options are optional. The are provided to streamling the commit process if needed.",
        options: {
          message: [
            "message",
            "entier your git-commit message on the command-line"
          ],
          coauthors: [
            "authors",
            "one more more coauthor emails (separated by spaces)"
          ],
          type: [
            "type",
            "Commit type string. Should be of the form: [major, minor or patch]/short-word"
          ],
          "story-id": [
            "id",
            "Input the tracker story id directly on the command-line. It will be validated against existing stories."
          ]
        },
        run: function(options) {
          return Promise.deepAll(
            merge(userConfig.commitOptionsForProject, {
              status: require("../Git").printStatus(),
              stories: ignoreRejections(() => tracker.stories),
              members: ignoreRejections(() => tracker.members),
              myAccount: ignoreRejections(() => tracker.myAccount),
              project: ignoreRejections(() => tracker.project),
              options
            })
          )
            .then(validateStory)
            .then(validateType)
            .tap(({ status }) =>
              status.staged.length +
                status.unstaged.length +
                status.untracked.length ===
              0
                ? (log.warn("No local changes to commit."), process.exit(1))
                : undefined
            )
            .then(fillInMissingState)
            .then(saveState)
            .then(state =>
              require("../PromptFor").menu(state, {
                preprocessState: state => {
                  if (present(state.message)) {
                    log("Commit message preview:");
                    log(
                      "  " +
                        require("colors")
                          .bold(
                            require("colors").brightGreen(
                              getGitCommitMessage(state)
                            )
                          )
                          .replace(/\n/g, "\n  ")
                    );
                    log("");
                  }
                  return state;
                },
                items: state => {
                  let myAccount,
                    message,
                    story,
                    members,
                    statusSummary,
                    status,
                    type,
                    coauthors;
                  myAccount = state.myAccount;
                  message = state.message;
                  story = state.story;
                  members = state.members;
                  statusSummary = state.statusSummary;
                  status = state.status;
                  type = state.type;
                  coauthors = state.coauthors;
                  return compactFlatten([
                    {
                      action: EditCommitMessage,
                      value: `Edit message:           ${Caf.toString(
                        presentValue(message)
                      )}`
                    },
                    myAccount && projectConfig.project
                      ? {
                          action: StoryMenu,
                          value: `Select story:           ${Caf.toString(
                            presentValue(
                              Caf.exists(story) && story.id
                                ? stripAnsi(tracker.formatStory(story))
                                : undefined
                            )
                          )}`
                        }
                      : {
                          action: configure,
                          value: `Select story:           ${Caf.toString(
                            colorNotPresent("configure tracker")
                          )}`
                        },
                    {
                      action: SelectCommitType,
                      value: `Select type:            ${Caf.toString(
                        presentValue(type)
                      )}`
                    },
                    myAccount
                      ? {
                          action: SelectCoauthors,
                          value: `Change coauthors:       ${Caf.toString(
                            (Caf.exists(members) && members.length) === 0
                              ? colorNotPresent("only you on project")
                              : presentValue(
                                  (Caf.exists(coauthors) && coauthors.length) >
                                    0
                                    ? coauthors
                                    : undefined
                                )
                          )}`
                        }
                      : {
                          action: configure,
                          value: `Change coauthors:       ${Caf.toString(
                            colorNotPresent("configure tracker")
                          )}`
                        },
                    {
                      action: EditGitStage,
                      value: `Edit staged files:      ${Caf.toString(
                        compactFlatten(
                          Caf.array(
                            ["staged", "unstaged", "untracked"],
                            statusCat =>
                              require("colors")[statusColors[statusCat]](
                                `${Caf.toString(
                                  status[statusCat].length
                                )} ${Caf.toString(statusCat)}`
                              ),
                            statusCat => {
                              let base;
                              return (
                                (Caf.exists((base = status[statusCat])) &&
                                  base.length) > 0
                              );
                            }
                          )
                        ).join(", ")
                      )}`
                    },
                    present(message)
                      ? { action: CommitNow, value: "Commit now" }
                      : undefined
                  ]);
                },
                postprocessState: saveState
              })
            );
        }
      };
    }
  );
});
