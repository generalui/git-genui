"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Promise", "compactFlatten"],
    [global, require("./StandardImport")],
    (Promise, compactFlatten) => {
      let formatStory;
      formatStory = require("./Tracker").tracker.formatStory;
      return {
        story: (stories, prompt, defaultStory) =>
          Promise.then(() =>
            stories
              ? require("./PromptFor")
                  .selectList({
                    prompt: prompt != null ? prompt : "Select a story...",
                    default: defaultStory ? { story: defaultStory } : undefined,
                    items: compactFlatten([
                      { value: "(new)", story: {} },
                      Caf.array(stories, (story) => {
                        return { story, value: formatStory(story) };
                      }),
                      { value: "(none)", story: {} },
                    ]),
                  })
                  .then(({ story }) => story)
              : undefined
          ),
      };
    }
  );
});
