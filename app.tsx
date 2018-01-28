import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from "react-router";

import { IntlProvider, addLocaleData } from "react-intl";

import { HelloWorld } from 'jspm-typescript-react-boilerplate/components/HelloWorld.tsx';

import routes from 'routes/index.


import { module } from '@hot';

const preloadedState = window.__PRELOADED_STATE__;
let container = document.getElementById('app');
let component = ReactDOM.render(
    <Router history={browserHistory} routes={routes} />,
    container);
