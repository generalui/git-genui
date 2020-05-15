"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "Promise",
      "log",
      "merge",
      "userConfig",
      "present",
      "Array",
      "String",
      "formattedInspect"
    ],
    [global, require("../StandardImport"), require("../../UserConfig")],
    (
      Promise,
      log,
      merge,
      userConfig,
      present,
      Array,
      String,
      formattedInspect
    ) => {
      let ignoreRejections,
        updateStateWithPrompt,
        saveState,
        validateStory,
        colorizeValue,
        colorNotPresent,
        presentValue,
        validateType;
      return {
        ignoreRejections: (ignoreRejections = function(a) {
          return Promise.then(a).catch(({ message }) => {
            log.warn(message);
            return undefined;
          });
        }),
        updateStateWithPrompt: (updateStateWithPrompt = function(
          statePropName,
          promptF
        ) {
          return state =>
            Promise.then(() => promptF(state))
              .then(value =>
                value === undefined ? state[statePropName] : value
              )
              .then(value => merge(state, { [statePropName]: value }));
        }),
        saveState: (saveState = function(state) {
          let message, type, coauthors, story;
          if (state) {
            userConfig.saveCommitOptionsForProject(
              (({ message, type, coauthors, story } = state),
              { message, type, coauthors, story })
            );
          }
          return state;
        }),
        validateStory: (validateStory = function(state) {
          let story, storyId, stories;
          story = state.story;
          storyId = state.storyId;
          stories = state.stories;
          if (
            storyId != null
              ? storyId
              : (storyId = Caf.exists(story) && story.id)
          ) {
            if (
              !(story = Caf.find(stories, null, story => story.id === storyId))
            ) {
              log.warn(
                merge({ message: "Invalid story or storyId", story, storyId })
              );
            }
            state.story = story;
          }
          return state;
        }),
        colorizeValue: (colorizeValue = require("colors").yellow),
        colorNotPresent: (colorNotPresent = require("colors").grey),
        presentValue: (presentValue = function(value, noneValue = "none") {
          return present(value)
            ? Caf.is(value, Array) && Caf.is(value[0], String)
              ? Caf.array(value, v => colorizeValue(v)).join(", ")
              : Caf.is(value, String)
              ? colorizeValue(value)
              : formattedInspect(value, { color: true })
            : colorNotPresent(noneValue);
        }),
        validateType: (validateType = function(state) {
          return !(
            !present(state.type) ||
            /^(patch|major|minor)\/\w+$/.test(state.type)
          )
            ? (log.warn(
                `Commit type should be of the form: [major, minor or patch]/short-word (you provided: ${Caf.toString(
                  state.type
                )})`
              ),
              merge(state, { type: null }))
            : state;
        })
      };
    }
  );
});
