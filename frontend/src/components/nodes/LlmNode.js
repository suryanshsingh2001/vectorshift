
import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const LLMNode = ({ id, data }) => {
  const handles = [
    {
      type: 'target', position: Position.Left, id: `${id}-system`, style: {
        top: '33%', height: '10px', width: '10px'

      }
    },
    { type: 'target', position: Position.Left, id: `${id}-prompt`, style: { top: '66%', height: '10px', width: '10px' } },
    { type: 'source', position: Position.Right, id: `${id}-response`, style: { background: 'red', width: '10px', height: '10px' } },
  ];

  // LLMNode does not require any additional input fields
  const inputFields = [];

  const styles = "bg-gray-100 rounded-lg p-2";

  return <BaseNode id={id} data={data} type="LLM" handles={handles} inputFields={inputFields} showNameInput={false} message="This is a LLM." styles={styles} />;
};