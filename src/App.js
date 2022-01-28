import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Projects from './components/Project';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col h-screen">
        <Landing />
      </div>
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
