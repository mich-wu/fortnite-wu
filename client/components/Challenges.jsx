import React, { useEffect, useState } from 'react'

import { getChallenges } from '../apiClient'

export default function Challenges() {
  const [challengeData, setChallengeData] = useState({})

  useEffect(() => {
    getChallenges()
      .then((currentChallenge) => {
        console.log(currentChallenge)
        setChallengeData(currentChallenge)
      })
      .catch((err) => {
        err.message
      })
  }, [])

  return (
    <>
      <h1>Todays Challenge: </h1>
    </>
  )
}
