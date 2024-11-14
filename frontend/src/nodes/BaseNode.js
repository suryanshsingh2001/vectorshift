// frontend/src/nodes/BaseNode.js

import { Handle, Position } from 'reactflow';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export const BaseNode = ({ id, data = {}, type = 'Node', handles = [], inputFields = [], showNameInput = true, message = null, styles = '' }) => {
  const [currName, setCurrName] = useState(data?.name || id);

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const baseStyles = "w-52 border border-gray-300 bg-white shadow-md rounded-lg p-4 flex flex-col justify-between";
  const mergedStyles = twMerge(baseStyles, styles);

  return (
    <div className={mergedStyles}>
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={handle.style}
        />
      ))}
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 font-semibold">{type}</span>
      </div>
      <div className="flex flex-col space-y-2">
        {showNameInput && (
          <label className="flex flex-col text-sm text-gray-600">
            Name:
            <input type="text" value={currName} onChange={handleNameChange} className="mt-1 p-1 border border-gray-300 rounded" />
          </label>
        )}
        {inputFields.map((field) => (
          <label key={field.name} className="flex flex-col text-sm text-gray-600">
            {field.label}:
            {field.type === 'select' ? (
              <select value={data[field.name]} onChange={(e) => field.onChange(e.target.value)} className="mt-1 p-1 border border-gray-300 rounded">
                {field.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input type={field.type} value={data[field.name]} onChange={(e) => field.onChange(e.target.value)} className="mt-1 p-1 border border-gray-300 rounded" />
            )}
          </label>
        ))}
        {message && <div className="text-sm text-gray-500 mt-2">{message}</div>}
      </div>
    </div>
  );
};