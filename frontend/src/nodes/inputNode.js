// frontend/src/nodes/InputNode.js

import { BaseNode } from './BaseNode';
import { useState } from 'react';
import { Position } from 'reactflow';

export const InputNode = ({ id, data }) => {
  const [inputType, setInputType] = useState(data?.type || 'Text');

  const handles = [
    { type: 'source', position: Position.Right, id: 'value', style: { background: 'red' } }
  ];

  const inputFields = [
    {
      name: 'type',
      label: 'Type',
      type: 'select',
      options: [
        { value: 'Text', label: 'Text' },
        { value: 'File', label: 'File' }
      ],
      onChange: setInputType
    }
  ];

  const styles = "bg-purple-100 rounded-lg border border-purple-300";

  return <BaseNode id={id} data={{ ...data, type: inputType }} type="Input" handles={handles} inputFields={inputFields} styles={styles} />;
};