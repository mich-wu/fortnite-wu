import React, { useEffect, useState } from 'react'
import { getCrew } from '../apiClient'

export default function Crewpack() {
  const [crewData, setCrewData] = useState(null)

  //console.log(crewData, 'here')

  useEffect(() => {
    getCrew()
      .then((crewItems) => {
        // console.log(crewItems)
        setCrewData(crewItems)
      })
      .catch((err) => {
        err.message
      })
  }, [])

  const getRewards = (crewData) => {
    const { rewards } = crewData.currentCrew
    const { apiRender } = crewData.currentCrew.images

    return rewards?.map(({ item }) => {
      const { name, description, id } = item
      return { name, description, apiRender, id }
    })
  }
  if (crewData == null || crewData.currentCrew.length == 0) {
    return 'LOADING'
  }

  const rewards = getRewards(crewData)
  const { name, description, apiRender } = rewards[0]
  console.log(rewards, 'REWARDS MAP')

  // const getRewardsByIndex = (crewData, index) => {
  //   const rewards = getRewards(crewData)
  //   return rewards[index], console.log(getRewardsByIndex(crewData, 2))
  // }
  return (
    <>
      <MonthlyCrew
        name={name}
        description={description}
        apiRender={apiRender}
      />
      {/* {rewards.map((props) => (
        <MonthlyCrew {...props} key={props.id} />
      ))} */}
      {/* <h1>This months crew pack:{rewards[0].name} </h1> */}
      {/* {getRewardsByIndex(crewData, 0)} */}
    </>
  )
}

// console.log(getRewards(crewData))
function MonthlyCrew({ name, description, apiRender }) {
  return (
    <>
      <img src={apiRender} alt={description} className="crew" />
      <p>{name}</p>
      <p>{description}</p>
    </>
  )
}
