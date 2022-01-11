const { alias, configPaths } = require("react-app-rewire-alias");
const { removeModuleScopePlugin } = require("customize-cra");

const aliasMap = configPaths("./tsconfig.paths.json");

module.exports = function override(config) {
  const modifiedConfig = alias(aliasMap)(config);
  return removeModuleScopePlugin()(modifiedConfig);
};
