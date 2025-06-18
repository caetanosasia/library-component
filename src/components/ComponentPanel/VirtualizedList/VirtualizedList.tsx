import React, { useState, useRef, useCallback, useLayoutEffect } from 'react';
import { VirtualizedListProps } from '../../../types/libraryTypes';
import styles from './VirtualizedList.module.css';

const VirtualizedList = <T,>({
  items,
  itemHeight,
  itemWidth,
  renderItem,
}: VirtualizedListProps<T> & { itemWidth: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  useLayoutEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.clientWidth);
    }

    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        if (entry.target === containerRef.current) {
          setContainerWidth(entry.contentRect.width);
        }
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  const itemsPerRow = Math.max(1, Math.floor(containerWidth / itemWidth));
  const totalRows = Math.ceil(items.length / itemsPerRow);
  const containerHeight = 500;
  const rowHeight = itemHeight;

  const visibleRowStart = Math.floor(scrollTop / rowHeight);
  const visibleRowEnd = Math.min(
    totalRows - 1,
    Math.floor((scrollTop + containerHeight) / rowHeight)
  );

  const visibleItems = [];
  for (let row = visibleRowStart; row <= visibleRowEnd; row++) {
    for (let col = 0; col < itemsPerRow; col++) {
      const index = row * itemsPerRow + col;
      if (index < items.length) {
        visibleItems.push(items[index]);
      }
    }
  }

  const onScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    if (!target) return;

    const scrollValue = target.scrollTop;
    requestAnimationFrame(() => {
      setScrollTop(scrollValue);
    });
  }, []);

  return (
    <div ref={containerRef} className={styles.container} onScroll={onScroll}>
      <div className={styles.inner} style={{ height: `${totalRows * rowHeight}px` }}>
        <div className={styles.visibleRow} style={{ top: `${visibleRowStart * rowHeight}px` }}>
          {visibleItems.map((item, index) => (
            <div
              key={(item as any).Name || index}
              className={styles.item}
              style={{
                height: `${itemHeight}px`,
                width: `${itemWidth}px`,
              }}
            >
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VirtualizedList;
