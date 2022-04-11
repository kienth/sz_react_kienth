import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  // value: 0,
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
      // console.log(state.action);
    },

    addToDo: (state, action) => {
      state.todo = [...state.todo, action.payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToDo, todoListData } = todoSlice.actions

export default todoSlice.reducer