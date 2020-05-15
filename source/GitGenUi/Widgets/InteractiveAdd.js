"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["ask", "CheckboxQ", "pad"],
    [global, require("./StandardImport")],
    (ask, CheckboxQ, pad) => {
      let getResolvedFilePath;
      getResolvedFilePath = function(filePath) {
        return require("path").join(
          require("../ProjectConfig").projectConfig.configPath,
          filePath
        );
      };
      return function() {
        return require("../Git")
          .rawStatus.then(({ files }) => {
            let strings;
            files = Caf.array(files, null, file => file.index !== "renamed");
            strings = Caf.array(
              files.sort((a, b) => a.path.localeCompare(b.path)),
              file =>
                `${Caf.toString(
                  pad(`(${Caf.toString(file.workingDir || "staged")})`, 15)
                )} ${Caf.toString(file.path)}`
            );
            return ask(
              CheckboxQ({
                name: "stagedFiles",
                message: "Select files to staged. Unselect files to unstage.",
                default: Caf.array(strings, null, string =>
                  /\(staged/.test(string)
                ),
                strings,
                filter: stagedFiles =>
                  Caf.array(
                    stagedFiles,
                    string => string.split(/^\(\w+\)\s+/)[1]
                  )
              })
            )
              .then(({ stagedFiles }) => stagedFiles)
              .then(selectedFiles =>
                Caf.each2(files, file =>
                  file.workingDir
                    ? Caf.in(file.path, selectedFiles)
                      ? require("../Git").stage(getResolvedFilePath(file.path))
                      : undefined
                    : !Caf.in(file.path, selectedFiles)
                    ? require("../Git").unstage(getResolvedFilePath(file.path))
                    : undefined
                )
              );
          })
          .then(() => require("../Git").printStatus());
      };
    }
  );
});
