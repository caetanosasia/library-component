import React from 'react';
import { CategoryPanelProps } from '../../types/libraryTypes';
import CategoryItem from './CategoryItem';
import SearchInput from '../SearchInput/SearchInput';

const CategoryPanel: React.FC<CategoryPanelProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
  searchTerm,
  onSearchChange
}) => {
  return (
    <div style={{ 
      width: '250px', 
      borderRight: '1px solid #ccc', 
      padding: '16px',
      overflowY: 'auto'
    }}>
      <h2>Categories</h2>
      <SearchInput 
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Search components..."
      />
      
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {categories.map(category => (
          <CategoryItem
            key={category.name}
            category={category}
            isSelected={selectedCategory === category.name}
            onSelect={onCategorySelect}
          />
        ))}
      </ul>
    </div>
  );
};

export default CategoryPanel;