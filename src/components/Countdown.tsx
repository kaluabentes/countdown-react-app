import useCountdown from "@/hooks/useCountdown"
import { Flex, Spinner } from "@chakra-ui/react"
import TimeBox from "./TimeBox"

interface CountdownProps {
  /**
   * The final date in epoch timestamp
   */
  finalDate: number
}

export default function Countdown({ finalDate }: CountdownProps) {
  const { remainingTime, isLoading } = useCountdown(finalDate)
  const { seconds, minutes, hours, days } = remainingTime

  if (isLoading) {
    return <Spinner />
  }

  return (
    <Flex gap={1}>
      <TimeBox>{days}d</TimeBox>
      <TimeBox>{hours}h</TimeBox>
      <TimeBox>{minutes}m</TimeBox>
      <TimeBox>{seconds}s</TimeBox>
    </Flex>
  )
}
