// frontend/slices/authSlice.ts
import { LoadingState } from '../../interfaces/LoaderInterface';
import { createSlice } from '@reduxjs/toolkit';



const initialState: LoadingState = {

    isLoading: false,
};

const loadingSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoading: (state = initialState, action) => {
            const loading = action.payload;
            return { ...state, isLoading: loading };
        },

    },
});

export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
