import { useEffect, useState } from "react"
import getRemainingTime from "@/utils/getRemainingTime"

const DURATION = 1000

const INITIAL_STATE = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
}

export default function useCountdown(finalDate: number) {
  const [remainingTime, setRemainingTime] = useState(INITIAL_STATE)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(finalDate)
      setIsLoading(false)
    }, DURATION)

    return () => {
      clearInterval(intervalId)
    }
  }, [finalDate])

  function updateRemainingTime(finalDateMs: number) {
    setRemainingTime(getRemainingTime(finalDateMs))
  }

  return { remainingTime, isLoading }
}
