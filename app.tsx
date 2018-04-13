import React from 'react';
import { hydrate } from 'react-dom';
import ReactDOM from 'react-dom';


// TODO(sebastian) move to client.tsx and move move root to app
import { Root } from 'jspm-typescript-react-boilerplate/components/root.tsx';



import { module } from '@hot';

const preloadedState = window.__PRELOADED_STATE__;
let container = document.getElementById('app');

let component = hydrate(
    <Root />,
    container
);
