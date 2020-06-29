"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "compactFlattenAll",
      "userConfig",
      "Promise",
      "merge",
      "tracker",
      "ignoreRejections",
      "projectConfig",
      "objectWithout"
    ],
    [
      global,
      require("./StandardImport"),
      { ignoreRejections: require("./ignoreRejections") }
    ],
    (
      compactFlattenAll,
      userConfig,
      Promise,
      merge,
      tracker,
      ignoreRejections,
      projectConfig,
      objectWithout
    ) => {
      let extractSavableState;
      return {
        getCommitMessage: function({
          type,
          story,
          message,
          coauthors,
          storyState,
          breakingChange,
          body
        }) {
          return compactFlattenAll(
            type != null ? type : "(type)",
            ": ",
            Caf.exists(story) && story.id
              ? `[#${Caf.toString(story.id)}]${Caf.toString(
                  storyState && storyState !== story.status
                    ? ` (${Caf.toString(storyState)})`
                    : undefined
                )} `
              : undefined,
            message != null ? message : "(message)",
            body
              ? `\n\n${Caf.toString(body.replace(/\n\n\n+/g, "\n\n"))}`
              : undefined,
            breakingChange
              ? `\n\nBREAKING CHANGE: ${Caf.toString(breakingChange)}`
              : undefined,
            coauthors
              ? "\n\n\n" +
                  Caf.array(
                    coauthors,
                    coauthor => `Coauthored-by: ${Caf.toString(coauthor)}`
                  ).join("\n")
              : undefined
          ).join("");
        },
        getCommitComment: function(state) {
          let generatedCommitMessage,
            storyState,
            status,
            commit,
            remote,
            temp,
            temp1;
          generatedCommitMessage = state.generatedCommitMessage;
          storyState = state.storyState;
          status = state.status;
          commit = state.commit;
          remote = state.remote;
          return `story ${Caf.toString(
            storyState || "progressed"
          )} with commit: \`${Caf.toString(commit)}\`, branch: \`${Caf.toString(
            (temp = Caf.exists(status) && status.current) != null
              ? temp
              : "unknown"
          )}\`, remote: \`${Caf.toString(
            (temp1 = Caf.exists(remote) && remote.refs.fetch) != null
              ? temp1
              : "none"
          )}\`, message:\n> ${Caf.toString(
            generatedCommitMessage
          )}\n(auto-comment by git-genui v${Caf.toString(
            require("../../../package").version
          )})`;
        },
        extractSavableState: (extractSavableState = function(state) {
          let message, type, coauthors, story, breakingChange, body, footers;
          return (
            ({
              message,
              type,
              coauthors,
              story,
              breakingChange,
              body,
              footers
            } = state),
            { message, type, coauthors, story, breakingChange, body, footers }
          );
        }),
        saveState: function(state) {
          if (state) {
            userConfig.saveCommitOptionsForProject(extractSavableState(state));
          }
          return state;
        },
        getInitialCommitState: function(options = {}) {
          return Promise.deepAll(
            merge(userConfig.commitOptionsForProject, {
              status: options.quiet
                ? require("../Git").status
                : require("../Git").printStatus(),
              stories:
                tracker.configured && ignoreRejections(() => tracker.stories),
              members:
                tracker.configured && ignoreRejections(() => tracker.members),
              myAccount:
                tracker.configured && ignoreRejections(() => tracker.myAccount),
              project:
                tracker.configured && ignoreRejections(() => tracker.project),
              remote: require("../Git").aRemote,
              options
            })
          ).then(state =>
            !projectConfig.conventionalCommit
              ? objectWithout(state, "breakingChange")
              : state
          );
        }
      };
    }
  );
});
