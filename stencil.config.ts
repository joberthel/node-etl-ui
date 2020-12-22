import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
    namespace: 'node-etl-ui',
    plugins: [
        sass({
            injectGlobalPaths: ['src/globals/_variables.scss']
        })
    ],
    globalStyle: 'src/globals/main.scss',
    outputTargets: [
        {
            type: 'dist',
            esmLoaderPath: '../loader',
            copy: [{ src: 'fonts', dest: '../fonts' }]
        },
        {
            type: 'dist-custom-elements-bundle'
        },
        {
            type: 'docs-readme',
            footer: ''
        }
    ]
};
