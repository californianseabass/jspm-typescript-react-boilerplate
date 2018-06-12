import React from 'react';
import ReactDOM from 'react-dom';

import { SheetsRegistry } from 'react-jss/lib/jss';

import App from 'jspm-typescript-react-boilerplate/app.tsx';


const container = document.getElementById('app');

const sheetsRegistry = new SheetsRegistry();

console.log(window.__PRELOADED_STATE__);

ReactDOM.hydrate(<App path={window.location.pathname} sheetsRegistry={sheetsRegistry} />, container);
