"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["userConfig", "log", "merge", "Promise", "projectConfig", "tracker"],
    [
      global,
      require("../StandardImport"),
      require("../../UserConfig"),
      require("../../ProjectConfig")
    ],
    (userConfig, log, merge, Promise, projectConfig, tracker) => {
      let saveState,
        validateStory,
        getMyAccountOrNothing,
        getProjectOrNothing,
        ensureTrackerConfigured,
        ensureTrackerTokenValid;
      return [
        require("./Lib"),
        require("./CommandMenuLib"),
        {
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
            let story, stories, storyId;
            story = state.story;
            stories = state.stories;
            if ((storyId = Caf.exists(story) && story.id)) {
              if (
                !(story = Caf.find(
                  stories,
                  null,
                  story => story.id === storyId
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
          getMyAccountOrNothing: (getMyAccountOrNothing = function() {
            return Promise.then(() => {
              let name, temp, base, base1, base2;
              return (
                (Caf.exists(
                  (temp =
                    Caf.exists((base = projectConfig.project)) && base.tracker)
                )
                  ? (name = temp.name)
                  : undefined) &&
                Caf.exists((base1 = userConfig.accounts)) &&
                  Caf.exists((base2 = base1[name])) && base2.token &&
                tracker.myAccount
              );
            }).catch(() => {});
          }),
          getProjectOrNothing: (getProjectOrNothing = function() {
            return Promise.then(() => tracker.project).catch(() => {});
          }),
          ensureTrackerConfigured: (ensureTrackerConfigured = function() {
            return getProjectOrNothing().then(project =>
              !project
                ? require("./ConfigureMenu")({
                    exitPrompt: "continue",
                    prompt: "Please select a project."
                  })
                : undefined
            );
          }),
          ensureTrackerTokenValid: (ensureTrackerTokenValid = function() {
            return getMyAccountOrNothing().then(myAccount =>
              !myAccount
                ? require("./ConfigureMenu")({
                    exitPrompt: "continue",
                    prompt: "Please configure your account."
                  })
                : undefined
            );
          }),
          fillInMissingState: require("./fillInMissingState")
        }
      ];
    }
  );
});
