// frontend/src/nodes/JSONNode.js

import { BaseNode } from './BaseNode';
import { useState, useRef } from 'react';
import { Position } from 'reactflow';
import useAutosizeTextArea from '../../hooks/resizeTextArea';

export const JSONNode = ({ id, data }) => {
  const [jsonData, setJsonData] = useState(data?.json || '{}');
  const textAreaRef = useRef(null);

  // Use the autosize hook on the textarea
  useAutosizeTextArea(textAreaRef.current, jsonData);

  const handles = [
    { type: 'source', position: Position.Right, id: `${id}-output`, style: {  width: '10px', height: '10px' } },
    { type: 'target', position: Position.Left, id: `${id}-input`, style: {  width: '10px', height: '10px' } }
  ];

  const inputFields = [
    {
      name: 'json',
      label: 'JSON Data',
      type: 'textarea',
      onChange: setJsonData,
      ref: textAreaRef, // Pass the ref to the textarea field
    }
  ];

  const styles = "bg-teal-100 rounded-lg border border-teal-300";

  return (
    <BaseNode
      id={id}
      data={{ ...data, json: jsonData }}
      type="JSON"
      handles={handles}
      inputFields={inputFields}
      styles={styles}
    />
  );
};
