import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './component/Narbar'
import About from './component/About';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Contact from './component/Contact';



function App() {
   return (
    <div>
      <Navbar />
       <Routes>
        <Route path='/hero' element={<Home /> } />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        
        
        
      </Routes>
    </div>
  )
}

export default App;
  