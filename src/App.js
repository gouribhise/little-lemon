import './App.css';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'
import Services from './pages/Services'
import Reservations from './pages/Reservations';
import OrderOl from './pages/OrderOl';
import Login from './pages/Login';
import Menu from './pages/Menu';
function App() {
  return (
   <>
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about"  element={<About/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/menu" element={<Menu/>}></Route>
      <Route path="/reservations"  element={<Reservations/>}></Route>
      <Route path="/orderol" element={<OrderOl/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
  </Router>
    </>
  );
}

export default App;
