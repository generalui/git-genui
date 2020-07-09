"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "merge",
      "compactFlattenAll",
      "present",
      "userConfig",
      "Promise",
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
      merge,
      compactFlattenAll,
      present,
      userConfig,
      Promise,
      tracker,
      ignoreRejections,
      projectConfig,
      objectWithout
    ) => {
      let commitParser, extractSavableState;
      commitParser = new (require("./CommitParser"))();
      return {
        parseCommitMessage: function(message) {
          let subject,
            type,
            scope,
            trackerState,
            trackerId,
            body,
            semanticVersion,
            footer;
          ({
            subject,
            type,
            scope,
            trackerState,
            trackerId,
            body,
            semanticVersion,
            footer
          } = commitParser.parse(message));
          return merge({
            type:
              semanticVersion != null
                ? type != null
                  ? `${Caf.toString(semanticVersion)}/${Caf.toString(type)}`
                  : semanticVersion
                : type,
            scope,
            message: subject,
            storyState: trackerState,
            storyId: trackerId,
            body,
            coauthors: Caf.exists(footer) && footer["co-authored-by"]
          });
        },
        getCommitMessage: function({
          type,
          story,
          storyId,
          message,
          coauthors,
          storyState,
          breakingChange,
          body
        }) {
          return compactFlattenAll(
            type ? type + ": " : undefined,
            (storyId != null
            ? storyId
            : (storyId = Caf.exists(story) && story.id))
              ? ((storyState = present(storyState)
                  ? `${Caf.toString(storyState)} `
                  : ""),
                `[${Caf.toString(storyState)}#${Caf.toString(storyId)}] `)
              : undefined,
            present(message) ? message : undefined,
            body
              ? `\n\n${Caf.toString(body.replace(/\n\n\n+/g, "\n\n"))}`
              : undefined,
            breakingChange
              ? `\n\nBREAKING CHANGE: ${Caf.toString(breakingChange)}`
              : undefined,
            (Caf.exists(coauthors) && coauthors.length) > 0
              ? "\n\n\n" +
                  Caf.array(
                    coauthors,
                    coauthor => `Co-authored-by: ${Caf.toString(coauthor)}`
                  ).join("\n")
              : undefined
          )
            .join("")
            .trim();
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
          let message, type, coauthors, story, breakingChange, body, trailers;
          return (
            ({
              message,
              type,
              coauthors,
              story,
              breakingChange,
              body,
              trailers
            } = state),
            { message, type, coauthors, story, breakingChange, body, trailers }
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
              status: require("../Git").status,
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
          )
            .tap(({ status }) =>
              !options.quiet
                ? require("../Git").printStatus({ status })
                : undefined
            )
            .then(state =>
              !projectConfig.conventionalCommit
                ? objectWithout(state, "breakingChange")
                : state
            );
        }
      };
    }
  );
});
