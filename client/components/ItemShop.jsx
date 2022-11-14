import React, { useEffect, useState } from 'react'
import { getItemShop } from '../apiClient'

export default function ItemShop() {
  const [shopData, setShopData] = useState([])

  useEffect(() => {
    getItemShop()
      .then((items) => {
        console.log(items)
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
      </div>
    </>
  )
}
