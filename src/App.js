// import logo from './logo.svg';
import './App.scss';
import ModelViewer from './components/ModelViewer/ModelViewer';
import logo from './assets/logo.glb';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ModelViewer
          scale={50}
          height={300}
          modelPath={logo}

        />
        <a
          className="App-link"
          href="mailto:6thfc@proton.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Association FOLIFLORE en construction, Contact Admin
        </a>
      </header>
    </div>
  );
}

export default App;
