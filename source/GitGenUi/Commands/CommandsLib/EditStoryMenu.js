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
            items: story => {
              let temp;
              return [
                {
                  action: story =>
                    require("./EditStoryName")(
                      merge(state, { story })
                    ).then(name =>
                      name !== story.name
                        ? require("../../Tracker").tracker.updateStory(
                            story.id,
                            { name }
                          )
                        : story
                    ),
                  label: "name",
                  value: story.name
                },
                {
                  action: story =>
                    require("./SelectStoryState")(merge(state, { story })).then(
                      storyState => {
                        let temp1;
                        return storyState !== story.state
                          ? require("../../Tracker").tracker.updateStory(
                              story.id,
                              {
                                state: storyState,
                                estimate:
                                  (temp1 = story.estimate) != null ? temp1 : 1
                              }
                            )
                          : story;
                      }
                    ),
                  label: "state",
                  value: story.state
                },
                {
                  action: story =>
                    require("./SelectStoryEstimate")(
                      merge(state, { story })
                    ).then(estimate =>
                      estimate !== story.estimate
                        ? require("../../Tracker").tracker.updateStory(
                            story.id,
                            { estimate }
                          )
                        : story
                    ),
                  label: "estimate",
                  value: (temp = story.estimate) != null ? temp : "-"
                },
                {
                  action: story =>
                    require("./SelectMembers")(merge(state, { story }), {
                      selectedMemberIds: story.ownerIds,
                      prompt: "Select owners:"
                    }).then(ownerIds =>
                      neq(ownerIds.sort(), story.ownerIds.sort())
                        ? require("../../Tracker").tracker.updateStory(
                            story.id,
                            { ownerIds }
                          )
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
              ];
            }
          })
        );
      };
    }
  );
});
