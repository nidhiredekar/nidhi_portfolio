import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import './App.css'
import Portfolio from './Components/Portfolio/Portfolio';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
