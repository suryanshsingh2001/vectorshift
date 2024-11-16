import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <PipelineToolbar />
      <main className="flex-grow ">
        <PipelineUI />
        <SubmitButton />

      </main>
    </div>
  );
}

export default App;