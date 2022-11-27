import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const SingleItem = () => {
  const params = useParams()
  const id = Number(params.id)
  const displayItem = useSelector((state) => state)

  const selectedItem = displayItem.find((item) => id === item.id)
  if (!selectedItem) {
    return (
      <>
        <h1>Sorry, no skin matching that ID</h1>
        <a href="/locker">Go back to locker</a>
      </>
    )
  }

  return (
    <>
      {selectedItem && (
        <div>
          <h1>{selectedItem.name}</h1>
          <img src={selectedItem.url} alt={selectedItem.name} />
          <p>{selectedItem.rarity}</p>
          <a href="/locker">Go back to Locker</a>
        </div>
      )}
    </>
  )
}

export default SingleItem
