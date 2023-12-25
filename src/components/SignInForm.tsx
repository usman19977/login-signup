import React from 'react';



const SignInForm: React.FC = () => {
    // TODO:: Implementation of sign in form logic here
    return (
        <form>


            <div className="input">
                <img src='' alt='' />
                <input type="email" />
            </div>

            <div className="input">
                <img src='' alt='' />
                <input type="password" />
            </div>
            <div className="forget-password"> Lost Password ? <span> Click Here</span></div>
            <div className="submit-container">
                <div className="submit"> Sign Up </div>
                <div className="submit">Login</div>
            </div>
        </form>
    );
};

export default SignInForm;
