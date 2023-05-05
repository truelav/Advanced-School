import webpack from 'webpack';
import path from "path";
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';


export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode} = options;

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(paths),
        module: {
            rules: buildLoaders(),
        },
        resolve: {
            extensions: buildResolvers(),
        },
    }
}