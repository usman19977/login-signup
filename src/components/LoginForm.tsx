import React from 'react';

import { useNavigate } from 'react-router-dom';
import { SIGNUP } from '../constants/routes';

const LoginForm: React.FC = () => {

    const navigate = useNavigate();

    // TODO:: Implementation of sign in form logic here
    return (
        <form>
            <h2>Welcome Back!</h2>
            <fieldset>
                <legend>Log In</legend>
                <ul>
                    <li>
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" required />
                    </li>
                    <li>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" required />
                    </li>

                </ul>
            </fieldset>
            <button>Login</button>
            <button type="button" onClick={() => navigate(SIGNUP)}>Create an Account</button>
        </form>
    );
};

export default LoginForm;