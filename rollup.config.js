import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import svgr from "@svgr/rollup";
import url from "rollup-plugin-url";
import replace from "@rollup/plugin-replace";
import * as react from "react";
import * as reactDom from "react-dom";
import * as reactIs from "react-is";
import * as propTypes from "prop-types";
import nodeResolve from "rollup-plugin-node-resolve";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

process.env.BABEL_ENV = "production";

export default {
  input: "./src/index.ts",
  plugins: [
    nodeResolve({ preferBuiltins: true }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
    peerDepsExternal(),
    resolve({ extensions }),
    commonjs({
      include: "node_modules/**",
      namedExports: {
        react: Object.keys(react),
        "react-dom": Object.keys(reactDom),
        "react-is": Object.keys(reactIs),
        "prop-types": Object.keys(propTypes),
      },
    }),
    babel({ extensions, include: ["src/**/*"], runtimeHelpers: true }),
    url(),
    svgr({ exportType: "named", typescript: true }),
  ],
  output: [
    {
      file: "dist/index.js",
      format: "es",
    },
  ],
};
