import {
  Container,
  Heading,
  Flex,
  Button,
  useDisclosure,
  Spinner,
} from "@chakra-ui/react"
import { useEffect } from "react"

import AddModal from "@/components/AddModal"
import EmptyState from "@/components/EmptyState"
import EventsTable from "@/components/EventsTable"
import useCreateEvent from "@/hooks/events/useCreateEvent"
import useDeleteEvent from "@/hooks/events/useDeleteEvent"
import useGetEvents from "@/hooks/events/useGetEvents"
import { Event, FormEvent } from "@/models/events"

export default function Home() {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { createEvent, isCreatingEvent } = useCreateEvent(() => {
    onClose()
  })
  const { getEvents, events, isLoadingEvents } = useGetEvents()
  const { deleteEvent, isDeletingEvent } = useDeleteEvent()

  useEffect(() => {
    getEvents()
  }, [getEvents])

  function handleDelete(eventId: number) {
    deleteEvent(eventId)
    getEvents()
  }

  async function handleCreate(values: FormEvent) {
    await createEvent(values)
    getEvents()
  }

  function renderEvents(eventsList: Event[]) {
    if (!eventsList.length) {
      return <EmptyState />
    }

    return <EventsTable events={eventsList} onDelete={handleDelete} />
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
      {isLoadingEvents || isDeletingEvent ? (
        <Flex justifyContent="center" height="100" alignItems="center">
          <Spinner />
        </Flex>
      ) : (
        renderEvents(events)
      )}
      <AddModal
        onSubmit={handleCreate}
        isOpen={isOpen}
        isCreating={isCreatingEvent}
        onClose={onClose}
      />
    </Container>
  )
}
