import React, { useState } from 'react';
import { VirtualizedListProps } from '../../types/libraryTypes';

const VirtualizedList = <T,>({ 
  items, 
  itemHeight, 
  renderItem 
}: VirtualizedListProps<T>) => {
  const [scrollTop, setScrollTop] = useState<number>(0);
  const containerHeight = 500;
  const innerHeight = items.length * itemHeight;
  
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    items.length - 1,
    Math.floor((scrollTop + containerHeight) / itemHeight)
  );

  const visibleItems = items.slice(startIndex, endIndex + 1);

  return (
    <div 
      style={{ 
        height: `${containerHeight}px`, 
        overflowY: 'auto',
        position: 'relative'
      }}
      onScroll={e => setScrollTop(e.currentTarget.scrollTop)}
    >
      <div style={{ height: `${innerHeight}px` }}>
        <div style={{
          position: 'absolute',
          top: `${startIndex * itemHeight}px`,
          width: '100%'
        }}>
          {visibleItems.map((item, index) => (
            <div key={index} style={{ height: `${itemHeight}px` }}>
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VirtualizedList;