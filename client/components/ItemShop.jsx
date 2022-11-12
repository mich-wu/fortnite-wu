import React, { useEffect, useState } from 'react'
import { getItemShop } from '../apiClient'

process.env

export default function ItemShop() {
  const [shopData, setShopData] = useState({})

  useEffect(() => {
    getItemShop()
      .then((items) => {
        setShopData(items)
      })
      .catch((err) => {
        err.message
      })
  }, [])

  return (
    <>
      <div>
        <h1>Todays item shop below!</h1>
        <h1>{shopData.name}</h1>
      </div>
    </>
  )
}
