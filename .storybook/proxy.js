const fetch = require('node-fetch');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { name } = require('../package.json');

const app = express();

const PORT = 3000;
const STENCIL_PORT = 3001;
const STORYBOOK_PORT = 3002;

app.use(
    '/~dev-server',
    createProxyMiddleware({
        target: `http://localhost:${STENCIL_PORT}`,
        changeOrigin: true,
        ws: true,
        logLevel: 'silent'
    })
);

app.use(/\/iframe\.html\?*/, async (req, res, next) => {
    let html = await fetch(`http://localhost:${STORYBOOK_PORT}/iframe.html${req.url.replace('/', '')}`).then(res => res.text());

    html = html
        .replace(
            '<head>',
            `<head>
        <script type="module" src="/dist/${name}/${name}.esm.js"></script>
        <link rel="stylesheet" href="/dist/${name}/${name}.css" />
        `
        )
        .replace(
            '</body>',
            `<iframe src="/~dev-server" style="display: block; width: 0; height: 0; border: 0;"></iframe>
      </body>`
        );

    res.type('html').send(html);
});

app.use('/dist', express.static('./dist'));

app.use(
    '/',
    createProxyMiddleware({
        target: `http://localhost:${STORYBOOK_PORT}`,
        logLevel: 'silent'
    })
);

app.listen(PORT, () => {
    console.log(`\n\n\nLaunch your Stencil/Storybook http://localhost:${PORT}\n\n\n`);
});
