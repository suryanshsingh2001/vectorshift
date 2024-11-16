// frontend/src/toolbar.js

import React from 'react';
import { nodeConfig } from './lib/nodeConfig';
import { DraggableNode } from './components/shared/draggableNode';
export const PipelineToolbar = () => {
  return (
    <div className="flex space-x-2 bg-base-100 p-2 rounded-lg shadow-lg">
      {nodeConfig.map(({ type, label, icon: IconComponent }) => (
        <DraggableNode key={type} type={type} label={label} icon={IconComponent} />
      ))}
    </div>
  );
};