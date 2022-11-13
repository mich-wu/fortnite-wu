import React, { useEffect, useState } from 'react'
import { getPlayerStat } from '../apiClient'

export default function Kitahankyu() {
  const [playerData, setPlayerData] = useState(null)

  useEffect(() => {
    getPlayerStat()
      .then((currentPlayer) => {
        console.log('current player', currentPlayer)
        setPlayerData(currentPlayer)
      })
      .catch((err) => {
        err.message
      })
  }, [])

  return (
    <>
      <h1>My stats:</h1>
    </>
  )
}
