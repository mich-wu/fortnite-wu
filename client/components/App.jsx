import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Skins from './Skins'
import ItemShop from './ItemShop'

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/itemshop" element={<ItemShop />} />
          <Route path="/about" element={<About />} />
          <Route path="/skins" element={<Skins />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
