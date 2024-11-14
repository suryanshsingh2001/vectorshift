import React from 'react';
import { DraggableNode } from './draggableNode';
import { ChevronsLeftRight, Brain, ArrowUpRight, Type, Hexagon, Image, Braces } from 'lucide-react';

export const PipelineToolbar = () => {
  return (
      <div className="flex justify-center space-x-4 bg-transparent p-2 rounded-lg shadow-md">
        <DraggableNode type="customInput" label="Input" icon={ChevronsLeftRight} />
        <DraggableNode type="llm" label="LLM" icon={Brain} />
        <DraggableNode type="customOutput" label="Output" icon={ArrowUpRight} />
        <DraggableNode type="text" label="Text" icon={Type} />
        <DraggableNode type="custom" label="Custom" icon={Hexagon} />
        <DraggableNode type="image" label="Image" icon={Image} />
        <DraggableNode type="json" label="JSON" icon={Braces} />
      </div>
  );
};