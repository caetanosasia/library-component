import { FC } from 'react';
import { ComponentPanelProps } from '../../types/libraryTypes';
import ComponentList from './ComponentList/ComponentList';

const ComponentPanel: FC<ComponentPanelProps> = ({
  selectedCategory,
  components
}) => {
  return (
    <div style={{ flex: 1, padding: '16px' }}>
      <h2>
        {selectedCategory
          ? `Components in ${selectedCategory} (${components.length})`
          : 'Select a category'}
      </h2>
      {selectedCategory && <ComponentList components={components} />}
    </div>
  );
};

export default ComponentPanel;