import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import drmario from './assets/bg2.jpg'


function App() {
  return (
    <div>
      <Navbar />
      <div style={{ backgroundImage: `url(${drmario})` }}>
        <Home />
        <About />
        <div className="h-[100px]">
        </div>
        <Skills />
        <div className="h-[100px]">
        </div>
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
