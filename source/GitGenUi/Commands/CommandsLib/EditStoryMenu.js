"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["merge", "log", "formatDate", "neq"],
    [global, require("../StandardImport")],
    (merge, log, formatDate, neq) => {
      return function(state, options) {
        let story, project, members;
        story = state.story;
        project = state.project;
        members = state.members;
        return require("../../PromptFor").menu(
          story,
          merge(options, {
            preprocessState: story => {
              log.unquoted(
                Caf.object(
                  story,
                  (v, k) => formatDate(v),
                  (v, k) => k.match(/At$/)
                )
              );
              return story;
            },
            items: story => [
              { action: story => story, label: "name", value: story.name },
              {
                action: story =>
                  require("./SelectStoryState")({ story }).then(
                    ({ storyState }) => {
                      let temp;
                      return storyState !== story.state
                        ? (log(
                            require("colors").green(
                              `Updating story state ${Caf.toString(
                                story.state
                              )} => ${Caf.toString(storyState)}...`
                            )
                          ),
                          require("../../Tracker")
                            .tracker.updateStory(story.id, {
                              state: storyState,
                              estimate:
                                (temp = story.estimate) != null ? temp : 1
                            })
                            .tap(() =>
                              log(require("colors").green("Success."))
                            ))
                        : (log("No changes."), story);
                    }
                  ),
                label: "state",
                value: story.state
              },
              {
                action: story => story,
                label: "estimate",
                value: story.estimate
              },
              {
                action: story =>
                  require("./SelectMembers")(state, {
                    selectedMemberIds: story.ownerIds,
                    prompt: "Select owners:"
                  }).then(ownerIds =>
                    neq(ownerIds.sort(), story.ownerIds.sort())
                      ? require("../../Tracker").tracker.updateStory(story.id, {
                          owner_ids: ownerIds
                        })
                      : story
                  ),
                label: "owners",
                value:
                  story.ownerIds.length > 0
                    ? Caf.array(story.ownerIds, id => {
                        let base;
                        return (
                          Caf.exists(
                            (base = Caf.find(
                              members,
                              null,
                              member => member.id === id
                            ))
                          ) && base.name
                        );
                      }).join(", ")
                    : "(none)"
              }
            ]
          })
        );
      };
    }
  );
});
