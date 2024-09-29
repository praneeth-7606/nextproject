
// import { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } from '../reducers/productreducer';
// import { fetchProducts as apiFetchProducts } from '../../utils/api';

// export const fetchProducts = ({ category, search, limit = 10, skip = 0 }) => async (dispatch) => {
//   try {
//     console.log('Fetching products with params:', { category, search, limit, skip });
    
//     dispatch(fetchProductsStart()); // Dispatch the start of the fetching process
    
//     // Construct the URL based on category or search
//     let products;
//     if (search) {
//       // If search term is provided, use the search endpoint
//       products = await apiFetchProducts({ search, limit });
//     } else if (category) {
//       // If category is provided, use the category endpoint
//       products = await apiFetchProducts({ category, limit });
//     } else {
//       // Default to fetching all products if neither is provided
//       products = await apiFetchProducts({ limit, skip });
//     }
    
//     console.log('Products fetched successfully:', products);
//     dispatch(fetchProductsSuccess(products)); // Dispatch success action with fetched products
//   } catch (error) {
//     console.error('Error in fetchProducts action:', error);
//     dispatch(fetchProductsFailure(error.message)); // Dispatch failure action with error message
//   }
// };
import { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } from '../reducers/productreducer';
import { fetchProducts as apiFetchProducts } from '../../utils/api';

export const fetchProducts = ({ category, search, limit = 10, skip = 0 }) => async (dispatch) => {
  try {
    dispatch(fetchProductsStart());

    // Build the parameters for the API request
    const params = {};
    if (search) {
      params.search = search; // Include search parameter if available
    }
    if (category) {
      params.category = category; // Include category parameter if available
    }

    const products = await apiFetchProducts(params); // Pass parameters to API function
    dispatch(fetchProductsSuccess(products));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};
