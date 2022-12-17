import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLocker } from '../actions/locker'
import { Link } from 'react-router-dom'

const Locker = () => {
  const dispatch = useDispatch()
  const lockerReducer = useSelector((state) => state)
  console.log(lockerReducer)

  useEffect(() => {
    dispatch(fetchLocker())
  }, [])

  return (
    <>
      <h1>Kita&apos;s Locker</h1>
      {lockerReducer ? (
        <div className="lockerskins">
          {lockerReducer?.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/item/${item.id}`}>
                  <img alt={item.name} src={item.url} className="lockerimage" />
                </Link>
              </div>
            )
          })}
        </div>
      ) : (
        <div>LOADING</div>
      )}
    </>
  )
}

export default Locker
