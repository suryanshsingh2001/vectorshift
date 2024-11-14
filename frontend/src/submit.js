import { useStore } from './store';

export const SubmitButton = () => {
  const { nodes, edges } = useStore((state) => ({
    nodes: state.nodes,
    edges: state.edges,
  }));

  const handleSubmit = async () => {
    const response = await fetch('http://localhost:8000/pipelines/parse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nodes, edges }),
    });

    const result = await response.json();
    alert(`Number of Nodes: ${result.num_nodes}\nNumber of Edges: ${result.num_edges}\nIs DAG: ${result.is_dag}`);
  };

  return (
    <div className="flex items-center justify-center">
      <button onClick={handleSubmit} className="btn btn-primary text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
    </div>
  );
};