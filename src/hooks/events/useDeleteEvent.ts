import eventsApi from "@/api/events"
import { useState } from "react"

export default function useDeleteEvent() {
  const [isDeletingEvent, setIsDeletingEvent] = useState(false)

  async function deleteEvent(eventId: number) {
    try {
      setIsDeletingEvent(true)
      await eventsApi.deleteEvent(eventId)
    } catch (error: any) {
      console.log(error.message)
    } finally {
      setIsDeletingEvent(false)
    }
  }

  return {
    deleteEvent,
    isDeletingEvent,
  }
}
