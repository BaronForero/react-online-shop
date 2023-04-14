import './App.css' 
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Productdetails from './components/Productdetails'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} /> 
        <Route path='/products/:detail' element={<Productdetails />} /> 
      </Routes>
      <Footer/>
      </div>
  );
}

export default App;
