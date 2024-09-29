



// import axios from 'axios';

// const API_BASE_URL = 'https://dummyjson.com';





// export const fetchCategories = async () => {
//   const url = `${API_BASE_URL}/products/categories`;
//   console.log('Fetching categories from:', url);
//   try {
//     const response = await axios.get(url);
//     console.log('Categories fetched:', response.data);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching categories:', error);
//     throw error;
//   }
// };
// /**
//  * Fetch products from the API.
//  * @param {Object} params - Parameters for fetching products.
//  * @param {string} params.category - Category to filter products by.
//  * @param {string} params.search - Search query for products.
//  * @param {number} [params.limit=10] - Number of products to fetch.
//  * @param {number} [params.skip=0] - Number of products to skip for pagination.
//  * @returns {Promise<Object[]>} - Array of product objects.
//  */
// export const fetchProducts = async ({ category, search, limit = 10, skip = 0 }) => {
//   let url = `${API_BASE_URL}/products`;

//   // Modify the URL if a category is provided
//   if (category) {
//     url += `/category/${category}`;
//   }

//   const params = new URLSearchParams({
//     limit: limit.toString(),
//     skip: skip.toString(),
//   });

//   // Append search query if provided
//   if (search) {
//     params.append('q', search);
//   }

//   url += `?${params.toString()}`;

//   console.log('Fetching products from URL:', url);
//   try {
//     const response = await axios.get(url);
//     console.log('Products fetched:', response.data);

//     // Ensure that all relevant product details are returned
//     return response.data.products.map((product) => ({
//       id: product.id,                // Unique identifier
//       name: product.name,            // Product name
//       price: product.price,          // Product price
//       description: product.description, // Product description
//       category: product.category,     // Product category
//       imageUrl: product.image || product.images[0] || 'https://via.placeholder.com/150', // Fallback to placeholder if image is missing
//       rating: product.rating,         // Product rating
//       stock: product.stock            // Available stock
//     }));
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     throw error;
//   }
// };




// api.js
import axios from 'axios';

const API_BASE_URL = 'https://dummyjson.com';

/**
 * Fetch products from the API.
 * @param {Object} params - Parameters for fetching products.
 * @param {string} params.category - Category to filter products by.
 * @param {string} params.search - Search query for products.
 * @param {number} [params.limit=10] - Number of products to fetch.
 * @param {number} [params.skip=0] - Number of products to skip for pagination.
 * @returns {Promise<Object[]>} - Array of product objects.
 */
export const fetchProducts = async ({ category, search, limit = 10, skip = 0 }) => {
  let url = `${API_BASE_URL}/products`;

  // Modify the URL if a category is provided
  if (category) {
    url += `/category/${category}`;
  }

  const params = new URLSearchParams({
    limit: limit.toString(),
    skip: skip.toString(),
  });

  // Append search query if provided
  if (search) {
    params.append('q', search);
  }

  url += `?${params.toString()}`;

  console.log('Fetching products from URL:', url);
  try {
    const response = await axios.get(url);
    console.log('Products fetched:', response.data);

    // Ensure that all relevant product details are returned
    return response.data.products.map((product) => ({
      id: product.id,                // Unique identifier
      name: product.title,           // Product title (ensure correct key usage)
      price: product.price,          // Product price
      description: product.description, // Product description
      category: product.category,    // Product category
      imageUrl: product.thumbnail || product.images[0] || 'https://via.placeholder.com/150', // Fallback to placeholder if image is missing
      rating: product.rating,        // Product rating
      stock: product.stock           // Available stock
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

/**
 * Fetch categories from the API.
 * @returns {Promise<string[]>} - Array of category names.
 */
export const fetchCategories = async () => {
  const url = `${API_BASE_URL}/products/categories`;
  console.log('Fetching categories from:', url);
  try {
    const response = await axios.get(url);
    console.log('Categories fetched:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};
