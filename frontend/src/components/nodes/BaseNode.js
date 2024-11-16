import { Handle } from 'reactflow';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';




/**
 * BaseNode Component
 * 
 * @param {string} id - The unique identifier for the node.
 * @param {object} [data={}] - The data associated with the node.
 * @param {string} [type='Node'] - The type of the node.
 * @param {array} [handles=[]] - An array of handle objects for connecting the node.
 * @param {array} [inputFields=[]] - An array of input field objects for the node.
 * @param {boolean} [showNameInput=true] - Whether to show the name input field.
 * @param {string|null} [message=null] - An optional message to display below the input fields.
 * @param {string} [styles=''] - Additional Tailwind CSS classes to apply to the node.
 * @param {ReactNode} children - Additional children elements to render inside the node.
 * 
 * @description
 * The BaseNode component is a reusable React component designed to represent a node in a flowchart or graph.
 * It uses the `reactflow` library for handling node connections and the `tailwind-merge` library for merging Tailwind CSS classes.
 * The component supports various props to customize its behavior and appearance, including handles for connections,
 * input fields for user interaction, and additional styles and children elements.
 */
export const BaseNode = ({ id, data = {}, type = 'Node', handles = [], inputFields = [], showNameInput = true, message = null, styles = '', children }) => {
  const [currName, setCurrName] = useState(data?.name || id);

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const baseStyles = "card card-compact lg:card-side w-55 bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300";
  const mergedStyles = twMerge(baseStyles, styles);

  return (
    <div className={mergedStyles}>
      <div className="card-body p-4">
        {handles.map((handle) => (
          <Handle
            key={handle.id}
            type={handle.type}
            position={handle.position}
            id={`${id}-${handle.id}`}
            style={handle.style}
          >
            {handle.text && <div className="flex flex-row justify-end mt-2 text-primary font-bold">{handle.text}</div>}

          </Handle>
        ))}
        <div className="card-title flex justify-between items-center mb-4">
          <span className="text-gray-600 font-medium">{type}</span>
        </div>
        <div className="flex flex-col gap-4">
          {showNameInput && (
            <div className="flex flex-col text-sm text-gray-500">
              <label className="mb-1">Name:</label>
              <input
                type="text"
                value={currName}
                onChange={handleNameChange}
                className="input input-bordered"
              />
            </div>
          )}
          {inputFields.map((field) => (
            <div key={field.name} className="flex flex-col text-sm text-gray-500">
              <label htmlFor={field.name} className="mb-1">
                {field.label}:
              </label>
              {(() => {
                switch (field.type) {
                  case 'select':
                    return (
                      <select
                        value={data[field.name]}
                        onChange={(e) => field.onChange(e.target.value)}
                        className="select select-bordered"
                      >
                        {field.options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    );
                  case 'textarea':
                    return (
                      <textarea
                        ref={field.ref} // Use ref here for the auto-resizing effect
                        placeholder="Enter Value"
                        value={data[field.name]}
                        onChange={(e) => field.onChange(e.target.value)}
                        className="textarea p-2 resize-none overflow-hidden"
                      />
                    );
                  case 'range':
                    return (
                      <input
                        type="range"
                        min={field.min}
                        max={field.max}
                        value={data[field.name]}
                        onChange={(e) => field.onChange(e.target.value)}
                        className="range"
                      />
                    );
                  default:
                    return (
                      <input
                        placeholder="Enter Value"
                        type={field.type}
                        value={data[field.name]}
                        onChange={(e) => field.onChange(e.target.value)}
                        className="input input-bordered "
                      />
                    );
                }
              })()}
            </div>
          ))}
          {message && <div className="text-sm text-gray-400 mt-2">{message}</div>}
          {children}
        </div>
      </div>
    </div>
  );
};