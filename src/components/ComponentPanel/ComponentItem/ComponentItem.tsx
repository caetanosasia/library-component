import React from 'react';
import { Component } from '../../../types/libraryTypes';
import styles from './ComponentItem.module.css';

export const ComponentItem = React.memo(({ comp }: { comp: Component }) => (
  <div className={styles.item}>{comp.Name}</div>
));
