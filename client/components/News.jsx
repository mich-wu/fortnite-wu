import React, { useEffect, useState } from 'react'
import { getNews } from '../apiClient'

export default function News() {
  const [newsData, setNewsData] = useState({})

  useEffect(() => {
    getNews()
      .then((currentNews) => {
        console.log(typeof newsData)
        setNewsData(currentNews)
      })
      .catch((err) => {
        err.message
      })
  }, [])

  return (
    <>
      <div>
        <h1>
          Current News:
          {newsData.status}
          {/* 
        <p>{newsData.map((news, index)) => {
          return (
            <div key={index}>
              bananas: {news.date}
              pears: {news.image}


            </div>
          )
        }} */}
        </h1>
      </div>
    </>
  )
}
