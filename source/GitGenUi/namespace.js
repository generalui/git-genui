// generated by Neptune Namespaces v4.x.x
// file: GitGenUi/namespace.js

module.exports = require('neptune-namespaces-runtime').addNamespace(
  'GitGenUi',
  (class GitGenUi extends Neptune.PackageNamespace {})
  ._configureNamespace(require('../../package.json'))
);
require('./Commands/namespace');
require('./Config/namespace');
require('./Lib/namespace');
require('./PostCommitActions/namespace');
require('./PromptFor/namespace');
require('./Trackers/namespace');
require('./Widgets/namespace');