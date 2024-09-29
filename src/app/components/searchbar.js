import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap'; // Import Bootstrap components

const SearchBar = ({ onSearch, initialSearch }) => {
  const [searchTerm, setSearchTerm] = useState(initialSearch || ''); // Initialize with the provided search term

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm); // Trigger the search function with the current search term
  };

  return (
    <Form onSubmit={handleSubmit} className="search-bar d-flex">
      <FormControl
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search products..."
        className="me-2" // Adds margin to the right of the input
      />
      <Button type="submit" variant="primary">Search</Button>
    </Form>
  );
};

export default SearchBar;


