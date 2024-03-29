import './App.css';
import About from './components/About'
import Footer from './components/Footer';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';

function App() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <Highlights/>
   <Testimonials/>
   <About/>
   <Footer/>
    </>
  );
}

export default App;
