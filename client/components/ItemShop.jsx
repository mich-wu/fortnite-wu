import React, { useEffect, useState } from 'react'
import { getItemShop } from '../apiClient'

export default function ItemShop() {
  const [shopData, setShopData] = useState({})

  useEffect(() => {
    getItemShop()
      .then((currentItems) => {
        console.log(currentItems)
        setShopData(currentItems)
      })
      .catch((err) => {
        err.message
      })
  }, [])
  // console.log(shopData[0]?.name)
  // console.log(shopData[26]?.name)
  // console.log(shopData[2]?.name)
  // console.log(shopData[3]?.name)
  // console.log(shopData[4]?.name)

  return (
    <>
      <div>
        <h1>Todays item shop below!</h1>
        {/* {shopData.map((item) => {
          name, vbucks, imageUrl
        })} */}

        <p>Name: {shopData[25]?.name}</p>
        <p>vBucks: {shopData[25]?.vBucks}</p>
        <img src={shopData[25]?.imageUrl} alt="fnbr" className="item-image" />

        <p>Name: {shopData[26]?.name}</p>
        <p>vBucks: {shopData[26]?.vBucks}</p>
        <img src={shopData[26]?.imageUrl} alt="fnbr" className="item-image" />

        <p>Name: {shopData[27]?.name}</p>
        <p>vBucks: {shopData[27]?.vBucks}</p>
        <img src={shopData[27]?.imageUrl} alt="fnbr" className="item-image" />

        <p>Name: {shopData[28]?.name}</p>
        <p>vBucks: {shopData[28]?.vBucks}</p>
        <img src={shopData[28]?.imageUrl} alt="fnbr" className="item-image" />
      </div>
    </>
  )
}
