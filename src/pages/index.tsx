import AddModal from "@/components/AddModal"
import Countdown from "@/components/Countdown"
import useCreateEvent from "@/hooks/events/useCreateEvent"
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
  useDisclosure,
} from "@chakra-ui/react"

export default function Home() {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { createEvent, isCreatingEvent } = useCreateEvent(() => {
    onClose()
  })

  return (
    <Container pt={10} pb={10}>
      <Flex justifyContent="space-between" alignItems="flex-start">
        <Heading as="h1" mb={10}>
          Countdown
        </Heading>
        <Button colorScheme="blue" onClick={onOpen}>
          Adicionar
        </Button>
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
        </Tbody>
      </Table>
      <AddModal
        onSubmit={createEvent}
        isOpen={isOpen}
        isCreating={isCreatingEvent}
        onClose={onClose}
      />
    </Container>
  )
}
