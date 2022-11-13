import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Skins from './Skins'
import ItemShop from './ItemShop'
import Kitahankyu from './Kitahankyu'

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skins" element={<Skins />} />
          <Route path="/kitahankyu" element={<Kitahankyu />} />
          <Route path="/itemshop" element={<ItemShop />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
