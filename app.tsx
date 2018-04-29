/* import React from 'react';
 * import ReactDOM from 'react-dom';
 * 
 * 
 * // TODO(sebastian) move to client.tsx and move move root to app
 * import { Root } from 'jspm-typescript-react-boilerplate/components/root.tsx';
 * 
 * 
 * 
 * import { module } from '@hot';
 * 
 * const preloadedState = window.__PRELOADED_STATE__;
 * let container = document.getElementById('app');
 * */
import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'material-ui/Button';

import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
import { MuiThemeProvider, createMuiTheme, createGenerateClassName } from 'material-ui/styles';

import Root, { theme } from 'jspm-typescript-react-boilerplate/components/root.tsx';

export function App(props) {
  const context = {};

  // Create a sheetsRegistry instance.

  const generateClassName = createGenerateClassName();

  return (
    <JssProvider registry={props.sheetsRegistry} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
        <Root />
      </MuiThemeProvider>
    </JssProvider>
  );
}

let container = document.getElementById('app');

const sheetsRegistry = new SheetsRegistry();

let component = ReactDOM.hydrate(<App sheetRegistry={sheetsRegistry} />, container);
