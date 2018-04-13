import React from 'react';
import ReactDOM from 'react-dom';

import { IntlProvider, addLocaleData } from "react-intl";
import { Router, browserHistory } from 'react-router';
import userState from '../stores/user-store.ts';

import routes from 'routes/index.tsx';

const authCheck = (nextState, replace) => {
    if (!userState.isAuth) {
        replace({
            pathname: "/login",
        });
    }
};


export const Root = () => {
    if (!userState.isAuth) {
        return <div> other wise </div>;
    } else {
        return <div>Que tal quetzal</div>;
    }
}