
import React from 'react';
import SignInForm from '../../components/SignInForm';

const SignInPage: React.FC = () => {
    return (
        <div className='container'>
            <div className="header">
                <div className="text">Sign In</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <SignInForm />
            </div>
        </div>
    );
};

export default SignInPage;
