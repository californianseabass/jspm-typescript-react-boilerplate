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

import JssProvider from 'react-jss/lib/JssProvider';
import { MuiThemeProvider, createGenerateClassName } from 'material-ui/styles';

import Root, { theme } from 'jspm-typescript-react-boilerplate/components/root.tsx';

function App(props) {
    // Create a sheetsRegistry instance.
    const generateClassName = createGenerateClassName();

    return (
        <JssProvider registry={props.sheetsRegistry} generateClassName={generateClassName}>
            <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
                <Root path={props.path} />
            </MuiThemeProvider>
        </JssProvider>
    );
}

export default App;
