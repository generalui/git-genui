"use strict"
let Caf = require('caffeine-script-runtime');
Caf.defMod(module, () => {return Caf.importInvoke(["toSeconds", "max", "present", "compactFlatten", "compactFlattenAll", "merge", "Style", "pad", "durationString", "log", "objectWithout", "formatDate", "tracker"], [global, require('./StandardImport'), require('./CommandsLib'), {Style: require('../Style')}], (toSeconds, max, present, compactFlatten, compactFlattenAll, merge, Style, pad, durationString, log, objectWithout, formatDate, tracker) => {let shortName; shortName = function(name) {return name.split(/@|\s/)[0];}; return {description: "log commits", options: {from: "from commit", to: "to commit", args: "file or folder to log"}, examples: ["package.json", "log all changes to package.json", "--from fdc32b1 --to d6a9c19", "log all changes between these two commits"], run: function(options) {let file, temp, base; file = (undefined !== (temp = options.file)) ? temp : Caf.exists(base = options.args) && base[0]; return require('../Git').getCommitLog({to: options.to, from: options.from, file}).then((list) => {let maxTypeLength, maxTrackerId, now, selected, main; maxTypeLength = 0; maxTrackerId = 0; Caf.each2(list, ({type, trackerId}) => {if (type != null) {maxTypeLength = max(maxTypeLength, type.length);}; return trackerId ? maxTrackerId = max(maxTrackerId, trackerId.length) : undefined;}); now = toSeconds(); selected = null; main = () => {let from, into, to, i, temp1; return require('../PromptFor').item({pageSize: "max", prompt: `git log${Caf.toString(file ? " " + file : undefined)}:`, tip: "(Use arrow keys or type to search, ctrl-C to exit)", items: (from = list, into = [], (from != null) ? (to = from.length, i = 0, (() => {while (i < to) {let entry, hash, semanticVersion, subject, type, trackerId, date, footer, refs, coauthors, authors; entry = from[i]; into.push(((hash = entry.hash, semanticVersion = entry.semanticVersion, subject = entry.subject, type = entry.type, trackerId = entry.trackerId, date = entry.date, footer = entry.footer, refs = entry.refs), present(refs) ? (refs = compactFlatten(refs), !(refs.length > 0) ? refs = null : undefined) : undefined, coauthors = compactFlattenAll(entry.authorName, Caf.exists(footer) && footer["co-authored-by"]), authors = Caf.array(coauthors, (author) => shortName(author)), merge(entry, {value: `${Caf.toString(Style.grey(hash.slice(0, 7)))} ${Caf.toString(Style.brightGreen(pad(durationString(now - toSeconds(date)), 3, " ", true)))} ${Caf.toString(pad(trackerId ? Style.grey(`#${Caf.toString(trackerId)}`) : "", maxTrackerId + 1))} ${Caf.toString(Style[(semanticVersion === "major") ? "red" : (semanticVersion === "minor") ? "blue" : "grey"]((semanticVersion || "     ") + ((semanticVersion && type) ? "/" : " ") + pad(type != null ? type : "", maxTypeLength)))} ${Caf.toString(Style.green(authors.join(", ")))}${Caf.toString(refs ? Style.yellow(` (${Caf.toString(refs.join(", "))})`) : undefined)} ${Caf.toString(subject)}`}))); temp1 = i++;}; return temp1;})()) : undefined, into)}).then((selected) => require('../PromptFor').menu({items: Caf.array(log(objectWithout(selected, "value", "id", "rawMessage")), (value, label) => {if (label === "date") {value = formatDate(value);}; return {value, label, action: (() => {switch (label) {case "trackerId": return () => tracker.openStoryInBrowser(value);};})()};})}).then(main));}; return main();});}};});});
//# sourceMappingURL=Log.js.map