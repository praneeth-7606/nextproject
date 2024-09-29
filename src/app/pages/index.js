
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import CategorySelector from '../components/categoryselector';
import ProductList from '../components/productlist';
import SearchBar from '../components/searchbar';
// import { fetchCategories } from '../utils/api';
// import { fetchProducts } from '../utils/api';
import { fetchCategories,fetchProducts } from '../redux/actions/categoryactions';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();
  
  const { category, search } = router.query;

  const { categories } = useSelector((state) => state.categories);
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProducts({ category, search }));
  }, [dispatch, category, search]);

  const handleCategoryChange = (newCategory) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, category: newCategory },
    });
  };

  const handleSearch = (searchTerm) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, search: searchTerm },
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Product Catalog</h1>
      <div className="mb-8">
        <CategorySelector
          categories={categories}
          selectedCategory={category}
          onSelectCategory={handleCategoryChange}
        />
      </div>
      <div className="mb-8">
        <SearchBar onSearch={handleSearch} initialSearch={search} />
      </div>
      <ProductList products={products} loading={loading} />
      {error && (
        <div className="text-red-500 mt-4">
          <p>Error: {error}</p>
        </div>
      )}
    </div>
  );
}