'use strict';
import _ from 'lodash';
import express from 'express';
import fs from 'fs';
import moment from 'moment';
import parse from 'ndjson';
import React from 'react';
import ReactDOMServer from 'react-dom/server.js';

import Main, { MainProps } from 'jspm-typescript-react-boilerplate/components/Main.tsx';
import { parseYear } from 'jspm-typescript-react-boilerplate/lib/parse-dates.tsx';

const DATA_FILE = 'data/images.ndjson';

function index(preloadedState: any, body: String): String {
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

function generateRandomBarChartData(n: number, min: number = 0, max: number = 10): number[] {
  const data = [];
  const range = max - min;
  for (const i = 0; i < n; i++) {
    data.push(Math.random(range));
  }
  return data;
}

function generateData() {
  return new Promise((resolve, reject) => {
    const result = [];
    fs
      .createReadStream(DATA_FILE, { autoClose: true })
      .on('close', function() {
        resolve(result);
      })
      .pipe(parse())
      .on('data', function(obj) {
        // obj is a javascript object
        result.push(obj);
      });
  });
}

function parseValidDates(data) {
  return data.map(datum => {
    if (datum.dates) {
      const parsedYear = parseYear(datum.dates);
      if (parsedYear) {
        _.extend(datum, { year: parsedYear });
      }
    }
    return datum;
  });
}

function createServer(init: any[]) {
    const barChartProps = {
      title: 'Some Random Data',
      data: generateRandomBarChartData(40),
      chart: 'loading'
    };

    const body = ReactDOMServer.renderToString(<Main barChart={barChartProps} />);

    const app: express.Application = express();

    app.get('/', (req, res) => {
      res.send(index(barChartProps, body));
    });

    app.use(express.static('.'));
      return app;
}

const port = 9080;

generateData()
  .then(parseValidDates)
  .then(data => {
    const hasYear = data.filter(d => d.year);
    return _.countBy(hasYear, d => d.year);
  })
  .then(createServer)
  .then(app => {
    app.listen(port, () => {
      console.log('Listening on port ', port);
    });
  });
