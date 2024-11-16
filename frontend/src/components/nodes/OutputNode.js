
import { BaseNode } from './BaseNode';
import { useState } from 'react';
import { Position } from 'reactflow';

export const OutputNode = ({ id, data }) => {
  const [outputType, setOutputType] = useState(data?.type || 'Text');

  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-value`, style: { width: '10px', height: '10px' } }
  ];

  const inputFields = [
    {
      name: 'type',
      label: 'Type',
      type: 'select',
      options: [
        { value: 'Text', label: 'Text' },
        { value: 'Image', label: 'Image' }
      ],
      onChange: setOutputType
    }
  ];

  const styles = "bg-green-100 rounded-lg  border border-green-300";

  return <BaseNode id={id} data={{ ...data, type: outputType }} type="Output" handles={handles} inputFields={inputFields} styles={styles} />;
};