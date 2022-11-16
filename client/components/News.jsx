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
  console.log(newsData.data)
  return (
    <>
      <div>
        <h1>Todays news below!</h1>
        <div className="news">
          {newsData.data?.motds.map((news) => {
            return (
              <div key={news.id}>
                <p>{news.title}</p> <br />
                <p>{news.body}</p>
                <img src={news.image} alt="newsimg" className="item-image" />
                <br />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

{
  /* <p>{newsData.data?.motds[0].title}</p> <br />
<p>{newsData.data?.motds[0].body}</p>
<img
  src={newsData.data?.motds[0].image}
  alt="newsimg"
  className="item-image"
/>
<br />
<p>{newsData.data?.motds[1].title}</p>
<p>{newsData.data?.motds[1].body}</p>
<img
  src={newsData.data?.motds[1].image}
  alt="newsimg"
  className="item-image"
/>
<br />
<p>{newsData.data?.motds[2].title}</p>
<p>{newsData.data?.motds[2].body}</p>
<img
  src={newsData.data?.motds[2].image}
  alt="newsimg"
  className="item-image"
/>
<br />
<p>{newsData.data?.motds[3].title}</p>
<p>{newsData.data?.motds[3].body}</p>
<img
  src={newsData.data?.motds[3].image}
  alt="newsimg"
  className="item-image"
/>
<br />
</h1> */
}
