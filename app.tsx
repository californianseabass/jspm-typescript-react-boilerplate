import React from 'react';
import ReactDOM from 'react-dom';

import Main, { MainProps } from 'jspm-typescript-react-boilerplate/components/Main.tsx';

import { module } from '@hot';

const preloadedState = window.__PRELOADED_STATE__;
let container = document.getElementById('app');
let component = ReactDOM.render(<Main barChart={preloadedState} />, container);
