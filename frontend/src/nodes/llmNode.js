// frontend/src/nodes/LLMNode.js

import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const LLMNode = ({ id, data }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: 'system', style: { top: '33%' } },
    { type: 'target', position: Position.Left, id: 'prompt', style: { top: '66%' } },
    { type: 'source', position: Position.Right, id: 'response' }
  ];

  // LLMNode does not require any additional input fields
  const inputFields = [];

  return <BaseNode id={id} data={data} type="LLM" handles={handles} inputFields={inputFields} showNameInput={false} />;
};