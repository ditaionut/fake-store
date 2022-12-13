import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    filterCategory: "all",
  },
  reducers: {
    addProducts: (state, action) => {
      state.products = action.payload;
    },
    addCategory: (state, action) => {
      state.filterCategory = action.payload;
    },
  },
});

export const selectProducts = (state) => state.products.products;
export const filteredCategory = (state) => state.products.filterCategory;
export const { addProducts, addCategory } = productSlice.actions;
export default productSlice.reducer;
