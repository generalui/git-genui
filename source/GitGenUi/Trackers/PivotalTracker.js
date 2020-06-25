"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "BaseClass",
      "userConfig",
      "present",
      "Error",
      "getJson",
      "merge",
      "postJson",
      "log",
      "Promise",
      "putJson",
      "lowerCamelCase",
      "snakeCase",
      "Date"
    ],
    [
      global,
      require("art-standard-lib"),
      require("art-class-system"),
      require("art-rest-client"),
      require("../UserConfig")
    ],
    (
      BaseClass,
      userConfig,
      present,
      Error,
      getJson,
      merge,
      postJson,
      log,
      Promise,
      putJson,
      lowerCamelCase,
      snakeCase,
      Date
    ) => {
      let PivotalTracker;
      return (PivotalTracker = Caf.defClass(
        class PivotalTracker extends BaseClass {},
        function(PivotalTracker, classSuper, instanceSuper) {
          let stateOrder;
          this.classGetter({
            accountConfig: function() {
              let base;
              return (
                Caf.exists((base = userConfig.accounts)) && base[this.name]
              );
            }
          });
          this.classGetter({
            token: function() {
              let base;
              return Caf.exists((base = this.accountConfig)) && base.token;
            },
            configured: function() {
              return present(this.token);
            },
            commonRestOptions: function() {
              return { normalizedHeaders: { "X-TrackerToken": this.token } };
            }
          });
          stateOrder = {
            rejected: 0,
            started: 1,
            unstarted: 2,
            unscheduled: 3,
            finished: 4,
            delivered: 5,
            unknown: 5
          };
          this.baseUrl = "https://www.pivotaltracker.com/services/v5";
          this.storyStates = [
            "started",
            "rejected",
            "planned",
            "unstarted",
            "unscheduled",
            "finished",
            "delivered"
          ];
          this.settableStoryStates = [
            "unstarted",
            "started",
            "finished",
            "delivered"
          ];
          this.requireProjectId = function(projectId) {
            return !present(projectId)
              ? (() => {
                  throw new Error("projectId required");
                })()
              : undefined;
          };
          this.getProjectUrl = function(projectId) {
            this.requireProjectId(projectId);
            return `${Caf.toString(this.projectsUrl)}/${Caf.toString(
              projectId
            )}`;
          };
          this.classGetter({
            projectsUrl: function() {
              return `${Caf.toString(this.baseUrl)}/projects`;
            },
            projects: function() {
              return getJson(this.projectsUrl, this.commonRestOptions);
            },
            myAccount: function() {
              return getJson(
                `${Caf.toString(this.baseUrl)}/me?date_format=millis`,
                this.commonRestOptions
              ).then(this._normalizeAccount);
            }
          });
          this.getStories = (projectId, options) => {
            let states;
            if (Caf.exists(options)) {
              states = options.states;
            }
            states != null ? states : (states = this.storyStates);
            return getJson(
              `${Caf.toString(
                this.getProjectUrl(projectId)
              )}/stories?limit=500&date_format=millis&filter=state:${Caf.toString(
                states.join(",")
              )}`,
              this.commonRestOptions
            )
              .then(stories => stories.map(this._normalizeStory))
              .then(stories =>
                stories.sort((a, b) => {
                  let aStatus, bStatus, temp, temp1;
                  aStatus =
                    (temp = stateOrder[a.state]) != null
                      ? temp
                      : stateOrder.unknown;
                  bStatus =
                    (temp1 = stateOrder[b.state]) != null
                      ? temp1
                      : stateOrder.unknown;
                  return aStatus !== bStatus
                    ? aStatus - bStatus
                    : b.updatedAt - a.updatedAt;
                })
              );
          };
          this.getProject = projectId =>
            getJson(this.getProjectUrl(projectId), this.commonRestOptions).then(
              this._normalizeResponse
            );
          this.getMembers = projectId =>
            getJson(
              `${Caf.toString(this.getProjectUrl(projectId))}/memberships`,
              this.commonRestOptions
            ).then(memberships =>
              Caf.array(memberships, ({ person }) => {
                let id, name, email;
                return ({ id, name, email } = person), { id, name, email };
              })
            );
          this.openInBrowser = function(projectId) {
            this.requireProjectId(projectId);
            return require("open")(
              `https://www.pivotaltracker.com/n/projects/${Caf.toString(
                projectId
              )}`
            );
          };
          this.getStoryBrowserUrl = function(projectId, storyId) {
            return `https://www.pivotaltracker.com/story/show/${Caf.toString(
              storyId
            )}`;
          };
          this.getStoryUrl = function(projectId, storyId) {
            return (
              this.getProjectUrl(projectId) +
              `/stories/${Caf.toString(storyId)}`
            );
          };
          this.authenticate = function({ username, password }) {
            return getJson(
              "https://www.pivotaltracker.com/services/v5/me",
              merge({
                headers: {
                  Authorization: `Basic ${Caf.toString(
                    require("btoa")(
                      `${Caf.toString(username)}:${Caf.toString(password)}`
                    )
                  )}`
                }
              })
            ).then(this._normalizeAccount);
          };
          this.storyIsStartable = function(story) {
            return [
              Caf.in(story.state, "unstarted"),
              "rejected",
              "unscheduled"
            ];
          };
          this.storyIsFinishable = function(story) {
            return Caf.in(story.state, [
              "unstarted",
              "rejected",
              "unscheduled",
              "started"
            ]);
          };
          this.getStory = (projectId, storyId) =>
            getJson(this.getStoryUrl(projectId, storyId)).then(
              this._normalizeStory
            );
          this.createStory = (projectId, story) =>
            postJson(
              this.getStoryUrl(projectId),
              this._denormalizeStory(story),
              this.commonRestOptions
            )
              .then(this._normalizeStory)
              .tapCatch(error => log({ createStory: { error } }));
          this.updateStory = (projectId, storyOrId, updates) =>
            Promise.then(() =>
              present(Caf.exists(storyOrId) && storyOrId.id)
                ? storyOrId
                : this.getStory(projectId, storyOrId)
            )
              .then(({ id, storyType, estimate }) => {
                if (
                  storyType !== "chore" &&
                  !(estimate != null) &&
                  !(updates.estimate != null)
                ) {
                  updates = merge(updates, { estimate: 1 });
                }
                return putJson(
                  this.getStoryUrl(projectId, id),
                  this._denormalizeStory(updates),
                  this.commonRestOptions
                );
              })
              .then(this._normalizeStory)
              .tapCatch(error => log({ updateStory: { error } }));
          this.createComment = function(projectId, storyId, text) {
            return postJson(
              `${Caf.toString(this.getStoryUrl(projectId, storyId))}/comments`,
              { text },
              this.commonRestOptions
            );
          };
          this._normalizeStory = story =>
            this._normalizeResponse(
              Caf.object(story, null, null, null, (v, k) =>
                k === "current_state" ? "state" : k
              )
            );
          this._denormalizeStory = story =>
            this._snakeCaseKeys(
              Caf.object(story, null, null, null, (v, k) =>
                k === "state" ? "current_state" : k
              )
            );
          this._normalizeAccount = function(account) {
            return merge(
              Caf.object(account, null, null, null, (v, k) =>
                k === "api_token" ? "token" : lowerCamelCase(k)
              ),
              { tracker: "PivotalTracker" }
            );
          };
          this._snakeCaseKeys = function(data) {
            return Caf.object(data, null, null, null, (v, k) => snakeCase(k));
          };
          this._normalizeResponse = function(data) {
            return Caf.object(
              data,
              (v, k) =>
                Caf.isF(v.match) &&
                v.match(/^\d\d\d\d-\d\d-\d\d[A-Z]\d\d:\d\d:\d\d[A-Z]/)
                  ? Date.parse(v)
                  : v,
              null,
              null,
              (v, k) => lowerCamelCase(k)
            );
          };
        }
      ));
    }
  );
});
