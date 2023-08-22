import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar/Navbar';
import Home from './pages/Home/Home';   
import Contact from './pages/Contact/Contact';   
import About from './pages/About/About';   
import Footer from './pages/Footer/Footer';   
import Menu from './pages/Menu/Menu';   

function App() {
  return (
    <div>
     <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/"  element={<Home/>}/>
        <Route exact path="/About" element={<About/>}/>
        <Route exact path="/Menu" element={<Menu/>}/>
        <Route exact path="/Contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
     </Router>
    </div>

  );
}

export default App;
