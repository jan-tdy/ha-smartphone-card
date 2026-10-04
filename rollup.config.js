import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

const dev = process.env.ROLLUP_WATCH === "true";

export default {
  input: "src/ha-smartphone-card.ts",
  output: {
    file: "dist/ha-smartphone-card.js",
    format: "es",
    sourcemap: dev,
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    !dev && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
