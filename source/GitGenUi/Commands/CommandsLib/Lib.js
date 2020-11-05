"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Promise", "merge", "log", "userConfig", "tracker"],
    [global, require("../StandardImport")],
    (Promise, merge, log, userConfig, tracker) => {
      let updateStateWithPrompt,
        menuApp,
        validateStory,
        getMyAccountOrNothing,
        getProjectOrNothing,
        ensureTrackerConfigured,
        ensureTrackerTokenValid;
      return {
        updateStateWithPrompt: (updateStateWithPrompt = function (
          statePropName,
          a,
          b
        ) {
          let promptFunction, options;
          promptFunction = b != null ? ((options = a), b) : a;
          return (state) =>
            Promise.then(() => promptFunction(state, options))
              .then((value) =>
                value === undefined ? state[statePropName] : value
              )
              .then((value) => merge(state, { [statePropName]: value }));
        }),
        menuApp: (menuApp = function (state, menuF) {
          return menuF(state).then(({ action }) =>
            action != null
              ? Promise.then(() => action(state)).then((newState) =>
                  menuApp(newState != null ? newState : state, menuF)
                )
              : undefined
          );
        }),
        validateStory: (validateStory = function (state) {
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
              !(story = Caf.find(
                stories,
                null,
                (story) => story.id === storyId
              ))
            ) {
              log.warn(
                merge({ message: "Invalid story or storyId", story, storyId })
              );
            }
            state.story = story;
          }
          return state;
        }),
        getMyAccountOrNothing: (getMyAccountOrNothing = function () {
          return Promise.then(() => {
            let base, base1;
            return (
              Caf.exists((base = userConfig.accounts)) &&
              Caf.exists((base1 = base[tracker.name])) &&
              base1.token &&
              tracker.myAccount
            );
          }).catch(() => {});
        }),
        getProjectOrNothing: (getProjectOrNothing = function () {
          return Promise.then(() => tracker.project).catch(() => {});
        }),
        ensureTrackerConfigured: (ensureTrackerConfigured = function () {
          return getProjectOrNothing().then((project) =>
            !project
              ? require("./ConfigureMenu")({
                  exitPrompt: "continue",
                  prompt: "Please select a project.",
                })
              : undefined
          );
        }),
        ensureTrackerTokenValid: (ensureTrackerTokenValid = function () {
          return getMyAccountOrNothing().then((myAccount) =>
            !myAccount
              ? require("./ConfigureMenu")({
                  exitPrompt: "continue",
                  prompt: "Please configure your account.",
                })
              : undefined
          );
        }),
      };
    }
  );
});
