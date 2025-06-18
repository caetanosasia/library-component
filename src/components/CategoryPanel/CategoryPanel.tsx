import React from 'react';
import { CategoryPanelProps } from '../../types/libraryTypes';
import CategoryItem from './CategoryItem/CategoryItem';
import styles from './CategoryPanel.module.css';

const CategoryPanel: React.FC<CategoryPanelProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
}) => {
  return (
    <div className={styles.panel}>
      <h2 className={styles.title}>Categories</h2>
      <ul className={styles.list}>
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
