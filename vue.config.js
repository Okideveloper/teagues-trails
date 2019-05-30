export const configureWebpack = {
    resolve: {
        //allow for @ or @src alias for src
        alias: require('aliases.config').webpack
    }
};
export function chainWebpack(config) {
    //turn off elint for webpack transpile
    config.module.rules.delete('eslint');
}
export const runtimeCompiler = true;
export const css = {
    sourceMap: true
};
export const publicPath = '';
export const outputDir = './docs/';
export const assetsDir = 'assets';