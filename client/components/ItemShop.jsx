import React, { useEffect, useState } from 'react'
import { getItemShop } from '../apiClient'

export default function ItemShop() {
  const [shopData, setShopData] = useState([])
  // isloading = true in the intitial use state = seperate return. can also do a ternery
  //

  useEffect(() => {
    getItemShop()
      .then((currentItems) => {
        console.log(currentItems)
        // isloading = false
        setShopData(currentItems)
      })
      .catch((err) => {
        err.message
      })
  }, [])
  // console.log(shopData[0]?.name)
  console.log(shopData)
  return (
    <>
      <div>
        <h1>Todays item shop below!</h1>
        <div className="skins">
          {shopData?.map((item) => {
            return (
              <div key={item.manifestId}>
                <p>Name: {item?.name}</p>
                <p>vBucks: {item?.vBucks}</p>
                <img src={item?.imageUrl} alt="fnbr" className="item-image" />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

{
  /* <div className="skins">
  <p>Name: {shopData[25]?.name}</p>
  <p>vBucks: {shopData[25]?.vBucks}</p>
  <img src={shopData[25]?.imageUrl} alt="fnbr" className="item-image" />

  <p>Name: {shopData[26]?.name}</p>
  <p>vBucks: {shopData[26]?.vBucks}</p>
  <img src={shopData[26]?.imageUrl} alt="fnbr" className="item-image" />

  <p>Name: {shopData[27]?.name}</p>
  <p>vBucks: {shopData[27]?.vBucks}</p>
  <img src={shopData[27]?.imageUrl} alt="fnbr" className="item-image" />

  <p>Name: {shopData[29]?.name}</p>
  <p>vBucks: {shopData[29]?.vBucks}</p>
  <img src={shopData[29]?.imageUrl} alt="fnbr" className="item-image" />
</div> */
}
