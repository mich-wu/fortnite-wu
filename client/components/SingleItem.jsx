import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { deleteLocker } from '../actions/locker'

const SingleItem = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const params = useParams()
  const id = Number(params.id)
  const displayItem = useSelector((state) => state)

  const selectedItem = displayItem.find((item) => id === item.id)
  if (!selectedItem) {
    return (
      <>
        <h1>Sorry, no skin matches that ID</h1>
        <a href="/locker" className="goback">
          Go back to locker
        </a>
      </>
    )
  }

  function handleDelete(event) {
    event.preventDefault()
    dispatch(deleteLocker(id))
    navigate('/locker')
  }

  return (
    <>
      {selectedItem && (
        <div className="selecteditem">
          <h2>{selectedItem.name}</h2>
          <img src={selectedItem.url} alt={selectedItem.name} />
          <p>{selectedItem.rarity}</p>
          <p>{selectedItem.vbucks} vBucks</p>
          <p>{selectedItem.description}</p>
          <br />
          <br />
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </>
  )
}

export default SingleItem
