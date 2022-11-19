import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <Link to={`/`}>
        <img src="./images/duck.gif" alt="dancing-duck" className="duck" />
      </Link>
    </>
  )
}

export default Navbar
