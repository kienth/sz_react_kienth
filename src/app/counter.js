import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  cart: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      let id = action.payload.id;
      state.cart = state.cart.map((item) =>
          item.id == id ? { ...item, qty: item.qty += 1, subtotal: item.qty * item.price } : item
      );
    },
    
    decrement: (state, action) => {
      let id = action.payload.id; 
      state.cart = state.cart.map((item) =>
          item.id == id && item.qty > 1 ? { ...item, qty: item.qty -= 1, subtotal: item.qty * item.price } : item
      );
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload
    },

    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload]
    },

    removeToCart: (state, action) => {
      let id = action.payload.id;
      state.cart = state.cart.filter((item) => item.id !== id);
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, addToCart, removeToCart } = counterSlice.actions

export default counterSlice.reducer