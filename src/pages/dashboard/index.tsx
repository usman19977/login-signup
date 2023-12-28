import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useAppDispatch } from '../../store/hook/usedispatch.hook';
import { logoutUserAction } from '../../store/auth/auth.actions';

const Home: React.FC = () => {
    const { data } = useSelector((state: RootState) => state.auth);
    const dispatch = useAppDispatch();
    const handleSignOut = () => {
        dispatch(logoutUserAction())
    }
    return (
        <>
            <h1>Welcome , <br></br><b  > <p style={{ color: 'green' }}>{data.name} </p></b> to the application</h1>

            <button onClick={handleSignOut}>
                Sign Out
            </button>
        </>
    );
};

export default Home;
