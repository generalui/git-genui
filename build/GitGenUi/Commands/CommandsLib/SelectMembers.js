"use strict"
let Caf = require('caffeine-script-runtime');
Caf.defMod(module, () => {return (() => {return function(state, {prompt, selectedMemberIds = []}) {let myId, base, base1; myId = Caf.exists(base = state.myAccount) && base.id; return ((Caf.exists(base1 = state.members) && base1.length) > 0) ? require('../../PromptFor').selectList({multiselect: true, prompt: prompt != null ? prompt : "Select members:", items: Caf.array(state.members, ({email, name, id}) => {return {id, selected: Caf.in(id, selectedMemberIds), value: `${Caf.toString(name)} <${Caf.toString(email)}> ${Caf.toString((id === myId) ? " (me)" : undefined)}`};})}).then((items) => Caf.array(items, ({id}) => id)) : selectedMemberIds;};})();});
//# sourceMappingURL=SelectMembers.js.map
