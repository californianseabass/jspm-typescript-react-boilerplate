import React from 'react';
import Card, { CardHeader } from 'material-ui/Card';
import userState from '../stores/user-store';


const SignupForm = () => {
    return (
        <Card className="container">
            <CardHeader title="signup card" />
            {userState.errors.summary &&
                <p className="error-message">userState.errors.summary</p>}
        </Card>
    );
}

export default SignupForm;
