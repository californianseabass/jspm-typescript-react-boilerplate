import React from "react";
import { Route, IndexRoute, replace } from "react-router";

import Base from "../components/base.js";

const authCheck = (nextState, replace) => {
  if (!userState.isAuth) {
    replace({
      pathname: "/login",
    });
  }
};

const routes = (
  <Route path="/" component={Base}>
  </Route>
);

export default routes;
