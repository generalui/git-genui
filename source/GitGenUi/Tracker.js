"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "BaseClass",
      "projectConfig",
      "present",
      "blue",
      "grey",
      "process",
      "formatDate",
      "log",
      "green"
    ],
    [
      global,
      require("art-standard-lib"),
      require("art-class-system"),
      require("./Style"),
      require("./Config")
    ],
    (
      BaseClass,
      projectConfig,
      present,
      blue,
      grey,
      process,
      formatDate,
      log,
      green
    ) => {
      let Tracker;
      return (Tracker = Caf.defClass(
        class Tracker extends BaseClass {
          constructor(_projectConfig = projectConfig) {
            super(...arguments);
            this._projectConfig = _projectConfig;
            this.init();
          }
        },
        function(Tracker, classSuper, instanceSuper) {
          this.singletonClass();
          this.prototype.init = function() {
            return (this.formatStory = this.formatStory.bind(this));
          };
          this.getter("projectConfig", {
            tracker: function() {
              return require("./Trackers")[this.name];
            },
            projectId: function() {
              return projectConfig.tracker.projectId;
            },
            name: function() {
              let temp;
              return (temp = projectConfig.tracker.name) != null
                ? temp
                : "PivotalTracker";
            },
            settableStoryStates: function() {
              let base;
              return (
                Caf.exists((base = this.tracker)) && base.settableStoryStates
              );
            },
            stories: function() {
              let base;
              return (
                Caf.exists((base = this.tracker)) &&
                base.getStories(this.projectId)
              );
            },
            members: function() {
              let base;
              return (
                Caf.exists((base = this.tracker)) &&
                base.getMembers(this.projectId)
              );
            },
            myAccount: function() {
              let base;
              return (
                Caf.exists((base = this.tracker)) &&
                base.getMyAccount(this.projectId)
              );
            },
            projects: function() {
              let base;
              return Caf.exists((base = this.tracker)) && base.projects;
            },
            project: function() {
              let base;
              return (
                Caf.exists((base = this.tracker)) &&
                base.getProject(this.projectId)
              );
            },
            configured: function() {
              return this.tracker.configured && present(this.projectId);
            }
          });
          this.prototype.createStory = function(story) {
            let base;
            return (
              Caf.exists((base = this.tracker)) &&
              base.createStory(this.projectId, story)
            );
          };
          this.prototype.getStoryUrl = function(storyId) {
            let base;
            return (
              Caf.exists((base = this.tracker)) &&
              base.getStoryUrl(this.projectId, storyId)
            );
          };
          this.prototype.getStoryBrowserUrl = function(storyId) {
            let base;
            return (
              Caf.exists((base = this.tracker)) &&
              base.getStoryBrowserUrl(this.projectId, storyId)
            );
          };
          this.prototype.getProjectUrl = function() {
            let base;
            return (
              Caf.exists((base = this.tracker)) &&
              base.getProjectUrl(this.projectId)
            );
          };
          this.prototype.openInBrowser = function() {
            let base;
            return (
              Caf.exists((base = this.tracker)) &&
              base.openInBrowser(this.projectId)
            );
          };
          this.prototype.openStoryInBrowser = function(storyId) {
            return require("open")(this.getStoryBrowserUrl(storyId));
          };
          this.prototype.updateStory = function(storyOrId, updates) {
            let base;
            return (
              Caf.exists((base = this.tracker)) &&
              base.updateStory(this.projectId, storyOrId, updates)
            );
          };
          this.prototype.createComment = function(storyId, text) {
            let base;
            return (
              Caf.exists((base = this.tracker)) &&
              base.createComment(this.projectId, storyId, text)
            );
          };
          this.prototype.authenticate = function(options) {
            let base;
            return (
              Caf.exists((base = this.tracker)) && base.authenticate(options)
            );
          };
          this.prototype.storyIsStartable = function(story) {
            let base;
            return (
              Caf.exists((base = this.tracker)) && base.storyIsStartable(story)
            );
          };
          this.prototype.storyIsFinishable = function(story) {
            let base;
            return (
              Caf.exists((base = this.tracker)) && base.storyIsFinishable(story)
            );
          };
          this.prototype.formatStory = function(story, addLinks) {
            let temp;
            return story.id
              ? `${Caf.toString(
                  blue(`[#${Caf.toString(story.id)}]`)
                )} ${Caf.toString(
                  grey(
                    `(${Caf.toString(story.state)}:${Caf.toString(
                      (temp = story.estimate) != null ? temp : "-"
                    )})`
                  )
                )} ${Caf.toString(story.name)}`
              : "(none)";
          };
          this.prototype.createCommentWithMessage = function(
            storyId,
            text,
            verbose
          ) {
            return this.createComment(storyId, text).tap(() => {
              let dashes;
              return verbose
                ? this.logStoryUpdateMessage(
                    storyId,
                    `comment added:\n${Caf.toString(
                      (dashes = "-".repeat(process.stdout.columns - 1))
                    )}\n  ${Caf.toString(
                      text.replace(/\n/g, "\n  ")
                    )}\n${Caf.toString(dashes)}`
                  )
                : undefined;
            });
          };
          this.prototype.updateStoryWithMessage = function(
            storyId,
            updates,
            verbose
          ) {
            return this.updateStory(storyId, updates).tap(() =>
              verbose
                ? this.logStoryUpdateMessage(
                    storyId,
                    (present(updates.state)
                      ? `'${Caf.toString(updates.state)}'`
                      : "updated") +
                      ` at ${Caf.toString(
                        formatDate("h:MMtt (Z mmmm d, yyyy)")
                      )}`
                  )
                : undefined
            );
          };
          this.prototype.logStoryUpdateMessage = function(storyId, message) {
            return log(
              blue(`Story [#${Caf.toString(storyId)}]: `) + green(message)
            );
          };
        }
      ));
    }
  );
});
