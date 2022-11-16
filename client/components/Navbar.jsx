import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to={`/`}>
          <img src="./images/duck.gif" alt="dancing-duck" width={'50fr'}></img>
        </Link>
        <div className="links">
          <Link to={`/about`}>About Wu</Link>
          <Link to={`/locker`}>Locker </Link>
          <Link to={`/itemshop`}>Item Shop</Link>
          <Link to={`/news`}>News</Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar
