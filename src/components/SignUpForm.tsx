import React from 'react';

import { useNavigate } from 'react-router-dom';
import { LOGIN } from '../constants/routes';

const SignInForm: React.FC = () => {

    const navigate = useNavigate();

    // TODO:: Implementation of sign in form logic here
    return (
        <form>
            <h2>Sign Up!</h2>
            <fieldset>
                <legend>Create Account</legend>
                <ul>
                    <li>
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" required />
                    </li>
                    <li>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" required />
                    </li>
                    <li>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" required />
                    </li>
                </ul>
            </fieldset>
            <button>Register</button>
            <button type="button" onClick={() => { navigate(LOGIN) }}>Have an Account?</button>
        </form>
    );
};

export default SignInForm;