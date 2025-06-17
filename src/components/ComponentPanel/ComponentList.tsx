import React from 'react';
import { Component } from '../../types/libraryTypes';
import { ComponentItem } from './ComponentItem';
import VirtualizedList from './VirtualizedList';

interface ComponentListProps {
  components: Component[];
}

const ComponentList: React.FC<ComponentListProps> = ({ components }) => {
  if (components.length > 1000) {
    return (
      <div style={{ height: '500px', overflowY: 'auto' }}>
        <VirtualizedList
          items={components}
          itemHeight={30}
          renderItem={(comp: Component) => <ComponentItem comp={comp} />}
        />
      </div>
    );
  }
  
  return (
    <div style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap' }}>
      {components.map(comp => (
        <div key={comp.Name} style={{ padding: '8px', border: '1px solid #c4c4c4', margin: '0 4px 4px 0', minWidth: '75px' }}>
          {comp.Name}
        </div>
      ))}
    </div>
  );
};

export default ComponentList;