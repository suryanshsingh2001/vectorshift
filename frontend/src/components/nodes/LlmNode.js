// frontend/src/nodes/LLMNode.js

import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const LLMNode = ({ id, data }) => {
  const handles = [
    {
      type: 'target', position: Position.Left, id: 'system', style: {
        top: '33%', height: '10px', width: '10px'

      }
    },
    { type: 'target', position: Position.Right, id: 'prompt', style: { top: '66%', height: '10px', width: '10px' } },
  ];

  // LLMNode does not require any additional input fields
  const inputFields = [];

  const styles = "bg-gray-100 rounded-lg p-2";

  return <BaseNode id={id} data={data} type="LLM" handles={handles} inputFields={inputFields} showNameInput={false} message="This is a LLM." styles={styles} />;
};