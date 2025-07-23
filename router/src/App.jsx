import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from '../Home';
import About from '../About';

function App() {
  return(<>
  <nav className="p-4 bg-gray-100">
  <Link to="/" className="mr-4">Home</Link>
  <Link to="/about">About</Link>
</nav>
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
 </Routes>
 </>)
}

export default App
