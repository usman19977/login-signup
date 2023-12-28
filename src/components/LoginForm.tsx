import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { SIGNUP } from '../constants/routes';
import { userLoginAuthAction } from '../store/auth/auth.actions';
import { useAppDispatch } from '../store/hook/usedispatch.hook';
const LoginForm: React.FC = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        // Preventing the page from reloading
        event.preventDefault();
        dispatch(userLoginAuthAction({ username: username, password: password }));

    }

    // TODO:: Implementation of sign in form logic here
    return (
        <form onSubmit={submitForm}>
            <h2>Welcome Back!</h2>
            <fieldset>
                <legend>Log In</legend>
                <ul>
                    <li>
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </li>
                    <li>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </li>

                </ul>
            </fieldset>
            <button>Login</button>
            <button type="button" onClick={() => navigate(SIGNUP)}>Create an Account</button>
        </form>
    );
};

export default LoginForm;


