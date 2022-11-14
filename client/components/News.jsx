import React, { useEffect, useState } from 'react'
import { getNews } from '../apiClient'

export default function News() {
  const [newsData, setNewsData] = useState([])

  useEffect(() => {
    getNews()
      .then((currentNews) => {
        console.log(currentNews)
        setNewsData(currentNews)
      })
      .catch((err) => {
        err.message
      })
  }, [])

  return (
    <>
      <div>
        <h1>Current News:</h1>
        <p>{newsData.title}</p>
      </div>
    </>
  )
}
