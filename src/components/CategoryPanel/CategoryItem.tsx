import React from 'react';
import { CategoryItemProps } from '../../types/libraryTypes';

const CategoryItem: React.FC<CategoryItemProps> = React.memo(({ 
  category, 
  isSelected, 
  onSelect 
}) => (
  <li
    style={{
      padding: '8px',
      cursor: 'pointer',
      backgroundColor: isSelected ? '#6b95e9' : 'transparent',
      display: 'flex',
    }}
    onClick={() => onSelect(category.name)}
  >
    <span>{category.name}</span>
    <span style={{marginLeft: '5px'}}>({category.filteredCount})</span>
  </li>
));

export default CategoryItem;