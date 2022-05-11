import { Box, Heading, Text } from "@chakra-ui/react"

export default function EmptyState() {
  return (
    <Box textAlign="center" bg="gray.50" p={5} rounded="lg">
      <Heading as="h2" fontSize="3xl" fontWeight="400" mb={3}>
        Não há eventos criados
      </Heading>
      <Text color="gray.500">
        Para criar um novo evento clique no botão Adicionar
      </Text>
    </Box>
  )
}
