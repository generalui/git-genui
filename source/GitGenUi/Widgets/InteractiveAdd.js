"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["pad", "log", "colors"],
    [global, require("../StandardImport"), { colors: require("colors") }],
    (pad, log, colors) => {
      let getResolvedFilePath;
      getResolvedFilePath = function(filePath) {
        return require("path").join(
          require("../ProjectConfig").projectConfig.configPath,
          filePath
        );
      };
      return function() {
        return require("../Git").rawStatus.then(({ files }) => {
          let items;
          files = Caf.array(files, null, file => file.index !== "renamed");
          return require("../PromptFor")
            .selectList({
              multiselect: true,
              prompt: "Select files to staged. Unselect files to unstage.",
              items: (items = Caf.array(
                files.sort((a, b) => a.path.localeCompare(b.path)),
                file => {
                  return {
                    file,
                    selected: !file.workingDir,
                    value: `${Caf.toString(
                      pad(`(${Caf.toString(file.workingDir || "staged")})`, 15)
                    )} ${Caf.toString(file.path)}`
                  };
                }
              ))
            })
            .then(selectedItems => {
              let selectedFilesByFile;
              selectedFilesByFile = Caf.object(
                selectedItems,
                null,
                null,
                null,
                item => item.file.path
              );
              return Caf.each2(items, ({ file, selected }) => {
                let action;
                return !!selected !== !!selectedFilesByFile[file.path]
                  ? (require("../Git")[
                      (action = selected ? "unstage" : "stage")
                    ](getResolvedFilePath(file.path)),
                    log(colors.blue(action + ": ") + colors.green(file.path)))
                  : undefined;
              });
            });
        });
      };
    }
  );
});
