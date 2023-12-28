// frontend/slices/authSlice.ts
import { AuthState } from '../../interfaces/AuthInterface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



const initialState: AuthState = {
    data: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setDetails: (state, action: PayloadAction<any>) => {
            state.data = action.payload;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.data = null;
            state.isAuthenticated = false;
        },
    },
});

export const { setDetails, logout } = authSlice.actions;
export default authSlice.reducer;
