import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
    namespace: 'node-etl-ui',
    plugins: [
        sass({
            injectGlobalPaths: ['src/globals/variables.scss']
        })
    ],
    outputTargets: [
        {
            type: 'dist',
            esmLoaderPath: '../loader'
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
