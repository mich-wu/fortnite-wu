import React, { useEffect, useState } from 'react'
import { getNews } from '../apiClient'

export default function News() {
  const [newsData, setNewsData] = useState({})

  useEffect(() => {
    getNews()
      .then((currentNews) => {
        //console.log(currentNews)
        setNewsData(currentNews)
        // console.log('after set news data:', newsData.data)
      })
      .catch((err) => {
        err.message
      })
  }, [])
  // console.log(newsData.data?.motds[0].body)

  // console.log('News Data BANANAS:', newsData.data)
  // const { motds } = newsData.data
  // console.log(motds)

  return (
    <>
      {/* {newsData.data.motds.map((data, i)=> {
      <p>{title}</p>
      <p>{body}</p>
      <img src={image} alt="newsimg" className="item-image" />
    })} */}

      <div>
        <h1>
          <p>{newsData.data?.motds[0].title}</p> <br />
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
        </h1>
      </div>
    </>
  )
}
