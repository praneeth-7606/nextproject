// import { configureStore } from '@reduxjs/toolkit';
// import categoryReducer from './reducers/categoryreducer';
// import productReducer from './reducers/productreducer';

// export const store = configureStore({
//   reducer: {
//     categories: categoryReducer,
//     products: productReducer,
//   },
// });


import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './reducers/categoryreducer';
import productReducer from './reducers/productreducer';

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    products: productReducer,
  },
});

export default store;
