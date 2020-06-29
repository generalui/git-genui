"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["projectConfig", "log", "pad", "colors"],
    [
      global,
      require("../StandardImport"),
      require("../Config"),
      { colors: require("colors") }
    ],
    (projectConfig, log, pad, colors) => {
      let getResolvedFilePath;
      getResolvedFilePath = function(filePath) {
        return require("path").join(projectConfig.configPath, filePath);
      };
      return function(options) {
        return require("../Git").rawStatus.then(({ files }) => {
          let items;
          files = Caf.array(files, null, file => file.index !== "renamed");
          if (Caf.exists(options) && options.verbose) {
            log({ files });
          }
          return require("../PromptFor")
            .selectList({
              multiselect: true,
              prompt:
                "Use <space> and <arrow keys> to stage and unstage files. Type to search. <enter> when done.",
              items: (items = Caf.array(
                files.sort((a, b) => {
                  let temp, temp1;
                  return a.workingDir !== b.workingDir
                    ? ((temp = a.workingDir) != null ? temp : "").localeCompare(
                        (temp1 = b.workingDir) != null ? temp1 : ""
                      )
                    : a.path.localeCompare(b.path);
                }),
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
