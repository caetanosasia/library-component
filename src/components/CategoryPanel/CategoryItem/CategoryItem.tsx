import React, { FC } from 'react';
import { CategoryItemProps } from '../../../types/libraryTypes';
import styles from './CategoryItem.module.css';
import clsx from 'clsx';

const CategoryItem: FC<CategoryItemProps> = React.memo(({ category, isSelected, onSelect }) => (
  <li
    className={clsx(styles.item, isSelected && styles.selected)}
    onClick={() => onSelect(category.name)}
  >
    <span>{category.name}</span>
    <span className={styles.count}>({category.filteredCount})</span>
  </li>
));

export default CategoryItem;
