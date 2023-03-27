import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import { Box } from '@chakra-ui/react';
import Skills from './component/Skills';
import Project from './component/Project';
import Contact from './component/Contact';
import Mystats from './component/My Stats';

function App() {
  return (
    <Box className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Mystats />
    </Box>
  );
}

export default App;
