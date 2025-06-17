import React from 'react';
import { CategoryPanelProps } from '../../types/libraryTypes';
import CategoryItem from './CategoryItem';

const CategoryPanel: React.FC<CategoryPanelProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
}) => {
  return (
    <div style={{ 
      padding: '16px 16px 0 0',
      width: '200px',
      overflowY: 'auto'
    }}>

      
      <h2>Categories</h2>
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