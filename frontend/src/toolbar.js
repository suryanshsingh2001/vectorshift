import React from 'react';
import { DraggableNode } from './draggableNode';
import { ChevronsLeftRight, Brain, ArrowUpRight, Type, Hexagon, Image, Braces } from 'lucide-react';

export const PipelineToolbar = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-12 gap-2">
        <DraggableNode type="customInput" label="Input" icon={ChevronsLeftRight} />
        <DraggableNode type="llm" label="LLM" icon={Brain} />
        <DraggableNode type="customOutput" label="Output" icon={ArrowUpRight} />
        <DraggableNode type="text" label="Text" icon={Type} />
        <DraggableNode type="custom" label="Custom" icon={Hexagon} />
        <DraggableNode type="image" label="Image" icon={Image} />
        <DraggableNode type="json" label="JSON" icon={Braces} />
      </div>
    </div>
  );
};