
import React from 'react';
import '../../styles/login.scss';
import LoginForm from '../../components/LoginForm';
const SignInPage: React.FC = () => {

    return (
        <div className='container'>

            <section id="entry-page">
                <LoginForm />
            </section>

        </div>
    );
};

export default SignInPage;
