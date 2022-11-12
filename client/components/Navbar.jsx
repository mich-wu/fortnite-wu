import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to={`/`}> Forkknife Wu </Link>
        <img src="./images/duck.gif" alt="dancing-duck" width={'50f%'}></img>
        <div className="links">
          <Link to={`/about`}>About Wu</Link>
          <Link to={`/skins`}>Skins </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar
