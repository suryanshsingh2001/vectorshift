// frontend/src/nodes/JSONNode.js

import { BaseNode } from './BaseNode';
import { useState } from 'react';
import { Position } from 'reactflow';

export const JSONNode = ({ id, data }) => {
  const [jsonData, setJsonData] = useState(data?.json || '{}');

  const handles = [
    { type: 'source', position: Position.Right, id: 'value' }
  ];

  const inputFields = [
    {
      name: 'json',
      label: 'JSON Data',
      type: 'textarea',
      onChange: setJsonData
    }
  ];

  const styles = "bg-teal-100 rounded-lg p-2";

  return <BaseNode id={id} data={{ ...data, json: jsonData }} type="JSON" handles={handles} inputFields={inputFields} styles={styles} />;
};