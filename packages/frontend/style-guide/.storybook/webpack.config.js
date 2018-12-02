const path = require("path");
const compilerOptions = {
  ...require("../tsconfig.json").compilerOptions,
  // For allowSyntheticDefaultImports/esModuleInterop, a target of "es6" or
  // above is required. ts-loader will load the project tsconfig.json normally
  // with its compilation settings.
  target: "esnext",
};
// If you have the compiler option "moduleResolution", delete it. You'll get
// an error otherwise.
delete compilerOptions.moduleResolution;

module.exports = (baseConfig, env, config) => {
  config.entry['design-system'] = path.resolve(__dirname, '../../design-system/src/index.ts')
  config.module.rules.push({
    exclude: [
      /node_modules/
    ],
    test: /\.tsx?$/,
    use: [
      require.resolve("ts-loader"),
      {
        loader: require.resolve("react-docgen-typescript-loader"),
        // Pass along our customized compiler options to enable synthetic
        // default imports.
        options: { compilerOptions },
      },
    ],
  });
  config.resolve.extensions.push(".svg", ".ts", ".tsx");
  return config;
};
