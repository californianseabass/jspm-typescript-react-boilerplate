'use strict';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server.js';
import { HelloWorld } from 'jspm-typescript-react-boilerplate/components/HelloWorld.tsx';

function index(preloadedState: any): String {
    const body = ReactDOMServer.renderToString(<HelloWorld compiler={preloadedState.name} />);
    return `<!doctype html>
    <meta charset="utf-8">
    <html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="apple-mobile-web-app-capable" content="YES" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="fragment" content="!" />

        <title>Jspm TypeScript React Boilerplate</title>

        <script src="/jspm_packages/system.js"></script>
        <script src="/jspm.config.js"></script>
    </head>
    <body>
              <div id="app">${body}</div>

    </body>
    <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
    </script>
    <script>
        System.import('systemjs-hot-reloader').then(function(connect) {
          connect();
          System.import('app.tsx');
        });
    </script>
    `;
}

const port = 9080;

const app: express.Application = express();

app.get('/', (req, res) => {
  res.send(index({name: 'snorlax'}));
});

app.use(express.static("."));

app.listen(port, () => {
  console.log('Listening on port ', port);
});
