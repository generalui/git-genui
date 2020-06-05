"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let test = global.test,
    expect = global.expect;
  return test("adds 1 + 2 to equal 3", function() {
    return expect(1 + 2).toBe(3);
  });
});
