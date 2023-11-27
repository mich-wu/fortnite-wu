import React, { useState, useEffect } from 'react'

const Timer = () => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining())

  function calculateTimeRemaining() {
    const now = new Date()
    const targetTime = new Date(now)
    targetTime.setUTCHours(24, 0, 0, 0)

    const timeDiff = targetTime - now
    return timeDiff >= 0 ? timeDiff : 0
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000)
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
      2,
      '0'
    )}:${String(seconds).padStart(2, '0')}`
  }

  return (
    <div>
      <p>Shop resets in</p>
      <h2>{formatTime(timeRemaining)}</h2>
    </div>
  )
}

export default Timer
