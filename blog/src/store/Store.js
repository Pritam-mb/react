import {configureStore} from '@reduxjs/toolkit';

import authReducer from '../store/Authslice'
export const store =configureStore({
    reducer: {
        auth: authReducer

    } // reducers list
});