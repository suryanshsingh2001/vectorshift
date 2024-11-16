// frontend/src/toolbar.js

import React, { useState } from 'react';
import { nodeConfig } from '../../lib/nodeConfig';
import { DraggableNode } from '../shared/draggableNode';
import { Settings } from 'lucide-react';

 const PipelineToolbar = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['all', 'main', 'custom'];

  const filteredNodes = activeCategory === 'all'
    ? nodeConfig
    : nodeConfig.filter(node => node.category === activeCategory);

  return (
    <>
    <div className="flex justify-between items-center bg-base-100 shadow-lg max-w-7xl mx-auto p-2">
      <div className="flex space-x-2">
        {filteredNodes.map(({ type, label, icon: IconComponent, category, description }) => (
          <DraggableNode key={type} type={type} label={label} icon={IconComponent} category={category} description={description} />
        ))}
      </div>
      <div className='mx-5'>
        <button
          className="btn btn-circle btn-sm"
          onClick={() => setIsModalOpen(true)}
        >
          <Settings className="h-4 w-4" />
        </button>
      
      </div>
    
    </div>

      {isModalOpen && (
        <div className="modal modal-open ">
          <div className="modal-box">
            <h2 className="text-lg font-bold mb-4">Select Category</h2>
            <ul>
              {categories.map(category => (
                <li key={category} className="mb-2">
                  <button
                    className={`btn btn-sm ${activeCategory === category ? 'btn-primary' : 'btn-ghost'}`}
                    onClick={() => {
                      setActiveCategory(category);
                      setIsModalOpen(false);
                    }}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
            <div className="modal-action">
              <button
                className="btn btn-sm btn-ghost"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PipelineToolbar;