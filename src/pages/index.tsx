import AddModal from "@/components/AddModal"
import Countdown from "@/components/Countdown"
import useCreateEvent from "@/hooks/events/useCreateEvent"
import useGetEvents from "@/hooks/events/useGetEvents"
import { Event } from "@/models/events"
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
  Spinner,
  Box,
} from "@chakra-ui/react"
import { useEffect } from "react"

export default function Home() {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { createEvent, isCreatingEvent } = useCreateEvent(() => {
    onClose()
  })
  const { getEvents, events, isLoadingEvents } = useGetEvents()

  useEffect(() => {
    getEvents()
  }, [getEvents])

  function renderEvents(eventsList: Event[]) {
    if (!eventsList.length) {
      return <Box>Não há eventos criados</Box>
    }

    return (
      <Table>
        <Thead>
          <Tr>
            <Th>Título</Th>
            <Th>Description</Th>
            <Th width="1%">Contagem</Th>
          </Tr>
        </Thead>
        <Tbody>
          {eventsList.map((event) => (
            <Tr key={event.id}>
              <Td>{event.title}</Td>
              <Td>{event.description}</Td>
              <Td>
                <Countdown timestampMs={new Date(event.date).getTime()} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    )
  }

  return (
    <Container maxW="container.lg" pt={10} pb={10}>
      <Flex justifyContent="space-between" alignItems="flex-start">
        <Heading as="h1" mb={10}>
          Countdown
        </Heading>
        <Button colorScheme="blue" onClick={onOpen}>
          Adicionar
        </Button>
      </Flex>
      {isLoadingEvents ? (
        <Flex justifyContent="center" height="100" alignItems="center">
          <Spinner />
        </Flex>
      ) : (
        renderEvents(events)
      )}
      <AddModal
        onSubmit={createEvent}
        isOpen={isOpen}
        isCreating={isCreatingEvent}
        onClose={onClose}
      />
    </Container>
  )
}
