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
          {shopData.shop?.map((item) => (
            <>
              {item.granted.map((image) => {
                return (
                  <>
                    <img src={image.images.icon} alt="" className="shopimage" />
                  </>
                )
              })}
              <div className="itemshoptext">
                <p className="item-name">{item.displayName}</p>
                <p className="vBucks">
                  {item.price.finalPrice} {'vBucks'}
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}
