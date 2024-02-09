// import logo from './logo.svg';
import './App.scss';
// import ModelViewer from './components/ModelViewer/ModelViewer';
// import logo from './assets/logo1.glb';
import Footer from './components/Footer/Footer';
// import ImageList from './components/ImageList/ImageList';
import Introduction from './components/Introduction/Introduction';
import Caroussel from './components/Caroussel/Caroussel';
import BarreRecherche from './components/BarreRecherche/BarreRecherche';

function App() {
  return (
    <div className="App">
      <div className="background">
        <header className="App-header">
          <Introduction />
        </header>
        <div className="barreRecherche">
          <BarreRecherche />
        </div>
        <Caroussel />
        <Footer />
      </div>
    </div>
  );
}

export default App;
