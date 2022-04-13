import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: [{
      "name": "Initial Name",
      "email": "test@gmail.com",
      "password": "123",
      "loggedIn": false
    }],
    user_logged_in: null,
    errorType: null,
  },
  reducers: {
    login: (state, action) => {
        state.user_logged_in = action.payload
    },
    logout: (state) => {
        state.user_logged_in = null
    },
    register: (state, action) => {
      state.user.map((data) => {
        if (data.name === action.payload.name) {
          state.errorType = "Existing User"
        }else{
          state.user = [...state.user, action.payload]
        }
      })
    },
    authentication: (state, action) => {
      let email = action.payload.email;
      let password = action.payload.password;
      state.user.map((data) => {
        return (data.email == email && data.password == password) ? 
          [state.user_logged_in = action.payload, state.user_logged_in['name'] = data.name, state.errorType = null] : (data.email !== email) ? state.errorType = 'Invalid Credentials' : (data.password !== password) ? state.errorType = 'Invalid Password' : null
      }
      );
    },
    resetAll: (state) => {
      state.errorType = null
    },
    errorMessage: (state, action) => {
      state.errorType = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout, register, authentication, resetAll, errorMessage } = userSlice.actions

export const selectUser = state => state.user.user_logged_in;

export default userSlice.reducer