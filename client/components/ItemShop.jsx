import React, { useEffect, useState } from 'react'
import { getItemShop } from '../apiClient'
import Timer from './Timer'

export default function ItemShop() {
  const [shopData, setShopData] = useState([])

  useEffect(() => {
    getItemShop()
      .then((currentItems) => {
        setShopData(currentItems)
      })
      .catch((err) => {
        err.message
      })
  }, [])

  return (
    <>
      <div>
        <h1>Todays item shop below!</h1>
        <Timer />
        <div className="skins">
          {shopData?.map((item) => {
            return (
              <div key={item.manifestId}>
                <img
                  src={item?.imageUrl}
                  alt="fortnite item shop"
                  className="shopimage"
                />
                <div className="itemshoptext">
                  <p className="item-name">{item?.name}</p>
                  <p className="vBucks">{item?.vBucks} vBucks</p>
                  <p className="vBucks">Rarity: {item?.rarity}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
