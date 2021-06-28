const { getDefaultConfig } = require("@expo/metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig(__dirname);
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer")
    },
    resolver: {
      // assetExts: [...defaultConfig.resolver.assetExts, 'db'],
      assetExts: assetExts.filter(ext => ext !== "svg"),
      sourceExts: [...sourceExts, "svg", "db", "sqlite", "sqlite3"]
    }
  };
})();
