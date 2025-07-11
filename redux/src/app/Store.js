import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/Todoslice'
export const store =configureStore({
    reducer: todoReducer // reducers list
})

// make store 1st...always 1 store
// store has to provide details about changing in reducers so we make slice where we made reducers