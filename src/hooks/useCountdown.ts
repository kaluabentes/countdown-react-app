import { useEffect, useState } from "react"
import getRemainingTime from "@/utils/getRemainingTime"

const DURATION = 1000

const INITIAL_STATE = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
}

export default function useCountdown(countdown: number) {
  const [remainingTime, setRemainingTime] = useState(INITIAL_STATE)

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdown)
    }, DURATION)

    return () => {
      clearInterval(intervalId)
    }
  }, [countdown])

  function updateRemainingTime(countdownMs: number) {
    setRemainingTime(getRemainingTime(countdownMs))
  }

  return remainingTime
}
