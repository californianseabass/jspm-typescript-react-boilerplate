import React from 'react';
import ReactDOM from 'react-dom';

import { HelloWorld } from 'jspm-typescript-react-boilerplate/components/HelloWorld.tsx';

import { module } from '@hot';

const preloadedState = window.__PRELOADED_STATE__;
let container = document.getElementById('app');
let component = ReactDOM.render(<HelloWorld compiler={preloadedState.name} />, container);
