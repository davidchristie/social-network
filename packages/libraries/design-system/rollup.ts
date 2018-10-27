import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import sourceMaps from "rollup-plugin-sourcemaps";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";

const pkg = require("./package.json")

export default {
  input: `src/index.ts`,
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true
    },
  ],
  external: [],
  watch: {
    include: "src/**",
  },
  plugins: [
    postcss({
      extensions: ['.css'],
    }),
    typescript({
      tsconfig: "tsconfig.json",
    }),
    commonjs(),
    resolve(),
    sourceMaps(),
  ],
}
