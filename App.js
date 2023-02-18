import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Navigate,Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Users from './components/Users';
import Childuser from './components/Childuser';
import { useNavigate } from 'react-router-dom';
import Gallery from './nestedRoutes/Gallery';
import GelleryChildOne from './nestedRoutes/GalleryChildOne';
import GelleryChildTwo from './nestedRoutes/GalleryChildSecond'
import { useState, useEffect } from 'react';
function App() {
  const [count,setcount]=useState(100);

  
  return (
    <div className="App">
      Welcome Asghar !....!..
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/users' element={<Users/>}></Route>
        <Route path='/users/:name' element={<Childuser/>}></Route>
        <Route path='/*' element={<Navigate to='contact'/>}></Route>
        <Route path='/gallery/' element={<Gallery name='asgharPoonja10109' COunt={count} />}>
          <Route path='galleryone' element={<GelleryChildOne/>}></Route>
          <Route path='gallerytwo' element={<GelleryChildTwo/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
