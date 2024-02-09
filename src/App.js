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
      <div className="background"> {/* Ajout d'une div pour la superposition */}
        <header className="App-header">
          {/* Vos composants et contenu */}
          {/* <ModelViewer
            scale={0.011}
            height={250}
            width={125}
            modelPath={logo}
            position={[0, -2, 0]}
            margin={3}
          /> */}
          <Introduction />
        </header>
        <div className="barreRecherche">

          <BarreRecherche />
        </div>
        {/* <ImageList /> */}
        <Caroussel />
        <Footer />
      </div>
    </div>
  );
}

export default App;
