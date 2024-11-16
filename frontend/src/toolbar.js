import React from 'react';
import { DraggableNode } from './draggableNode';
import { ChevronsLeftRight, Brain, ChevronsLeftRightEllipsis, Type, Hexagon, Image, Braces, Timer } from 'lucide-react';

export const PipelineToolbar = () => {
  return (
    <div className="flex space-x-2 bg-base-100 p-2 rounded-lg shadow-lg">
      <DraggableNode type="customInput" label="Input" icon={ChevronsLeftRight} />
      <DraggableNode type="llm" label="LLM" icon={Brain} />
      <DraggableNode type="customOutput" label="Output" icon={ChevronsLeftRightEllipsis} />
      <DraggableNode type="text" label="Text" icon={Type} />
      <DraggableNode type="custom" label="Custom" icon={Hexagon} />
      <DraggableNode type="image" label="Image" icon={Image} />
      <DraggableNode type="json" label="JSON" icon={Braces} />
      <DraggableNode type="timer" label="Timer" icon={Timer} />
    </div>
  );
};