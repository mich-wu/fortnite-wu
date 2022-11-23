import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Locker from './Locker'
import ItemShop from './ItemShop'
import Kitahankyu from './Kitahankyu'
import Challenges from './Challenges'
import News from './News'
import Crew from './Crew'
import AddItem from './AddItem'

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/additem" element={<AddItem />} />
          <Route path="/crewpack" element={<Crew />} />
          <Route path="/about" element={<About />} />
          <Route path="/locker" element={<Locker />} />
          <Route path="/kitahankyu" element={<Kitahankyu />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/itemshop" element={<ItemShop />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
