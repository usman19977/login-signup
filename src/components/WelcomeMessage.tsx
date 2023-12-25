import React from 'react';

interface WelcomeMessageProps {
    username: string;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ username }) => {
    return (
        <div>
            <h2>Welcome, {username}!</h2>
            {/* Add any additional content or components for the welcome message */}
        </div>
    );
};

export default WelcomeMessage;
