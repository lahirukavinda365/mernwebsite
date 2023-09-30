
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import {Route, Routes, Switch} from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route to='/' Component={Home} />
          <Route to='/about' Component={About} />
          <Route to='/service' Component={Services} />
          <Route to='/contact' Component={Contact} />
          <Route to='/footer' Component={Footer} />
      </Routes>
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
