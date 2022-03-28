import { createSlice, nanoid } from '@reduxjs/toolkit'

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
      let total = state.value;
      state.cart = state.cart.map((item) =>
          item.cartid == id ? { ...item, qty: item.qty += 1, subtotal: item.qty * item.price } : item
      );
    },

    decrement: (state, action) => {
      let id = action.payload.id; 
      state.cart = state.cart.map((item) =>
          item.cartid == id && item.qty > 1 ? { ...item, qty: item.qty -= 1, subtotal: item.qty * item.price } : item
      );
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload
    },

    setProductsList: (state, action) => {
      state.products = action.payload;
    },

    // addToCart: (state, action) => {
    //   let newItem = action.payload;
    //   var exist = state.cart.find((cart) => cart.id === newItem.id);
    //   console.log(state.cart.length+1);
    //   if(exist){
    //     state.cart = state.cart.map((item) =>
    //       item.id == newItem.id ? { ...item, qty: item.qty += 1, subtotal: item.qty * item.price } : item
    //     );
    //   }else{
    //     state.cart = [...state.cart, action.payload]
    //   }
      
    // },
    addToCart: {
      reducer: (state, action) => {
        state.cart.push(action.payload);
      },
      prepare: (value) => {
        console.log(value);
        return {
          payload: {
            ...value,
            cartid: nanoid()
          }
        }
      }
    },

    removeToCart: (state, action) => {
      let id = action.payload.id;
      state.cart = state.cart.filter((item) => item.cartid !== id);
    },

    emptyCart: (state) => {
      state.cart = [];
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, setProductsList, addToCart, removeToCart, emptyCart } = counterSlice.actions

export default counterSlice.reducer