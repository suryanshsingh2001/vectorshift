// frontend/src/nodes/ImageNode.js

import { BaseNode } from './BaseNode';
import { useState } from 'react';
import { Position } from 'reactflow';

export const ImageNode = ({ id, data }) => {
  const [imageType, setImageType] = useState(data?.type || 'JPEG');

  const handles = [
    { type: 'source', position: Position.Right, id: 'value' }
  ];

  const inputFields = [
    {
      name: 'type',
      label: 'Image Type',
      type: 'select',
      options: [
        { value: 'JPEG', label: 'JPEG' },
        { value: 'PNG', label: 'PNG' },
        { value: 'GIF', label: 'GIF' }
      ],
      onChange: setImageType
    }
  ];

  return <BaseNode id={id} data={{ ...data, type: imageType }} type="Image" handles={handles} inputFields={inputFields} />;
};