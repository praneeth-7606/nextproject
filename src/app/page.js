



"use client"




// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useSearchParams, useRouter } from 'next/navigation'; // Import useRouter
// import CategorySelector from './components/categoryselector';
// import ProductList from './components/productlist';
// import SearchBar from './components/searchbar';
// import { fetchCategories } from './redux/actions/categoryactions';
// import { fetchProducts } from './redux/actions/productactions';
// import 'bootstrap/dist/css/bootstrap.min.css';

// export default function Home() {
//   const dispatch = useDispatch();
//   const searchParams = useSearchParams();
//   const router = useRouter(); // Define router here

//   // Get category and search query params
//   const category = searchParams.get('category') || '';
//   const search = searchParams.get('search') || '';

//   // Fetch categories and products from Redux state
//   const { categories, loading: loadingCategories, error: categoryError } = useSelector((state) => state.categories);
//   const { products, loading: loadingProducts, error: productError } = useSelector((state) => state.products);

//   // Fetch categories on mount
//   useEffect(() => {
//     dispatch(fetchCategories());
//   }, [dispatch]);

//   // Refetch products whenever category or search query changes
//   useEffect(() => {
//     dispatch(fetchProducts({ category, search })); 
//   }, [dispatch, category, search]);

//   // Handle category change and update URL
//   const handleCategoryChange = (newCategory) => {
//     const params = new URLSearchParams(searchParams.toString());
    
//     // Update or remove the category param
//     if (newCategory) {
//       params.set('category', newCategory);
//     } else {
//       params.delete('category');
//     }

//     // Update the URL with new params using router.push
//     router.push(`?${params.toString()}`);
//   };

//   // Handle search term change and update URL
//   const handleSearch = (searchTerm) => {
//     const params = new URLSearchParams(searchParams.toString());

//     // Update or remove the search param
//     if (searchTerm) {
//       params.set('search', searchTerm);
//     } else {
//       params.delete('search');
//     }

//     // Update the URL with new params using router.push
//     router.push(`?${params.toString()}`);
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold mb-8">Product Catalog</h1>
      
//       {/* Category Selector */}
//       <div className="mb-8">
//         <h2 className="text-2xl mb-4">Select Category:</h2>
//         {loadingCategories ? (
//           <div>Loading categories...</div>
//         ) : categoryError ? (
//           <div className="text-red-500">{categoryError}</div>
//         ) : (
//           <CategorySelector
//             categories={categories}
//             selectedCategory={category}
//             onSelectCategory={handleCategoryChange}
//           />
//         )}
//       </div>
// <p></p>
//       {/* Search Bar */}
//       <div className="mb-8 pt-2">
//         <SearchBar onSearch={handleSearch} initialSearch={search} />
//       </div>
// <p></p>
//       {/* Product List */}
//       <ProductList products={products} loading={loadingProducts} />
      
//       {/* Error Message */}
//       {productError && (
//         <div className="text-red-500 mt-4">
//           <p>Error: {productError}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useSearchParams, useRouter } from 'next/navigation'; // Import useRouter
// import CategorySelector from './components/categoryselector';
// import ProductList from './components/productlist';
// import SearchBar from './components/searchbar';
// import { fetchCategories } from './redux/actions/categoryactions';
// import { fetchProducts } from './redux/actions/productactions';
// import 'bootstrap/dist/css/bootstrap.min.css';

// export default function Home() {
//   const dispatch = useDispatch();
//   const searchParams = useSearchParams();
//   const router = useRouter(); // Initialize router

//   // Get category and search params from the URL
//   const category = searchParams.get('category') || '';
//   const search = searchParams.get('search') || '';

//   // Fetch categories and products from the Redux state
//   const { categories, loading: loadingCategories, error: categoryError } = useSelector((state) => state.categories);
//   const { products, loading: loadingProducts, error: productError } = useSelector((state) => state.products);

//   // Fetch categories on component mount
//   useEffect(() => {
//     dispatch(fetchCategories());
//   }, [dispatch]);

//   // Refetch products whenever category or search query changes
//   useEffect(() => {
//     dispatch(fetchProducts({ category, search }));
//   }, [dispatch, category, search]);

