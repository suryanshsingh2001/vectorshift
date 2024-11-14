import { Handle } from 'reactflow';
import { useState, useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

export const BaseNode = ({ id, data = {}, type = 'Node', handles = [], inputFields = [], showNameInput = true, message = null, styles = '', children }) => {
  const [currName, setCurrName] = useState(data?.name || id);

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const baseStyles = "card card-compact lg:card-side w-50 bg-base-100 shadow-xl";
  const mergedStyles = twMerge(baseStyles, styles);

  return (
    <div className={mergedStyles}>
      <div className="card-body">
        {handles.map((handle) => (
          <Handle
            key={handle.id}
            type={handle.type}
            position={handle.position}
            id={`${id}-${handle.id}`}
            style={handle.style}
          />
        ))}
        <div className="card-title flex justify-between items-center mb-2">
          <span className="text-gray-600 font-medium">{type}</span>
        </div>
        <div className="flex flex-col gap-2 space-y-2">
          {showNameInput && (
            <>
              <label className="flex flex-col text-sm text-gray-500">
                Name:
              </label>
              <input
                type="text"
                value={currName}
                onChange={handleNameChange}
                className="input input-bordered"
              />
            </>
          )}
          {inputFields.map((field) => (
            <div key={field.name} className="flex flex-col text-sm text-gray-500">
              <label htmlFor={field.name}>
                {field.label}:
              </label>
              {field.type === 'select' ? (
                <select
                  value={data[field.name]}
                  onChange={(e) => field.onChange(e.target.value)}
                  className="select select-bordered mt-1"
                >
                  {field.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : field.type === 'textarea' ? (
                <textarea
                  ref={field.ref} // Use ref here for the auto-resizing effect
                  placeholder="Enter Value"
                  value={data[field.name]}
                  onChange={(e) => field.onChange(e.target.value)}
                  className="textarea p-2 mt-1 resize-none"
                />
              ) : (
                <input
                  placeholder="Enter Value"
                  type={field.type}
                  value={data[field.name]}
                  onChange={(e) => field.onChange(e.target.value)}
                  className="input input-bordered mt-1"
                />
              )}
            </div>
          ))}
          {message && <div className="text-sm text-gray-400 mt-2">{message}</div>}
          {children}
        </div>
      </div>
    </div>
  );
};