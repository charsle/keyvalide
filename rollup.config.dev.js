"use strict";

import babel from 'rollup-plugin-babel';
let uglify = require('rollup-plugin-uglify');
export default {
    entry: "src/index.js",
    dest: "dist/index.js",
    format: "umd",
    sourceMap: "inline",
    moduleName: 'Keyvalide',
    plugins: [
        uglify(),
        babel({ exclude: './node_modules/**' })
    ]
}