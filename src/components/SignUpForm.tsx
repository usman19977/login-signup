import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { LOGIN } from '../constants/routes';
import { userRegisterAction } from '../store/auth/auth.actions';
import { useAppDispatch } from '../store/hook/usedispatch.hook';

const SignInForm: React.FC = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        // Preventing the page from reloading
        event.preventDefault();
        if (!passwordError) {
            dispatch(userRegisterAction({ name: name, email: email, password: password }));
        }


    }

    useEffect(() => {
        const validatePassword = () => {
            // Minimum length of 8 characters
            // Contains at least 1 letter
            // Contains at least 1 number
            // Contains at least 1 special character
            const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

            if (!password) {
                setPasswordError('Password is required');
            } else if (password.length < 8) {
                setPasswordError('Password must be at least 8 characters');
            } else if (!regex.test(password)) {
                setPasswordError('Password must contain at least 1 letter, 1 number, and 1 special character');
            } else {
                setPasswordError('');
            }
        };
        validatePassword();
    }, [password]);



    return (
        <form onSubmit={submitForm}>
            <h2>Sign Up!</h2>
            <fieldset>
                <legend>Create Account</legend>
                <ul>
                    <li>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" required onChange={(e) => setName(e.target.value)} />
                    </li>
                    <li>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" required onChange={(e) => setEmail(e.target.value)} />
                    </li>
                    <li>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" required onChange={(e) => setPassword(e.target.value)} />
                        {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}

                    </li>
                </ul>
            </fieldset>
            <button>Register</button>
            <button type="button" onClick={() => { navigate(LOGIN) }}>Have an Account?</button>
        </form>
    );
};

export default SignInForm;