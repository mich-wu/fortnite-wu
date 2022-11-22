import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

function AddItem() {
  const dispatch = useDispatch()
  const [newItem, setNewItem] = useState({
    url: ' ',
    name: ' ',
    rarity: ' ',
    vbucks: ' ',
  })

  function handleChange(event) {
    const { name, value } = event.target
    setNewItem((result) => {
      return { ...result, [name]: value }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    dispatch
  }
}

export default AddItem
