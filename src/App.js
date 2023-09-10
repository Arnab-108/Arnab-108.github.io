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
import { Footer } from './footer';
import Tools from './component/Tools';

function App() {
  return (
    <Box backgroundColor={"#191919"} className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Tools />
      <Project />
      <Contact />
      <Mystats />
      <Footer />
    </Box>
  );
}

export default App;
