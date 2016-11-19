/// <binding ProjectOpened='Watch - Development' />
"use strict";

module.exports = {
    entry: "./app/index.ts",
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    },
    output: {
        filename: "./wwwroot/dist/bundle.js"
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
    }
};