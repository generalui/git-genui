// generated by Neptune Namespaces v4.x.x
// file: jest/namespace.js

module.exports = require('neptune-namespaces-runtime').addNamespace(
  'Jest',
  (class Jest extends Neptune.PackageNamespace {})
  ._configureNamespace(require('../../package.json'))
);
require('./Config/namespace');
require('./Lib/namespace');
require('./Trackers/namespace');