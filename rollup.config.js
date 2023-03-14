import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import external from "rollup-plugin-peer-deps-external";
import babel from "@rollup/plugin-babel";
import pkg from "./package.json";
import bundleScss from 'rollup-plugin-bundle-scss';
import svgr from '@svgr/rollup'
import url from '@rollup/plugin-url'

const EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.json'];
const CODES = [
    'THIS_IS_UNDEFINED',
    'MISSING_GLOBAL_NAME',
    'CIRCULAR_DEPENDENCY',
];

const discardWarning = warning => {
    if (CODES.includes(warning.code)) {
        return;
    }

    console.error(warning);
};

const commonPlugins = () => [
    external({
        includeDependencies: true,
    }),
    babel({
        babelrc: false,
        presets: [['@babel/preset-env', {modules: false}], '@babel/preset-react'],
        extensions: EXTENSIONS,
        exclude: 'node_modules/**',
    }),
    typescript({tsconfig: "./tsconfig.json"}),
    commonjs({
        include: /node_modules/,
    }),
    url(),
    svgr({icon: true}),
    bundleScss({exclusive: false}),
    postcss(),
    resolve({
        extensions: EXTENSIONS,
        preferBuiltins: false,
    }),
];

export default [
    {
        onwarn: discardWarning,
        input: "src/index.ts",
        output: [
            {
                file: pkg.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: pkg.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: commonPlugins(),
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{file: "dist/index.d.ts", format: "esm"}],
        plugins: [dts()],
        external: [/\.(css|less|scss)$/],
    },
];
