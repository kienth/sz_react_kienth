import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import todoReducer from './todo';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    counter: counterReducer,
    user: userReducer,
  },
})