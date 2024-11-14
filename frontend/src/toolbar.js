// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="mt-5 flex flex-wrap gap-4">
                <DraggableNode type='customInput' label='Input' className="p-2 bg-white rounded shadow hover:bg-gray-200" />
                <DraggableNode type='llm' label='LLM' className="p-2 bg-white rounded shadow hover:bg-gray-200" />
                <DraggableNode type='customOutput' label='Output' className="p-2 bg-white rounded shadow hover:bg-gray-200" />
                <DraggableNode type='text' label='Text' className="p-2 bg-white rounded shadow hover:bg-gray-200" />
                <DraggableNode type="custom" label="Custom" className="p-2 bg-white rounded shadow hover:bg-gray-200" />
                <DraggableNode type="image" label="Image" className="p-2 bg-white rounded shadow hover:bg-gray-200" />
                <DraggableNode type="json" label="JSON" className="p-2 bg-white rounded shadow hover:bg-gray-200" />
            </div>
        </div>
    );
};