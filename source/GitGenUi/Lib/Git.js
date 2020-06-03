"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["compactFlattenAll"],
    [global, require("./StandardImport")],
    compactFlattenAll => {
      let getGitCommitMessage;
      return {
        getGitCommitMessage: (getGitCommitMessage = function({
          type,
          story,
          message,
          coauthors,
          storyStatus
        }) {
          return compactFlattenAll(
            type != null ? type : "(type)",
            ": ",
            Caf.exists(story) && story.id
              ? `[#${Caf.toString(story.id)}]${Caf.toString(
                  storyStatus && storyStatus !== story.status
                    ? ` (${Caf.toString(storyStatus)})`
                    : undefined
                )} `
              : undefined,
            message != null ? message : "(message)",
            coauthors
              ? "\n\n\n" +
                  Caf.array(
                    coauthors,
                    coauthor => `Coauthored-by: ${Caf.toString(coauthor)}`
                  ).join("\n")
              : undefined
          ).join("");
        })
      };
    }
  );
});
