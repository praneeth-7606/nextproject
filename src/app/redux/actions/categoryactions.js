


// import { fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFailure } from '../reducers/categoryreducer';
// import { fetchCategories as apiFetchCategories } from '../../utils/api';

// export const fetchCategories = () => async (dispatch) => {
//   try {
//     dispatch(fetchCategoriesStart());
//     const categoriesData = await apiFetchCategories();
//     console.log('Fetched Categories Data:', categoriesData); // Log the fetched data

//     // Check if categoriesData is an array
//     if (!Array.isArray(categoriesData)) {
//       throw new Error('Expected categoriesData to be an array');
//     }

//     const categories = categoriesData.map((category) => {
//       // Ensure each category is an object and has a name property
//       if (typeof category === 'object' && category !== null && category.name) {
//         return {
//           slug: category.name, // Assuming 'name' is a string
//           name: category.name.charAt(0).toUpperCase() + category.name.slice(1),
//           url: `/category/${category.name}`
//         };
//       } else {
//         throw new Error('Invalid category format');
//       }
//     });

//     dispatch(fetchCategoriesSuccess(categories));
//   } catch (error) {
//     console.error('Error fetching categories:', error); // Log the error for debugging
//     dispatch(fetchCategoriesFailure(error.message));
//   }
// };



import { fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFailure } from '../reducers/categoryreducer';
import { fetchCategories as apiFetchCategories } from '../../utils/api';

export const fetchCategories = () => async (dispatch) => {
  try {
    dispatch(fetchCategoriesStart());
    const categoriesData = await apiFetchCategories();
    console.log('Fetched Categories Data:', categoriesData); // Log the fetched data

    // Check if categoriesData is an array
    if (!Array.isArray(categoriesData)) {
      throw new Error('Expected categoriesData to be an array');
    }

    const categories = categoriesData.map((category) => {
      // Ensure each category is an object and has a name property
      if (typeof category === 'object' && category !== null && category.name) {
        return {
          slug: category.name, // Assuming 'name' is a string
          name: category.name.charAt(0).toUpperCase() + category.name.slice(1),
          url: `/category/${category.name}`
        };
      } else {
        throw new Error('Invalid category format');
      }
    });

    dispatch(fetchCategoriesSuccess(categories));
  } catch (error) {
    console.error('Error fetching categories:', error); // Log the error for debugging
    dispatch(fetchCategoriesFailure(error.message));
  }
};
