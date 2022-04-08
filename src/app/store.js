import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import todoReducer from './todo';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },
})