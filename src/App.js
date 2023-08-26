// import logo from './logo.svg';
import './App.scss';
import ModelViewer from './components/ModelViewer/ModelViewer';
import logo from './assets/logo1.glb';
import Footer from './components/Footer/Footer';
import ImageList from './components/ImageList/ImageList';
import Introduction from './components/Introduction/Introduction';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ModelViewer
          scale={0.011}
          height={250}
          width={50}
          modelPath={logo}
          position={[0, -2, 0]}
          margin={3}

        />
        <Introduction />
      </header>
      <ImageList />

      <Footer />
    </div>
  );
}

export default App;
