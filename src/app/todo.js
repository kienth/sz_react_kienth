import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 4,
  todo: [{
    "id": 1,
    "task": "Give dog a bath",
    "complete": true
  }, {
    "id": 2,
    "task": "Do laundry",
    "complete": true
  }, {
    "id": 3,
    "task": "Vacuum floor",
    "complete": false
  }],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    todoListData: (state, action) => {
      state.todo = action.payload;
    },

    addToDo: (state, action) => {
      state.todo = [...state.todo, action.payload]
      state.value += 1
    },

    removeToDo: (state, action) => {
      let id = action.payload.id;
      state.todo = state.todo.filter((item) => item.id !== id);
    },

    completeToDo: (state, action) => {
      let id = action.payload.id;
      state.todo = state.todo.map((item) =>
          item.id == id ? { ...item, complete: true, } : item
      );
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToDo, todoListData, removeToDo, completeToDo } = todoSlice.actions

export default todoSlice.reducer