import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './component/Narbar'


function App() {
  
  return (
    <div>
      
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home /> } />


        

      </Routes>
    
    </div>
  )
}

export default App;
  