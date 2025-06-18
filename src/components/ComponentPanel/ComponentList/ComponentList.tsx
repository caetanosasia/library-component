import { FC } from 'react';
import { Component } from '../../../types/libraryTypes';
import { ComponentItem } from '../ComponentItem/ComponentItem';
import VirtualizedList from '../VirtualizedList/VirtualizedList';
import styles from './ComponentList.module.css';

interface ComponentListProps {
  components: Component[];
}

const ComponentList: FC<ComponentListProps> = ({ components }) => {
  if (components.length > 100) {
    return (
      <div className={styles.virtualizedWrapper}>
        <VirtualizedList
          items={components}
          itemWidth={150}
          itemHeight={45}
          renderItem={(comp: Component) => <ComponentItem comp={comp} />}
        />
      </div>
    );
  }

  return (
    <div className={styles.staticList}>
      {components.map(comp => (
        <div key={comp.Name} className={styles.staticItem}>
          {comp.Name}
        </div>
      ))}
    </div>
  );
};

export default ComponentList;
