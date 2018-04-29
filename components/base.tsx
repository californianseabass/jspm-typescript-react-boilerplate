import React, { PropTypes } from 'react';
import { Link, IndexLink, browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';

import userState, { logout } from '../stores/user-store';

const logUserOut = () => {
  logout().then(() => {
    browserHistory.replace('/login');
  });
};

const Base = ({ children }) => (
  <div>
    <AppBar title="Title" iconElementRight={<Button variant="flat" label="Logout" onTouchTap={logUserOut} />} />

    {children}
  </div>
);

export default Base;
