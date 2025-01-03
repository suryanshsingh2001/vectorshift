import { useState } from 'react';
import { useStore } from '../../data/store';
import { CheckCircle, XCircle, Circle, AlertTriangle } from 'lucide-react';

const PipelineAction = () => {
  const { nodes, edges, resetNodes } = useStore((state) => ({
    nodes: state.nodes,
    edges: state.edges,
    resetNodes: state.resetNodes,
  }));

  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch results');
      }

      const result = await response.json();
      setResult(result);
      setIsModalOpen(true);
    } catch (error) {
      setError(error.message);
      setIsModalOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='flex flex-row items-center mx-auto gap-10'>
      <button onClick={handleSubmit} className="btn btn-primary" disabled={isLoading}>
        {isLoading ? 'Submitting...' : 'Submit'}
      </button>
      <button onClick={resetNodes} className="btn btn-danger ml-2">
        Reset
      </button>
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Pipeline Results</h3>
            {error ? (
              <div className="py-4">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="text-red-500" />
                  <p className="text-red-500">{error}</p>
                </div>
              </div>
            ) : (
              result && (
                <div className="py-4">
                  <div className="flex items-center space-x-2">
                    <Circle className="text-blue-500" />
                    <p>Number of Nodes: {result.num_nodes}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Circle className="text-green-500" />
                    <p>Number of Edges: {result.num_edges}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {result.is_dag ? (
                      <CheckCircle className="text-green-500" />
                    ) : (
                      <XCircle className="text-red-500" />
                    )}
                    <p>Is DAG: {result.is_dag ? 'Yes' : 'No'}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <p>{result.message}</p>
                  </div>
                </div>
              )
            )}
            <div className="modal-action">
              <button onClick={closeModal} className="btn btn-primary">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default PipelineAction;