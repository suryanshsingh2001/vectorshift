import PipelineToolbar from './components/main/PipelineToolbar';
import PipelineUI from './components/main/PipelineUI';
import PipelineAction from './components/main/PipelineAction';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <PipelineToolbar />
      <PipelineUI />

      <PipelineAction />
    </div>
  );
}

export default App;