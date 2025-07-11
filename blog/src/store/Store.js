import {configureStore} from '@reduxjs/toolkit';

import authReducer from '../store/Authslice'
export const store =configureStore({
    reducer: { authReducer

    } // reducers list
});