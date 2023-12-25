import React from 'react';

const SignUpForm: React.FC = () => {
    // TODO:: Implementation of sign up form logic here
    return (
        <form>
            <label>Email:</label>
            <input type="email" />
            <label>Password:</label>
            <input type="password" />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUpForm;
