import React from 'react';
import ReactDOM from 'react-dom';

import { HelloWorld } from 'jspm-typescript-react-boilerplate/components/HelloWorld.tsx';

import { module } from '@hot';

let container = document.getElementById('app');
let component = ReactDOM.render(<HelloWorld compiler="ts" />, container);
