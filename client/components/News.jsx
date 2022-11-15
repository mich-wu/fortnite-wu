import React, { useEffect, useState } from 'react'
import { getNews } from '../apiClient'

export default function News() {
  const [newsData, setNewsData] = useState({})

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
  console.log(newsData.data?.motds[0].body)

  return (
    <>
      <div>
        <h1>
          Current News:
          <p>{newsData.data?.motds[0].title}</p>
          <p>{newsData.data?.motds[0].body}</p>
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
