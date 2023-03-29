import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
      console.log({ state, action });
      state.items = [
        ...state.items.filter((item) => item.id !== action.payload),
      ];
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const selectItems = (state) => state.cart.items;
export const selectTotal = (state) =>
  state.cart.items.reduce((a, b) => a + b.price, 0);
export default cartSlice.reducer;
