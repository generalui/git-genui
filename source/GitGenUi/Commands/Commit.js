"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "compactFlatten",
      "present",
      "log",
      "getGitCommitMessage",
      "EditCommitMessage",
      "presentValue",
      "EditGitStage",
      "projectConfig",
      "StoryMenu",
      "stripAnsi",
      "tracker",
      "colorNotPresent",
      "SelectCommitType",
      "SelectCoauthors",
      "CommitNow",
      "ConfigureMenu",
      "Promise",
      "ignoreRejections",
      "merge",
      "saveState",
      "userConfig",
      "validateStory",
      "validateType",
      "fillInMissingState",
      "process"
    ],
    [
      global,
      require("./StandardImport"),
      require("../UserConfig"),
      require("./CommandsLib"),
      require("../ProjectConfig")
    ],
    (
      compactFlatten,
      present,
      log,
      getGitCommitMessage,
      EditCommitMessage,
      presentValue,
      EditGitStage,
      projectConfig,
      StoryMenu,
      stripAnsi,
      tracker,
      colorNotPresent,
      SelectCommitType,
      SelectCoauthors,
      CommitNow,
      ConfigureMenu,
      Promise,
      ignoreRejections,
      merge,
      saveState,
      userConfig,
      validateStory,
      validateType,
      fillInMissingState,
      process
    ) => {
      let ActionMenu;
      ActionMenu = function(state) {
        let status,
          stories,
          members,
          myAccount,
          message,
          type,
          story,
          coauthors,
          configure,
          otherMembers,
          staged,
          unstaged,
          untracked,
          statusColors,
          statusSummary;
        if (!state) {
          return;
        }
        status = state.status;
        stories = state.stories;
        members = state.members;
        myAccount = state.myAccount;
        message = state.message;
        type = state.type;
        story = state.story;
        coauthors = state.coauthors;
        configure = state =>
          ConfigureMenu({ exitPrompt: "back" })
            .then(() =>
              Promise.deepAll({
                stories: ignoreRejections(() => tracker.stories),
                members: ignoreRejections(() => tracker.members),
                myAccount: ignoreRejections(() => tracker.myAccount)
              })
            )
            .then(updates => merge(state, updates));
        otherMembers = Caf.array(
          members,
          null,
          member => member.id !== myAccount.id
        );
        ({ staged, unstaged, untracked } = status);
        statusColors = { staged: "green", unstaged: "red", untracked: "red" };
        statusSummary = compactFlatten(
          Caf.array(
            ["staged", "unstaged", "untracked"],
            statusCat =>
              require("colors")[statusColors[statusCat]](
                `${Caf.toString(status[statusCat].length)} ${Caf.toString(
                  statusCat
                )}`
              ),
            statusCat => {
              let base;
              return (
                (Caf.exists((base = status[statusCat])) && base.length) > 0
              );
            }
          )
        ).join(", ");
        if (present(message)) {
          log("Commit message preview:");
          log(
            "  " +
              require("colors")
                .grey(getGitCommitMessage(state))
                .replace(/\n/g, "\n  ")
          );
          log("");
        }
        return require("../PromptFor")
          .selectList({
            prompt: "Select action:",
            items: compactFlatten([
              {
                action: EditCommitMessage,
                value: `1. Edit message:           ${Caf.toString(
                  presentValue(message)
                )}`
              },
              {
                action: EditGitStage,
                value: `2. Edit staged files:      ${Caf.toString(
                  statusSummary
                )}`
              },
              myAccount && projectConfig.project
                ? {
                    action: StoryMenu,
                    value: `3. Select story:           ${Caf.toString(
                      presentValue(
                        Caf.exists(story) && story.id
                          ? stripAnsi(tracker.formatStory(story))
                          : undefined
                      )
                    )}`
                  }
                : {
                    action: configure,
                    value: `3. Select story:           ${Caf.toString(
                      colorNotPresent("configure tracker")
                    )}`
                  },
              {
                action: SelectCommitType,
                value: `4. Select type:            ${Caf.toString(
                  presentValue(type)
                )}`
              },
              myAccount
                ? {
                    action: SelectCoauthors,
                    value: `5. Change coauthors:       ${Caf.toString(
                      otherMembers.length === 0
                        ? colorNotPresent("only you on project")
                        : presentValue(
                            (Caf.exists(coauthors) && coauthors.length) > 0
                              ? coauthors
                              : undefined
                          )
                    )}`
                  }
                : {
                    action: configure,
                    value: `5. Change coauthors:       ${Caf.toString(
                      colorNotPresent("configure tracker")
                    )}`
                  },
              present(message)
                ? { action: CommitNow, value: "6. Commit now" }
                : undefined,
              {
                key: "abort",
                value:
                  "0. exit (current state will be saved, but no other actions will be taken)"
              }
            ])
          })
          .then(({ action }) =>
            action != null
              ? Promise.then(() => action(state))
                  .then(saveState)
                  .then(ActionMenu)
              : undefined
          );
      };
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
          let message, coauthors, type, storyId;
          return Promise.deepAll(
            merge(
              userConfig.commitOptionsForProject,
              (({ message, coauthors, type, storyId } = options),
              { message, coauthors, type, storyId }),
              {
                status: require("../Git").printStatus(),
                stories: ignoreRejections(() => tracker.stories),
                members: ignoreRejections(() => tracker.members),
                myAccount: ignoreRejections(() => tracker.myAccount),
                options
              }
            )
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
            .then(ActionMenu);
        }
      };
    }
  );
});
