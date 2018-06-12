import React from 'react';
import ReactDOM from 'react-dom';

import { green, red } from 'material-ui/colors';
import { MuiThemeProvider, createMuiTheme, createGenerateClassName } from 'material-ui/styles';
import { IntlProvider, addLocaleData } from 'react-intl';
import { Router, browserHistory } from 'react-router';

import LoginForm from '../components/login-form.tsx';
import SignupForm from '../components/signup-form.tsx';
import userState from '../stores/user-store';


interface RootProps {
    path: string;
}

export const theme = createMuiTheme({
    palette: {
        primary: green,
        type: 'light'
    }
});

const Root = (props: RootProps) => {
    switch (props.path) {
        case '/login':
            return <LoginForm />;
        case '/signup':
            return <SignupForm />;
        default:
            return <h1>404</h1>;
    }
};

export default Root;
