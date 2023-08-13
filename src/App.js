// import logo from './logo.svg';
import './App.scss';
import ModelViewer from './components/ModelViewer/ModelViewer';
import logo from './assets/logo1.glb';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ModelViewer
          scale={0.009}
          height={600}
          modelPath={logo}
          position={[0, -1, 0]}

        />
        <div className="App-header__presentation">
          <li>
            Association FOLIFLORE
          </li>
          <li>
            Créer et entretenir un arboretum et un jardin forêt
          </li>
          <li>
            promouvoir la biodiversité végétale
          </li>
          <li>sensibiliser à l'environnement</li>
          <li>organiser des activités éducatives</li>
          <li>créer un musée végétal</li>
          <li>promouvoir des pratiques respectueuses</li>

        </div>
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
