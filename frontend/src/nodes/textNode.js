// frontend/src/nodes/TextNode.js

import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';


export const TextNode = ({ id, data }) => {
  const handles = [
    { type: 'source', position: Position.Right, id: 'value' }
  ];

  // TextNode does not require any additional input fields
  const inputFields = [];

  return <BaseNode id={id} data={data} type="Text" handles={handles} inputFields={inputFields} />;
};