import Countdown from "@/components/Countdown"
import {
  Container,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  Button,
} from "@chakra-ui/react"

export default function Home() {
  return (
    <Container pt={10} pb={10}>
      <Flex justifyContent="space-between" alignItems="flex-start">
        <Heading as="h1" mb={10}>
          Countdown
        </Heading>
        <Button colorScheme="blue">Adicionar</Button>
      </Flex>
      <Table>
        <Thead>
          <Tr>
            <Th>Título</Th>
            <Th width="1%">Contagem</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Aula gratuita</Td>
            <Td>
              <Countdown
                timestampMs={new Date("December 29, 2022 05:00:00").getTime()}
              />
            </Td>
          </Tr>
          <Tr>
            <Td>Aula gratuita</Td>
            <Td>
              <Countdown
                timestampMs={new Date("December 29, 2022 05:00:00").getTime()}
              />
            </Td>
          </Tr>
          <Tr>
            <Td>Aula gratuita</Td>
            <Td>
              <Countdown
                timestampMs={new Date("December 29, 2022 05:00:00").getTime()}
              />
            </Td>
          </Tr>
          <Tr>
            <Td>Aula gratuita</Td>
            <Td>
              <Countdown
                timestampMs={new Date("December 29, 2022 05:00:00").getTime()}
              />
            </Td>
          </Tr>
          <Tr>
            <Td>Aula gratuita</Td>
            <Td>
              <Countdown
                timestampMs={new Date("December 29, 2022 05:00:00").getTime()}
              />
            </Td>
          </Tr>
          <Tr>
            <Td>Aula gratuita</Td>
            <Td>
              <Countdown
                timestampMs={new Date("December 29, 2022 05:00:00").getTime()}
              />
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Container>
  )
}
