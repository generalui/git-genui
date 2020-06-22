"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "Promise",
      "merge",
      "neq",
      "log",
      "formatDate",
      "present",
      "objectWithout"
    ],
    [global, require("../StandardImport")],
    (Promise, merge, neq, log, formatDate, present, objectWithout) => {
      let conditionalUpdate;
      conditionalUpdate = function(story, updates) {
        return !story.newStory &&
          Caf.find(updates, null, (v, k) => neq(story[k], v))
          ? require("../../Tracker").tracker.updateStory(story, updates)
          : Promise.resolve(merge(story, updates));
      };
      return function(state, options) {
        let story, project, members, ownerIds, length;
        story = state.story;
        project = state.project;
        members = state.members;
        if (
          ((ownerIds = story.ownerIds),
          Caf.exists(ownerIds) ? (length = ownerIds.length) : undefined) > 0
        ) {
          story = merge(story, { ownerIds: ownerIds.sort() });
        }
        log({ EditStoryMenu: story });
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
              let temp, base;
              return [
                {
                  action: story =>
                    require("./EditStoryName")(
                      merge(state, { story })
                    ).then(name => conditionalUpdate(story, { name })),
                  label: "name",
                  value: story.name
                },
                {
                  action: story =>
                    require("./SelectStoryState")(
                      merge(state, { story })
                    ).then(storyState =>
                      conditionalUpdate(story, { state: storyState })
                    ),
                  label: "state",
                  value: story.state
                },
                {
                  action: story =>
                    require("./SelectStoryEstimate")(
                      merge(state, { story })
                    ).then(estimate => conditionalUpdate(story, { estimate })),
                  label: "estimate",
                  value: (temp = story.estimate) != null ? temp : "-"
                },
                {
                  action: story => {
                    let temp1;
                    return require("./SelectMembers")(merge(state, { story }), {
                      selectedMemberIds:
                        (temp1 = story.ownerIds) != null ? temp1 : [],
                      prompt: "Select owners:"
                    })
                      .then(ownerIds => ownerIds.sort())
                      .then(ownerIds => conditionalUpdate(story, { ownerIds }));
                  },
                  label: "owners",
                  value:
                    (Caf.exists((base = story.ownerIds)) && base.length) > 0
                      ? Caf.array(story.ownerIds, id => {
                          let base1;
                          return (
                            Caf.exists(
                              (base1 = Caf.find(
                                members,
                                null,
                                member => member.id === id
                              ))
                            ) && base1.name
                          );
                        }).join(", ")
                      : "(none)"
                },
                story.newStory && present(story.name)
                  ? {
                      action: story =>
                        require("../../Tracker")
                          .tracker.createStory(objectWithout(story, "newStory"))
                          .then(story => merge(story, { newStory: true })),
                      value: "save and exit",
                      shortcut: "9",
                      exit: true
                    }
                  : undefined
              ];
            }
          })
        );
      };
    }
  );
});
