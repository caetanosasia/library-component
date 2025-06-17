import React from 'react';
import { Component } from '../../types/libraryTypes';

export const ComponentItem = React.memo(({ comp }: { comp: Component }) => (
  <div style={{ padding: '8px', borderBottom: '1px solid #eee' }}>{comp.Name}</div>
));
