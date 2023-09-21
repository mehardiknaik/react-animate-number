import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import del from "rollup-plugin-delete";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: false,
        name: "react-onboarding-swiper",
      },
      {
        file: packageJson.module,
        format: "es",
        sourcemap: false,
      },
    ],
    plugins: [
      del({
        targets: "dist/*",
        runOnce: true,
      }),
      external(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/stories", "**/*.stories.ts"],
      }),
      postcss(),
      terser(),
    ],
  },
  {
    // path to your declaration files root
    input: "./dist/dts/index.d.ts",
    external: [/\.css$/],
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts(), del({ hook: "buildEnd", targets: "./dist/dts" })],
  },
];
