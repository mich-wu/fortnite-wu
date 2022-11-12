import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'

function App() {
  return (
    <>
      <div className="App">
        <Navbar />

        <div className="content">
          <Home />
        </div>
      </div>
    </>
  )
}

export default App
