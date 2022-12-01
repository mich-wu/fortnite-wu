import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { submitItem } from '../actions/index'
import { useNavigate, Link } from 'react-router-dom'

function AddItem() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [newItem, setNewItem] = useState({
    url: ' ',
    name: ' ',
    rarity: ' ',
    vbucks: ' ',
    description: '',
  })

  function handleChange(event) {
    const { name, value } = event.target
    setNewItem((result) => {
      return { ...result, [name]: value }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    dispatch(submitItem(newItem))
    setNewItem('')
    navigate('/locker')
  }

  return (
    <>
      <h1>Did you spend money again? lol </h1>
      <form className="form">
        <label>URL: </label>
        <input type="text" name="url" onChange={handleChange} />

        <label>Name: </label>
        <input type="text" name="name" onChange={handleChange} />

        <label>Rarity: </label>
        <input type="text" name="rarity" onChange={handleChange} />

        <label>vBucks: </label>
        <input type="number" name="vbucks" onChange={handleChange} />

        <label>Description: </label>
        <input type="text" name="description" onChange={handleChange} />

        <button onClick={handleSubmit} className="addlocker">
          Add to locker
        </button>

        <Link to="/locker">
          <button className="addlocker">Go to Locker</button>
        </Link>
      </form>
    </>
  )
}

export default AddItem
