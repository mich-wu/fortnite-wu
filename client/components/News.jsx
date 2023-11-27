import React, { useEffect, useState } from 'react'
import { getNews } from '../apiClient'

export default function News() {
  const [newsData, setNewsData] = useState([])

  useEffect(() => {
    getNews()
      .then((currentNews) => {
        setNewsData(currentNews)
      })
      .catch((err) => {
        err.message
      })
  }, [])

  return (
    <div className="App">
      <h1>Todays news below!</h1>

      {newsData?.data?.motds.map((news) => {
        return (
          <div key={news.id}>
            <div className="news-wrapper">
              <img
                src={news.image}
                alt="Battle Royale"
                className="news-image"
              />
              <div className="news-text">
                <p className="news-title">{news.title}</p>
                <br />
                <p className="news-body">{news.body}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
