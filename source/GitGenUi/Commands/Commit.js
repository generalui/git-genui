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
      "CommitNow",
      "validateStory",
      "fillInMissingState",
      "saveState",
      "log",
      "process",
      "getInitialCommitState",
      "present",
      "brightGreen",
      "compactFlatten",
      "repeat",
      "getCommitMessage",
      "EditCommitMessage",
      "projectConfig",
      "StoryMenu",
      "stripAnsi",
      "colorNotPresent",
      "SelectCommitType",
      "SelectCoauthors",
      "presentValue",
      "EditGitStage",
      "openInExternalEditor"
    ],
    [
      global,
      require("./StandardImport"),
      require("./CommandsLib"),
      require("../Git"),
      require("../Style")
    ],
    (
      ConfigureMenu,
      Promise,
      ignoreRejections,
      tracker,
      merge,
      CommitNow,
      validateStory,
      fillInMissingState,
      saveState,
      log,
      process,
      getInitialCommitState,
      present,
      brightGreen,
      compactFlatten,
      repeat,
      getCommitMessage,
      EditCommitMessage,
      projectConfig,
      StoryMenu,
      stripAnsi,
      colorNotPresent,
      SelectCommitType,
      SelectCoauthors,
      presentValue,
      EditGitStage,
      openInExternalEditor
    ) => {
      let configure, getCommitAndSetStateAction, statusColors;
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
      getCommitAndSetStateAction = function(storyState) {
        return state => CommitNow(merge(state, { storyState }));
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
          return Promise.then(() => {})
            .then(() => require("../Git").remotes)
            .catch(({ message }) => {
              log.warn(
                `Must be run inside a git repository:\n  ${Caf.toString(
                  message
                )}`
              );
              return process.exit(1);
            })
            .then(() => getInitialCommitState(options))
            .then(validateStory)
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
                  let columns;
                  if (present(state.message)) {
                    columns = process.stdout.columns;
                    log("Commit message preview:");
                    log(
                      brightGreen.bold(
                        compactFlatten([
                          repeat("-", columns - 2),
                          brightGreen
                            .bold(getCommitMessage(state))
                            .replace(/\n/g, "\n  "),
                          repeat("-", columns - 2)
                        ]).join("\n")
                      )
                    );
                    log(" ");
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
                    coauthors,
                    breakingChange,
                    body;
                  myAccount = state.myAccount;
                  message = state.message;
                  story = state.story;
                  members = state.members;
                  statusSummary = state.statusSummary;
                  status = state.status;
                  type = state.type;
                  coauthors = state.coauthors;
                  breakingChange = state.breakingChange;
                  body = state.body;
                  return compactFlatten([
                    {
                      action: EditCommitMessage,
                      label: "Edit message",
                      value: message
                    },
                    myAccount && projectConfig.tracker
                      ? {
                          action: StoryMenu,
                          label: "Select story",
                          value:
                            Caf.exists(story) && story.id
                              ? stripAnsi(tracker.formatStory(story))
                              : undefined
                        }
                      : {
                          action: configure,
                          label: "Select story",
                          value: colorNotPresent("configure tracker")
                        },
                    {
                      action: SelectCommitType,
                      label: "Select type",
                      value: type
                    },
                    {
                      label: "Edit body",
                      value: body,
                      action: state =>
                        openInExternalEditor(body).then(body =>
                          merge(state, { body })
                        )
                    },
                    projectConfig.conventionalCommit
                      ? {
                          label: "Breaking changes",
                          value: breakingChange,
                          action: state =>
                            openInExternalEditor(
                              breakingChange
                            ).then(breakingChange =>
                              merge(state, { breakingChange })
                            )
                        }
                      : undefined,
                    myAccount
                      ? {
                          action: SelectCoauthors,
                          label: "Change coauthors",
                          value:
                            (Caf.exists(members) && members.length) === 0
                              ? colorNotPresent("only you on project")
                              : presentValue(
                                  (Caf.exists(coauthors) && coauthors.length) >
                                    0
                                    ? coauthors
                                    : undefined
                                )
                        }
                      : {
                          action: configure,
                          label: "Change coauthors",
                          value: colorNotPresent("configure tracker")
                        },
                    {
                      action: EditGitStage,
                      label: "Edit staged files",
                      value: compactFlatten(
                        Caf.array(
                          ["staged", "unstaged", "untracked"],
                          statusCat =>
                            require("../Style")[statusColors[statusCat]](
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
                    },
                    present(message)
                      ? [
                          {
                            exit: true,
                            action: CommitNow,
                            shortcut: "C",
                            value: "Commit and exit"
                          },
                          Caf.exists(story) && story.id
                            ? {
                                exit: true,
                                action: getCommitAndSetStateAction("finished"),
                                shortcut: "F",
                                value: "Commit, Finish and exit"
                              }
                            : undefined,
                          Caf.exists(story) && story.id
                            ? {
                                exit: true,
                                action: getCommitAndSetStateAction("delivered"),
                                shortcut: "D",
                                value: "Commit, Deliver and exit"
                              }
                            : undefined
                        ]
                      : undefined
                  ]);
                },
                postprocessState: saveState
              })
            )
            .then(() => null);
        }
      };
    }
  );
});
