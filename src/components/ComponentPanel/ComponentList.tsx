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
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {components.map(comp => (
        <li key={comp.Name} style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
          {comp.Name}
        </li>
      ))}
    </ul>
  );
};

export default ComponentList;