import React from 'react';
import { observer } from 'mobx-react';
import { observable, autorun, action } from 'mobx';
// import { Link, browserHistory } from 'react-router';
import Card, { CardHeader } from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';

import userState, { login } from '../stores/user-store';

// https://vladimirponomarev.com/blog/authentication-in-react-apps-creating-components
function onSubmit(event) {
    event.preventDefault();
    login().then(res => {
        // browserHistory.push('/');
    });
}

function onChange(userState, event) {
    const field = event.target.id;
    userState.user[field] = event.target.value;
}

const LoginForm = () => {
    return (
        <Card className="container">
            <CardHeader title="login card" />
            <div>
                <TextField
                    name="email"
                    id="email"
                    placeholder="Email"
                    margin="normal"
                    onChange={e => onChange(userState, e)}
                />
                <br />
                <TextField
                    name="password"
                    id="password"
                    placeholder="Password"
                    margin="normal"
                    onChange={e => onChange(userState, e)}
                />
            </div>
            <Button variant="raised" color="primary">
                Login
            </Button>
            <Button variant="raised" href="/signup">
                Need an Account? Sign Up
            </Button>

        </Card>
    );
};

export default observer(LoginForm);

/* 
 * return (
 *         <Card className="container">
 *             <form action="/" onSubmit={onSubmit}>
 *                 <h2 className="card-heading">Login</h2>
 * 
 *                 {userState.errors.summary &&
 *                     <p className="error-message">{errors.summary}</p>}
 *                 o
 * 
 *                 <div className="field-line">
 *                     <TextField
 *                         floatingLabelText="Email"
 *                         name="email"
 *                         errorText={userState.errors.email}
 *                         onChange={onChange}
 *                         value={userState.user.email}
 *                     />
 *                 </div>
 * 
 *                 <div className="field-line">
 *                     <TextField
 *                         floatingLabelText="Password"
 *                         type="password"
 *                         name="password"
 *                         onChange={onChange}
 *                         errorText={userState.errors.password}
 *                         value={userState.user.password}
 *                     />
 *                 </div>
 * 
 *                 <div className="button-line">
 *                     <Button variant="raised" type="submit" label="Log in" primary />
 *                 </div>
 * 
 *                 <CardText>
 *                     Don't have an account? <Link to={"/signup"}>Create one</Link>.
 *         </CardText>
 *             </form>
 *         </Card>
 *     )*/
