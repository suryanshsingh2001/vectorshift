// frontend/src/nodes/CustomNode.js

import { BaseNode } from './BaseNode';
import { useState } from 'react';
import { Position } from 'reactflow';

export const CustomNode = ({ id, data }) => {
  const [customType, setCustomType] = useState(data?.type || 'Text');

  const handles = [
    { type: 'target', position: Position.Left, id: 'input' },
    { type: 'source', position: Position.Right, id: 'output' }
  ];

  const inputFields = [
    {
      name: 'type',
      label: 'Type',
      type: 'select',
      options: [
        { value: 'Text', label: 'Text' },
        { value: 'File', label: 'File' },
        { value: 'Image', label: 'Image' }
      ],
      onChange: setCustomType
    }
  ];

  const styles = "bg-yellow-100 rounded-lg  border border-yellow-300";

  return <BaseNode id={id} data={{ ...data, type: customType }} type="Custom" handles={handles} inputFields={inputFields} styles={styles} >

    <div className="flex flex-col gap-2 space-y-2">

     <button className="btn btn-sm btn-primary">Click me</button>
     

    </div>
  </BaseNode>;
};