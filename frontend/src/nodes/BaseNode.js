// frontend/src/nodes/BaseNode.js

import { Handle } from 'reactflow';
import { useState } from 'react';

export const BaseNode = ({ id, data = {}, type = 'Node', handles = [], inputFields = [], showNameInput = true }) => {
  const [currName, setCurrName] = useState(data?.name || id);

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  return (
    <div style={{ width: 200, height: 80, border: '1px solid black' }}>
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={handle.style}
        />
      ))}
      <div>
        <span>{type}</span>
      </div>
      <div>
        {showNameInput && (
          <label>
            Name:
            <input type="text" value={currName} onChange={handleNameChange} />
          </label>
        )}
        {inputFields.map((field) => (
          <label key={field.name}>
            {field.label}:
            {field.type === 'select' ? (
              <select value={data[field.name]} onChange={(e) => field.onChange(e.target.value)}>
                {field.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input type={field.type} value={data[field.name]} onChange={(e) => field.onChange(e.target.value)} />
            )}
          </label>
        ))}
      </div>
    </div>
  );
};