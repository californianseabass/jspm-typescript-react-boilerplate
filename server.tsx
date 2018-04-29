'use strict';
import dotenv from 'dotenv';
import express from 'express';
import passport from 'passport';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import PostgresPool from 'jspm-typescript-react-boilerplate/lib/database/postgres.ts';
import localLoginStrategy from 'jspm-typescript-react-boilerplate/lib/passport/local-login.ts';
import localSignupStrategy from 'jspm-typescript-react-boilerplate/lib/passport/local-signup.ts';
import Root, { theme } from 'jspm-typescript-react-boilerplate/components/root.tsx';

import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
import { MuiThemeProvider, createMuiTheme, createGenerateClassName } from 'material-ui/styles';

const configResult = dotenv.config();

if (configResult.error) {
    throw configResult.error;
}

function render(preloadedState: any, body: any, css: any): String {
    // TODO sync with app in app.tsx
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
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <style id="jss-server-side">${css}</style>
        <title>Jspm TypeScript React Boilerplate</title>

    </head>
    <script src="/jspm_packages/system.js"></script>
    <script src="/jspm.config.js"></script>
    <script src="build.js"></script>
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
    </html>
    `;
}

const port = process.env.PORT || 9080;

const app: express.Application = express();
app.use(passport.initialize());

const postgresPool = PostgresPool();

// TODO breaking here I think
passport.use('local-signup', localSignupStrategy(postgresPool));
passport.use('local-login', localLoginStrategy(postgresPool));

// send all requests to index.html so browserHistory works

app.get('/', (req, res) => {
    const context = {};

    // Create a sheetsRegistry instance.
    const sheetsRegistry = new SheetsRegistry();

    const generateClassName = createGenerateClassName();

    const body = ReactDOMServer.renderToString(
        <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
            <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
                <Root />
            </MuiThemeProvider>
        </JssProvider>
    );

    const css = sheetsRegistry.toString();

    res.send(render({ name: 'snorlax' }, body, css));
});

app.use(express.static('.'));

app.listen(port, () => {
    console.log('Listening on port ', port);
});
