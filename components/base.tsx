import React, { PropTypes } from "react";
import { Link, IndexLink, browserHistory } from "react-router";
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";

import userState, { logout } from "../stores/user-store";

const logUserOut = () => {
  logout().then(() => {
    browserHistory.replace("/login");
  });
};

const Base = ({ children }) => (
  <div>
    <AppBar
      title="Title"
      iconElementRight={<FlatButton label="Logout" onTouchTap={logUserOut} />}
    />

    {children}

  </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;
