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
      backgroundColor: isSelected ? '#eee' : 'transparent',
      display: 'flex',
      justifyContent: 'space-between'
    }}
    onClick={() => onSelect(category.name)}
  >
    <span>{category.name}</span>
    <span>({category.filteredCount})</span>
  </li>
));

export default CategoryItem;