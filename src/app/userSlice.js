import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState:{
    user:null
    },
    reducer: {
        login: (state, action) => {
            state.user = action.payload
        },
        logout: (state, action) => {
            state.user = null
        },
    }
})

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions

export const selectUser = state => state.user.user;

export default userSlice.reducer