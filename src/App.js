// import logo from './logo.svg';
import './App.scss';
import ModelViewer from './components/ModelViewer/ModelViewer';
import logo from './assets/logo1.glb';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ModelViewer
          scale={0.015}
          height={800}
          modelPath={logo}
          position={[0, -3, 0]}

        />
        Association FOLIFLORE en construction
        <a
          className="App-link"
          href="mailto:6thfc@proton.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Admin
        </a>
      </header>
    </div>
  );
}

export default App;
