import React, { useState } from 'react';
import { Grid, Pagination, Box } from '@mui/material'; // Material-UI components
import ProductCard from './productcard'; // Ensure the casing matches your filename

const ProductList = ({ products, loading }) => {
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const productsPerPage = 8; // Number of products per page

  // Calculate the products for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  if (loading) {
    return <div className="text-center">Loading products...</div>;
  }

  if (products.length === 0) {
    return <div className="text-center">No products found.</div>;
  }

  return (
    <Box>
      {/* Grid Layout */}
      <Grid container spacing={3}>
        {currentProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      <Box display="flex" justifyContent="center" marginTop={4}>
        <Pagination
          count={Math.ceil(products.length / productsPerPage)} // Total number of pages
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          size="large"
        />
      </Box>
    </Box>
  );
};

export default ProductList;
