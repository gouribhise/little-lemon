import About from '../components/About'
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Navbar from '../components/Navbar';
import Testimonials from '../components/Testimonials';
const Home=()=>{
    return (
      <>
       <Navbar/>
       <main>
       <Hero/>
   <Highlights/>
   <Testimonials/>
   <About/>
       </main>
  
   <Footer/>
 
      </>
    )
}

export default Home