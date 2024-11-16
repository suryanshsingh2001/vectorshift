import React, { useState } from 'react';

export function DraggableNode({ type, label, icon: IconComponent, category, description }) {
  const [isDragging, setIsDragging] = useState(false)
  console.log(description)

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify({ nodeType }))
    event.dataTransfer.effectAllowed = 'move'
    setIsDragging(true)
  }

  return (
    <div
      data-tip={description}
      className={`
        tooltip
        tooltip-bottom
        draggable-node cursor-grab bg-white hover:bg-base-200 transition-all duration-300 ease-in-out rounded-lg p-2 w-24 h-22 space-x-0.5
        flex flex-col items-center justify-center gap-2 shadow-sm hover:shadow-md
        ${isDragging ? 'ring-2 ring-primary' : ''}
      `}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={() => setIsDragging(false)}
      draggable
    >

      <div className="rounded-full bg-primary/10 p-2" >
        <IconComponent className="text-primary w-6 h-6" />
      </div>
      <span className="text-sm font-medium text-center line-clamp-2">{label}</span>
    </div>
  )
}