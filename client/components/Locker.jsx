import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLocker } from '../actions/locker'

const Locker = () => {
  const dispatch = useDispatch()
  const lockerReducer = useSelector((state) => state)
  console.log(lockerReducer)

  useEffect(() => {
    dispatch(fetchLocker())
  }, [])

  return (
    <>
      <h1>I spend too much money on this game lol</h1>
      <div className="skins">
        {lockerReducer?.map((item) => {
          return (
            <div key={item.id}>
              <img alt={item.name} src={item.url} className="lockerimage" />
              <h2>{item.name}</h2>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Locker
