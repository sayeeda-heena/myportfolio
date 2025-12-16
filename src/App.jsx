import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './component/Narbar'
import About from './component/About'


function App() {
   return (
    <div>
      <Navbar />
       <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/about' element={<About/> } /> 
      </Routes>
    </div>
  )
}

export default App;
  