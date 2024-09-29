import React from 'react';
import { Button } from 'react-bootstrap'; // Import Bootstrap Button component

const CategorySelector = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="d-flex flex-wrap gap-2">
      <Button
        variant={!selectedCategory ? 'primary' : 'secondary'} // Use Bootstrap variant for button styling
        onClick={() => onSelectCategory(null)}
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category.slug}
          variant={category.slug === selectedCategory ? 'primary' : 'secondary'} // Highlight selected category
          onClick={() => onSelectCategory(category.slug)}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
};

export default CategorySelector;




