"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["dashCase", "isArray", "arrayWith", "Object"],
    [global, require("./StandardImport")],
    (dashCase, isArray, arrayWith, Object) => {
      let CommitParser;
      return (CommitParser = Caf.defClass(
        class CommitParser extends require("caffeine-eight").Parser {},
        function(CommitParser, classSuper, instanceSuper) {
          this.prototype.parse = function(source, options) {
            let node,
              header,
              subject,
              preamble,
              semanticType,
              semanticVersion,
              type,
              breakingChange,
              scopeTerm,
              scope,
              trackerInfo,
              trackerState,
              trackerId,
              body,
              footer,
              trailerMap,
              props;
            node = instanceSuper.parse.apply(this, arguments);
            if (Caf.exists(options) && options.returnNode) {
              return node;
            }
            header = node.header;
            if (Caf.exists(header)) {
              subject = header.subject;
              preamble = header.preamble;
              if (Caf.exists(preamble)) {
                semanticType = preamble.semanticType;
                if (Caf.exists(semanticType)) {
                  semanticVersion = semanticType.semanticVersion;
                  type = semanticType.type;
                  breakingChange = semanticType.breakingChange;
                }
                scopeTerm = preamble.scopeTerm;
                if (Caf.exists(scopeTerm)) {
                  scope = scopeTerm.scope;
                }
              }
              trackerInfo = header.trackerInfo;
              if (Caf.exists(trackerInfo)) {
                trackerState = trackerInfo.trackerState;
                trackerId = trackerInfo.trackerId;
              }
            }
            body = node.body;
            footer = node.footer;
            footer =
              (Caf.exists(footer) && footer.trailers.length) > 0
                ? Caf.each2(
                    footer.trailers,
                    ({ trailerToken, trailerValue }) => {
                      let token, value, previous;
                      token = dashCase(trailerToken.toString());
                      value = trailerValue.toString();
                      return (trailerMap[token] =
                        (previous = trailerMap[token]) != null
                          ? !isArray(previous)
                            ? [previous, value]
                            : arrayWith(previous, value)
                          : value);
                    },
                    null,
                    (trailerMap = {})
                  )
                : undefined;
            if (
              breakingChange ||
              (Caf.exists(footer) && footer["breaking-change"])
            ) {
              semanticVersion = "major";
            }
            if (!(semanticVersion != null)) {
              semanticVersion = (() => {
                switch (Caf.exists(type) && type.toString()) {
                  case "fix":
                    return "patch";
                  case "feat":
                    return "minor";
                }
              })();
            }
            props = {
              subject,
              type,
              scope,
              trackerState,
              trackerId,
              body,
              semanticVersion,
              footer
            };
            return Caf.object(
              props,
              (v, k) => (Caf.is(v, Object) ? v : v.toString().trim()),
              (v, k) => v != null
            );
          };
          this.rule({
            root: "header body? footer? whitespaceOnly?",
            header: "preamble? trackerInfo? subject",
            subject: "restOfLine",
            preamble: "semanticType scopeTerm? colon_",
            semanticType: [
              "semanticVersion '/' type:word breakingChange:bang?",
              "semanticVersion breakingChange:bang?",
              "type:word breakingChange:bang?"
            ],
            scopeTerm: "'(' scope:word ')'",
            trackerInfo: "'[' trackerState? '#' trackerId:word ']' _",
            trackerState: "word _",
            body: "bodyParagraph+",
            bodyParagraph: "!footer endLines restOfLine",
            footer: "trailer+ whitespaceOnly",
            trailer: "endLines trailerToken colon_ trailerValue",
            trailerToken: [/BREAKING CHANGE/, "word"],
            trailerValue: "restOfLine",
            _: /\ +/,
            endLines: /( *\n)+/,
            colon_: /: +/,
            word: /[-_\w]+/,
            restOfLine: /[^\n]+/u,
            bang: /[!]/,
            semanticVersion: /(major|minor|patch)\b/,
            whitespaceOnly: /\s*(?!.|\n)/
          });
        }
      ));
    }
  );
});
