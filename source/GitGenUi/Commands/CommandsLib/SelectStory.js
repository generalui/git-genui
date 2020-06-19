"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Promise", "compactFlatten", "merge"],
    [global, require("../StandardImport")],
    (Promise, compactFlatten, merge) => {
      let formatStory, selectStory;
      formatStory = require("../../Tracker").tracker.formatStory;
      return (selectStory = state => {
        let stories, prompt, story;
        stories = state.stories;
        prompt = state.prompt;
        story = state.story;
        return Promise.then(() =>
          require("../../PromptFor")
            .selectList({
              prompt: prompt != null ? prompt : "Select a story...",
              default: story ? { story } : undefined,
              items: compactFlatten([
                {
                  value: "(new)",
                  story: { newStory: true, state: "unstarted", estimate: 1 }
                },
                Caf.array(stories, story => {
                  return { story, value: formatStory(story) };
                }),
                { value: "(none)", story: {} }
              ])
            })
            .then(({ story }) =>
              Caf.exists(story) && story.newStory
                ? require("./EditStoryMenu")(merge(state, { story }))
                : story
            )
        );
      });
    }
  );
});
