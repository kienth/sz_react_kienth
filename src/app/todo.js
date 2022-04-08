import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  todo: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addToDo: (state, action) => {
        state.todo = [...state.todo, action.payload]
    },

    removeToDo: (state, action) => {
      let id = action.payload.id;
      state.todo = state.todo.filter((todo) => todo.id !== id);
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToDo, removeToDo } = counterSlice.actions

export default counterSlice.reducer