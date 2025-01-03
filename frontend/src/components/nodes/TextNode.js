
import { BaseNode } from './BaseNode';
import { useEffect, useState, useRef } from 'react';
import { Position } from 'reactflow';
import useAutosizeTextArea from '../../hooks/resizeTextArea';
import { extractVariables } from '../../lib/utils';

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '');
  const [variables, setVariables] = useState([]);
  const textAreaRef = useRef(null);

  // Autosize the textarea
  useAutosizeTextArea(textAreaRef.current, text);

  // Update variables based on the text input
  useEffect(() => {
    const newVariables = extractVariables(text);
    setVariables(newVariables);
  }, [text]);

  // Define handles: Right side for output, Left side for each variable
  const handles = [
    { type: 'source', position: Position.Right, id: `${id}-output`, style: { background: 'red', width: '10px', height: '10px' } },
    ...variables.map((variable) => ({
      type: 'target',
      position: Position.Left,
      id: `var-${variable}`,
      text: variable,
      style: { top: `${20 + variables.indexOf(variable) * 50}px`, background: 'purple', width: '10px', height: '10px' },
    })),
  ];

  const inputFields = [
    {
      name: 'text',
      label: 'Text',
      type: 'textarea',
      onChange: setText,
      ref: textAreaRef,
    },
  ];

  const styles = "bg-indigo-100 rounded-lg border border-indigo-300";

  return (
    <BaseNode
      id={id}
      data={{ ...data, text }}
      type="Text"
      handles={handles}
      inputFields={inputFields}
      styles={styles}
    />
  );
};
