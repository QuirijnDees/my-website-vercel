import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from "./components/Footer";
import Home from './pages/Home';
import About from './pages/About'; 
import Symbionts from './pages/symbionts';
import PubertJimbob from './pages/PubertJimbob';
import ImageSamplingTool from './pages/imagesamplingtool';
import TexturingTool from './pages/TexturingTool';
import ScrollToTop from './components/scrollToTop'; 
import { GlobalProvider } from "./GlobalContext";


//////////////////  REFERENCES

function App() {

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Anton&family=Archivo:ital,wght@0,100..900;1,100..900&family=Bebas+Neue&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Google+Sans+Code:ital,wght@0,300..800;1,300..800&family=Inconsolata:wght@200..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Libre+Franklin:ital,wght@0,100..900;1,100..900&family=Mozilla+Text:wght@200..700&family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Noto+Kufi+Arabic:wght@100..900&family=Oswald:wght@200..700&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Quicksand:wght@300..700&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Schibsted+Grotesk:ital,wght@0,400..900;1,400..900&family=Share+Tech&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>

     <GlobalProvider>
      <Header />
      <main style={{ padding: "0px" }}>
        
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/symbionts" element={<Symbionts />} />
          <Route path="/pubertjimbob" element={<PubertJimbob />} />
          <Route path="/imagesamplingtool" element={<ImageSamplingTool />} />
          <Route path="/texturingtool" element={<TexturingTool />}/>
        </Routes>
      </main>
      <Footer/>
      </GlobalProvider>
    </>
  );
}

export default App;
