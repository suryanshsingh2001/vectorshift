import { Circle } from 'lucide-react';
import React, { useState } from 'react';

export const DraggableNode = ({ type, label, icon: IconComponent = null  }) => {
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
        draggable-node cursor-grab bg-white hover:bg-gray-200 
        transition-all duration-300 ease-in-out rounded-2xl p-4
        space-x-0.5 w-20 h-20
        flex flex-col items-center justify-center gap-2 shadow-md
        ${isDragging ? 'scale-105 shadow-lg' : 'scale-100'}
      `}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={() => setIsDragging(false)}
      draggable
    >

      {IconComponent ?
        <IconComponent className="text-gray-600 w-6 h-6" /> : <Circle className="text-gray-600 w-6 h-6" />

      }
      <span className="text-gray-700 text-xs font-medium">{label}</span>
    </div>
  );
};