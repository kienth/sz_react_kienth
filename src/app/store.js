import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import todoReducer from './todo';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    counter: counterReducer,
  },
})