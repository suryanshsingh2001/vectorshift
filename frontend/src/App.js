import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
    
      <PipelineToolbar />
      <main className="flex-grow p-4">
        <PipelineUI />
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <SubmitButton />
      </footer>
    </div>
  );
}

export default App;