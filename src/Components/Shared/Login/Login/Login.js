import React from 'react';
import {Button} from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth';

import initializeAuthentication from '../Firebase/firebase.initialize';
initializeAuthentication();
const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div>
            <h2>Please Log In</h2>
            <Button onClick={signInUsingGoogle} variant="warning">Google SignIn</Button>
        </div>
    );
};

export default Login;