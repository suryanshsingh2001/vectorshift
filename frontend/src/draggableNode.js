import React, { useState } from 'react';

export const DraggableNode = ({ type, label, icon: Icon }) => {
  const [isDragging, setIsDragging] = useState(false);

  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
    setIsDragging(true);
  };

  return (
    <div
      className={`
        draggable-node cursor-grab bg-gray-700 hover:bg-gray-600 
        transition-all duration-300 ease-in-out rounded-lg p-4 
        flex flex-col items-center justify-center gap-2
        ${isDragging ? 'scale-105 shadow-lg' : 'scale-100 shadow-md'}
        dark:bg-gray-800 dark:hover:bg-gray-700
      `}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={() => setIsDragging(false)}
      draggable
    >
      <Icon className="text-blue-400 w-5 h-5" />
      <span className="text-white text-sm font-medium">{label}</span>
    </div>
  );
};