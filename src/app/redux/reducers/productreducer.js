// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   products: [],
//   loading: false,
//   error: null,
// };

// const productSlice = createSlice({
//   name: 'products',
//   initialState,
//   reducers: {
//     fetchProductsStart(state) {
//       state.loading = true;
//       state.error = null;
//     },
//     fetchProductsSuccess(state, action) {
//       state.products = action.payload;
//       state.loading = false;
//     },
//     fetchProductsFailure(state, action) {
//       state.loading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } = productSlice.actions;

// export default productSlice.reducer;


// redux/reducers/productReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess(state, action) {
      state.products = action.payload;
      state.loading = false;
    },
    fetchProductsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } = productSlice.actions;

export default productSlice.reducer;
