import React from 'react'
import { useSelector } from 'react-redux'

const Locker = () => {
  const displayLocker = useSelector((state) => state.locker)

  return (
    <div className="home-grid">
      <h1>KITAHANKYU'S LOCKER</h1>

      <p>I have spent way too much money on this game lol</p>
      {/* <img src="./images/defaultdance.gif" alt="default-dance"></img> */}

      {displayLocker?.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.name}</h2>

            <img alt={item.name} src={`${item.url}`} />
          </div>
        )
      })}
    </div>
  )
}

export default Locker
