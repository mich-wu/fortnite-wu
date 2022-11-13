import React, { useEffect, useState } from 'react'
import { getItemShop } from '../apiClient'

export default function ItemShop() {
  const [shopData, setShopData] = useState(null)

  useEffect(() => {
    getItemShop()
      .then((currentItemShop) => {
        console.log('current item shop:', currentItemShop)
        setShopData(currentItemShop)
      })
      .catch((err) => {
        err.message
      })
  }, [])

  return (
    <>
      <div>
        <h1>Todays item shop below!</h1>
        {/* {setShopData.map((item, i) => {
          return (
            <ul key={i}>
              <h1>{shopData.name}</h1>
              <h1>{shopData.vBucks}</h1>
            </ul>
          )
        })} */}
      </div>
    </>
  )
}