//   // Handle category change and update URL
//   const handleCategoryChange = (newCategory) => {
//     const params = new URLSearchParams(searchParams.toString());
    
//     // Update or remove the category param in the URL
//     if (newCategory) {
//       params.set('category', newCategory);
//     } else {
//       params.delete('category');
//     }

//     // Use router.push to navigate with the updated query params
//     router.push(`?${params.toString()}`);
//   };

//   // Handle search input and update URL
//   const handleSearch = (searchTerm) => {
//     const params = new URLSearchParams(searchParams.toString());

//     // Update or remove the search param in the URL
//     if (searchTerm) {
//       params.set('search', searchTerm);
//     } else {
//       params.delete('search');
//     }

//     // Use router.push to update the URL with the search term
//     router.push(`?${params.toString()}`);
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold mb-8">Product Catalog</h1>
      
//       {/* Category Selector */}
//       <div className="mb-8">
//         <h2 className="text-2xl mb-4">Select Category:</h2>
//         {loadingCategories ? (
//           <div>Loading categories...</div>
//         ) : categoryError ? (
//           <div className="text-red-500">{categoryError}</div>
//         ) : (
//           <CategorySelector
//             categories={categories}
//             selectedCategory={category}
//             onSelectCategory={handleCategoryChange}
//           />
//         )}
//       </div>

//       {/* Search Bar */}
//       <div className="mb-8">
//         <SearchBar onSearch={handleSearch} initialSearch={search} />
//       </div>

//       {/* Product List */}
//       <ProductList products={products} loading={loadingProducts} />
      
//       {/* Error Message */}
//       {productError && (
//         <div className="text-red-500 mt-4">
//           <p>Error: {productError}</p>
//         </div>
//       )}
//     </div>
//   );
// }
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams, useRouter } from 'next/navigation';
import CategorySelector from './components/categoryselector';
import ProductList from './components/productlist';
import SearchBar from './components/searchbar';
import { fetchCategories } from './redux/actions/categoryactions';
import { fetchProducts } from './redux/actions/productactions';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const dispatch = useDispatch();
  const searchParams = useSearchParams(); // To manage query params
  const router = useRouter(); // Next.js router for client-side navigation

  // Extract query parameters from the URL
  const category = searchParams.get('category') || '';
  const search = searchParams.get('search') || '';

  // Access state from the Redux store
  const { categories, loading: loadingCategories, error: categoryError } = useSelector((state) => state.categories);
  const { products, loading: loadingProducts, error: productError } = useSelector((state) => state.products);

  // Fetch categories once when the page loads
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // Refetch products when category or search query changes
  useEffect(() => {
    dispatch(fetchProducts({ category, search }));
  }, [dispatch, category, search]);

  // Handle category changes and update URL
  const handleCategoryChange = (newCategory) => {
    const params = new URLSearchParams(searchParams.toString());

    // Update category in query params
    if (newCategory) {
      params.set('category', newCategory);
    } else {
      params.delete('category');
    }

    // Push the updated query parameters to the URL
    router.push(`?${params.toString()}`);
  };

  // Handle search input and update URL with search term
  const handleSearch = (searchTerm) => {
    const params = new URLSearchParams(searchParams.toString());

    // Update search query in URL
    if (searchTerm) {
      params.set('search', searchTerm);
    } else {
      params.delete('search');
    }

    // Push the updated search parameters to the URL
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Product Catalog</h1>

      {/* Category Selector */}
      <div className="mb-8">
        <h2 className="text-2xl mb-4">Select Category:</h2>
        {loadingCategories ? (
          <div>Loading categories...</div>
        ) : categoryError ? (
          <div className="text-red-500">{categoryError}</div>
        ) : (
          <CategorySelector
            categories={categories}
            selectedCategory={category}
            onSelectCategory={handleCategoryChange}
          />
        )}
      </div>

      {/* Search Bar */}
      <p></p>
      <div className="mb-8 pt-3 pb-3">
        <SearchBar onSearch={handleSearch} initialSearch={search} />
      </div>

      {/* Product List */}
      <ProductList products={products} loading={loadingProducts} />

      {/* Error Message */}
      {productError && (
        <div className="text-red-500 mt-4">
          <p>Error: {productError}</p>
        </div>
      )}
    </div>
  );
}
