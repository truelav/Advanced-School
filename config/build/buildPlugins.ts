import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import  webpack  from "webpack";
import { BuildOptions, BuildPaths } from "./types/config";

export function buildPlugins(paths: BuildPaths ): webpack.WebpackPluginInstance[] {

    return [
        new HtmlWebpackPlugin({
            template: paths.html
        })
    ]
}