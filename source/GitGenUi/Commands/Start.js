"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["tracker", "log", "ask", "SelectStoryQ", "present", "Promise", "merge"],
    [global, require("./StandardImport"), require("../InquirerPlus")],
    (tracker, log, ask, SelectStoryQ, present, Promise, merge) => {
      return {
        description: "start a story",
        run: function(options) {
          return tracker.stories
            .then(stories => {
              let started;
              started = Caf.array(
                stories,
                null,
                story => story.state === "started"
              );
              if (started.length > 0) {
                log(require("colors").cyan("Stories already started:"));
                Caf.each2(started, story =>
                  log("  " + tracker.formatStory(story))
                );
                log("");
              }
              return ask(
                SelectStoryQ(
                  Caf.array(stories, null, story =>
                    tracker.storyIsStartable(story)
                  ),
                  { message: "What story do you want to start?" }
                )
              );
            })
            .then(({ story }) => {
              let into, i1;
              return story
                ? (!present(story.estimate)
                    ? ask({
                        type: "expand",
                        name: "estimate",
                        default: "no",
                        message: "Estimate story to start it:",
                        choices:
                          ((into = []),
                          (i1 = 0),
                          (() => {
                            while (i1 <= 3) {
                              let i;
                              i = i1;
                              into.push({
                                key: `${Caf.toString(i)}`,
                                value: i,
                                name: i
                              });
                              i1++;
                            }
                          })(),
                          into)
                      })
                    : Promise.resolve({})
                  )
                    .then(updates => merge(updates, { state: "started" }))
                    .then(updates =>
                      tracker.updateStoryWithMessage(story.id, updates)
                    )
                : log("Canceled");
            });
        }
      };
    }
  );
});
