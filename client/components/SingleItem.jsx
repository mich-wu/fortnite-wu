import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const SingleItem = () => {
  const params = useParams()
  const id = Number(params.id)
  const displayItem = useSelector((state) => state)

  const selectedItem = displayItem.find((item) => id === item.id)
  if (!selectedItem) {
    return <div></div>
  }

  return (
    <>
      {selectedItem && (
        <div>
          <h1>{selectedItem.name}</h1>
          <img src={selectedItem.url} alt={selectedItem.name} />
          <p>{selectedItem.rarity}</p>
        </div>
      )}
    </>
  )
}

export default SingleItem
