import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import CategorySelector from '../components/CategorySelector';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import { fetchCategories } from '../redux/actions/categoryActions';
import { fetchProducts } from '../redux/actions/productActions';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { category, search } = router.query;

  const { categories } = useSelector((state) => state.categories);
  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProducts({ category, search }));
  }, [dispatch, category, search]);

  const handleCategoryChange = (newCategory) => {
    router.push({
      pathname: '/',
      query: { ...router.query, category: newCategory },
    });
  };

  const handleSearch = (searchTerm) => {
    router.push({
      pathname: '/',
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
    </div>
  );
}