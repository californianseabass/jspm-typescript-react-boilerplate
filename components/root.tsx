import React from 'react';
import ReactDOM from 'react-dom';

import { green, red } from 'material-ui/colors';
import { MuiThemeProvider, createMuiTheme, createGenerateClassName } from 'material-ui/styles';
import { IntlProvider, addLocaleData } from 'react-intl';
import { Router, browserHistory } from 'react-router';

import Button from 'material-ui/Button';
import userState from '../stores/user-store.ts';

import LoginForm from 'components/login-form.tsx';

const authCheck = (nextState, replace) => {
  if (!userState.isAuth) {
    replace({
      pathname: '/login'
    });
  }
};

export const theme = createMuiTheme({
  palette: {
    primary: green,
    type: 'light'
  }
});

export default () => {
  if (!userState.isAuth) {
    return <LoginForm />;
  } else {
    return (
      <Button variant="raised" color="primary">
        Hello World
      </Button>
    );
  }
};
