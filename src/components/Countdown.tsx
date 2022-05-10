import useCountdown from "@/hooks/useCountdown"
import { Flex } from "@chakra-ui/react"
import TimeBox from "./TimeBox"

interface CountdownProps {
  timestampMs: number
}

export default function Countdown({ timestampMs }: CountdownProps) {
  const { seconds, minutes, hours, days } = useCountdown(timestampMs)

  return (
    <Flex gap={1}>
      <TimeBox>{days}d</TimeBox>
      <TimeBox>{hours}h</TimeBox>
      <TimeBox>{minutes}m</TimeBox>
      <TimeBox>{seconds}s</TimeBox>
    </Flex>
  )
}
