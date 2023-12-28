
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth.slice';
import loadReducer from './loading/loading.slice';


const store = configureStore({
    reducer: {
        auth: authReducer,
        loader: loadReducer
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store