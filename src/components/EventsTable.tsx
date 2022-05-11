import { Event } from "@/models/events"
import { Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import Countdown from "./Countdown"

interface EventsTableProps {
  events: Event[]
  onDelete: (eventId: number) => void
}

export default function EventsTable({ events, onDelete }: EventsTableProps) {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Título</Th>
          <Th>Description</Th>
          <Th width="1%">Contagem</Th>
          <Th width="1%">Ações</Th>
        </Tr>
      </Thead>
      <Tbody>
        {events.map((event) => (
          <Tr key={event.id}>
            <Td>{event.title}</Td>
            <Td>{event.description}</Td>
            <Td>
              <Countdown timestampMs={new Date(event.date).getTime()} />
            </Td>
            <Td>
              <Button onClick={() => onDelete(event.id)}>Excluir</Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}
