import React, { useEffect, useState } from 'react'
import { getNews } from '../apiClient'

export default function News() {
  const [newsData, setNewsData] = useState({})

  useEffect(() => {
    getNews()
      .then((currentNews) => {
        //console.log(currentNews)
        setNewsData(currentNews)
      })
      .catch((err) => {
        err.message
      })
  }, [])
  //console.log(newsData.data?.motds[0].body)

  return (
    <>
      <div>
        <h1>
          Current News:
          <p>{newsData.data?.motds[0].title}</p> <br />
          <p>{newsData.data?.motds[0].body}</p>
          <br />
          <p>{newsData.data?.motds[1].title}</p>
          <p>{newsData.data?.motds[1].body}</p>
          <br />
          <p>{newsData.data?.motds[2].title}</p>
          <p>{newsData.data?.motds[2].body}</p>
          <br />
          <p>{newsData.data?.motds[3].title}</p>
          <p>{newsData.data?.motds[3].body}</p>
          <br />
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
