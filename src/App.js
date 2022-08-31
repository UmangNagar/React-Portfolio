import './App.css';
import Bio from './components/Bio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Skills from './components/Skills';

function App() {
  return (
    <main>
      <Bio />
      <hr />
      <Experience />
      <hr />
      <Skills />
      <hr />
      <Contact />
      <hr />
    </main>
  );
}

export default App;
