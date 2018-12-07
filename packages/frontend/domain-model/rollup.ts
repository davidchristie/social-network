import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import sourceMaps from "rollup-plugin-sourcemaps";
import typescript from "rollup-plugin-typescript2";

const pkg = require("./package.json");

export default {
  external: [],
  input: `src/index.ts`,
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true,
    },
  ],
  plugins: [
    postcss({
      extensions: [".css"],
    }),
    typescript({
      tsconfig: "tsconfig.json",
    }),
    commonjs(),
    resolve(),
    sourceMaps(),
  ],
  watch: {
    include: "src/**",
  },
};
