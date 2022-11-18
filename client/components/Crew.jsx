import React, { useEffect, useState } from 'react'
import { getCrew } from '../apiClient'

export default function Crewpack() {
  const [crewData, setCrewData] = useState([])

  useEffect(() => {
    getCrew()
      .then((crewItems) => {
        console.log(crewItems)
        setCrewData(crewItems)
      })
      .catch((err) => {
        err.message
      })
  }, [])

  return (
    <>
      <h1>This months crew pack: </h1>
    </>
  )
}
