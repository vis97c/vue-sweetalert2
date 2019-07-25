import { Config } from 'bili';

/** @type {import('bili').Config} */
const conf: Config = {
    input: 'src/index.ts',
    banner: true,
    output: {
        extractCSS: true
    },
    plugins: {
        commonjs: {},
        vue: {
            css: true,
            compileTemplate: true
        },
        babel: false,
        typescript2: {
            // objectHashIgnoreUnknownHack: true,
            tsconfigOverride: {
                targets: {
                    baseUrl: './src/'
                },
                include: [
                    //
                    './src/index.ts',
                    './src/shims-vue.d.ts',
                    './src/shims-tsx.d.ts'
                ]
            }
        }
    }
};

module.exports = conf;
