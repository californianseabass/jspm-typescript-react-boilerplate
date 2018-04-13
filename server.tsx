'use strict';
import dotenv from 'dotenv';
import express from 'express';
import passport from 'passport';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import PostgresPool from 'jspm-typescript-react-boilerplate/lib/database/postgres.ts';
import localLoginStrategy from 'jspm-typescript-react-boilerplate/lib/passport/local-login.ts';
import localSignupStrategy from 'jspm-typescript-react-boilerplate/lib/passport/local-signup.ts';
import { Root } from 'jspm-typescript-react-boilerplate/components/root.tsx'
import routes from 'jspm-typescript-react-boilerplate/routes/index.tsx'


const configResult = dotenv.config();

if (configResult.error) {
    throw configResult.error;
}

function index(preloadedState: any): String {
    // TODO sync with app in app.tsx
    const body = renderToString(routes);
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
        SystemJS.import('systemjs-hot-reloader').then(function(connect) {
          connect();
          SystemJS.import('app.tsx');
        });
    </script>
    `;
}


function render(preloadedState: any, body: any): String {
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

        <title>Jspm TypeScript React Boilerplate</title>

        <script src="jspm_packages/system.js"></script>
        <script src="jspm.config.js"></script>
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

const port = process.env.PORT || 9080;

const app: express.Application = express();
app.use(passport.initialize());

const postgresPool = PostgresPool();

passport.use("local-signup", localSignupStrategy(postgresPool));
passport.use("local-login", localLoginStrategy(postgresPool));


//app.get('/', (req, res) => {
//
//    const body = ReactDOMServer.renderToString(< Root />);
//   res.send(render({ name: 'snorlax' }, body));
//});


// send all requests to index.html so browserHistory works

app.get('*', (req, res) => {
    // match the routes to the url
    // `RouterContext` is what the `Router` renders. `Router` keeps these
    // `props` in its state as it listens to `browserHistory`. But on the
    // server our app is stateless, so we need to use `match` to
    // get these props before rendering.

    const context = {}

    const body = ReactDOMServer.renderToString(
        <Root />
    );

    // dump the HTML into a template, lots of ways to do this, but none are
    // really influenced by React Router, so we're just using a little
    // function, `renderPage`
    res.send(render({ name: 'snorlax' }, body));
})

//app.use(express.static("."));

app.listen(port, () => {
    console.log('Listening on port ', port);
});
