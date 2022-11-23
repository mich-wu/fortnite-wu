import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLocker } from '../actions/locker'

const Locker = () => {
  const dispatch = useDispatch()
  const lockerReducer = useSelector((state) => state)

  useEffect(() => {
    dispatch(fetchLocker())
  }, [])

  return (
    <div className="home-grid">
      <h1>Locker below:</h1>
      {lockerReducer?.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.name}</h2>

            <img alt={item.name} src={item.url} />
          </div>
        )
      })}
    </div>
  )
}

export default Locker
