import './App.css';
import Header from './components/Header/Header';
import Intro from './pages/Intro/Intro';
import About from './pages/About/About';
import Achievement from './pages/Achievement/Achievement';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import GetinTouch from './pages/GetinTouch/GetinTouch';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Achievement />
      <Skills />
      <Projects />
      <GetinTouch />
      <Footer />
    </>
  );
}

export default App;
