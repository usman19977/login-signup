
import React from 'react';
import '../../styles/signup.scss';
import SignInForm from '../../components/SignupForm';
const SignUpPage: React.FC = () => {

    return (
        <div className='container'>

            <section id="entry-page">
                <SignInForm />
            </section>
        </div>
    );
};

export default SignUpPage;
