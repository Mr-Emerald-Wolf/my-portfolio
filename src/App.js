import './App.css';
import About from './components/About';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Projects from './components/Project';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <div className="flex flex-col h-screen"> 
      <Navbar />
      <Landing />
      </div>
      <About/>
      <Projects/>
      <Skills/>

    </>
  );
}

export default App;
