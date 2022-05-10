import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"

interface TimeBoxProps {
  children: ReactNode
}

export default function TimeBox({ children }: TimeBoxProps) {
  return (
    <Box bg="gray.800" color="white" fontWeight="bold" rounded="sm" p={1}>
      {children}
    </Box>
  )
}
