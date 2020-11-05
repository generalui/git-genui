"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["projectConfig", "log", "pad", "Promise", "Style"],
    [
      global,
      require("../StandardImport"),
      require("../Config"),
      { Style: require("../Style") },
    ],
    (projectConfig, log, pad, Promise, Style) => {
      let getResolvedFilePath;
      getResolvedFilePath = function (filePath) {
        return require("path").join(projectConfig.configPath, filePath);
      };
      return function (options) {
        return require("../Git").rawStatus.then(({ files }) => {
          let items;
          files = Caf.array(files, null, (file) => file.index !== "renamed");
          if (Caf.exists(options) && options.verbose) {
            log({ files });
          }
          return require("../PromptFor")
            .selectList({
              multiselect: true,
              tip:
                "<arrows> move cursor, <a/b/c..> filter, <space> toggle, <ctrl-a/n/i> select all/none/invert, <enter> finish",
              prompt: "Staged files",
              items: (items = Caf.array(
                files.sort((a, b) => {
                  let temp, temp1;
                  return a.workingDir !== b.workingDir
                    ? ((temp = a.workingDir) != null ? temp : "").localeCompare(
                        (temp1 = b.workingDir) != null ? temp1 : ""
                      )
                    : a.path.localeCompare(b.path);
                }),
                (file) => {
                  return {
                    file,
                    selected: !file.workingDir,
                    value: `${Caf.toString(
                      pad(`(${Caf.toString(file.workingDir || "staged")})`, 15)
                    )} ${Caf.toString(file.path)}`,
                  };
                }
              )),
            })
            .then((selectedItems) => {
              let selectedFilesByFile, toDo;
              selectedFilesByFile = Caf.object(
                selectedItems,
                null,
                null,
                null,
                (item) => item.file.path
              );
              toDo = { stage: [], unstage: [] };
              Caf.each2(items, ({ file, selected }) => {
                let action;
                return !!selected !== !!selectedFilesByFile[file.path]
                  ? (toDo[(action = selected ? "unstage" : "stage")].push(
                      getResolvedFilePath(file.path)
                    ),
                    log(Style.blue(action + ": ") + Style.green(file.path)))
                  : undefined;
              });
              return Promise.then(() =>
                toDo.stage.length > 0
                  ? require("../Git").stage(toDo.stage)
                  : undefined
              )
                .then(() =>
                  toDo.unstage.length > 0
                    ? require("../Git").unstage(toDo.unstage)
                    : undefined
                )
                .then(() => toDo);
            });
        });
      };
    }
  );
});
