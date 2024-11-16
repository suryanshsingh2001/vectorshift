// frontend/src/nodes/ActionNode.js

import { BaseNode } from './BaseNode';
import { useState } from 'react';
import { Position } from 'reactflow';
import Toast from '../components/shared/toast';
export const ActionNode = ({ id, data }) => {
  const [customType, setCustomType] = useState(data?.type || 'Create');
  const [showToast, setShowToast] = useState(false);

  const handles = [
    { type: 'source', position: Position.Right, id: 'output' }
  ];

  const inputFields = [
    {
      name: 'type',
      label: 'Type',
      type: 'select',
      options: [
        { value: 'Create', label: 'Create' },
        { value: 'Edit', label: 'Edit' },
        { value: 'Delete', label: 'Delete' },
      ],
      onChange: setCustomType
    }
  ];

  const styles = "bg-yellow-100 rounded-lg border border-yellow-300";

  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
  };

  return (
    <>
      <BaseNode id={id} data={{ ...data, type: customType }} type="Action" handles={handles} inputFields={inputFields} styles={styles}>
        <div className="flex flex-col gap-2 space-y-2">
          <button onClick={handleClick} className="btn btn-sm btn-primary">Click me</button>
        </div>
      </BaseNode>
      {showToast && <Toast message={`You triggered an action: ${customType} `} onClose={() => setShowToast(false)} />}
    </>
  );
};