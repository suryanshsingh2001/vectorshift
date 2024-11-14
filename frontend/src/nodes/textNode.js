// frontend/src/nodes/TextNode.js

import { BaseNode } from './BaseNode';
import { useState, useEffect } from 'react';
import { Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '');
  const [handles, setHandles] = useState([{ type: 'source', position: Position.Right, id: 'value' }]);
  const [inputFields, setInputFields] = useState([]);

  useEffect(() => {
    const variableMatches = text.match(/{{\s*[\w]+\s*}}/g);
    if (variableMatches) {
      const newHandles = variableMatches.map((variable, index) => ({
        type: 'target',
        position: Position.Left,
        id: variable.replace(/[{}]/g, '').trim(),
        style: { top: `${(index + 1) * 20}px` }
      }));
      setHandles([{ type: 'source', position: Position.Right, id: 'value' }, ...newHandles]);
    } else {
      setHandles([{ type: 'source', position: Position.Right, id: 'value' }]);
    }
  }, [text]);

  useEffect(() => {
    setInputFields([
      {
        name: 'text',
        label: 'Text',
        type: 'textarea',
        onChange: setText
      }
    ]);
  }, []);

  const styles = "resize-none";

  return <BaseNode id={id} data={{ ...data, text }} type="Text" handles={handles} inputFields={inputFields} styles={styles} />;
};