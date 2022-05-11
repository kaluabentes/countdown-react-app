import eventsApi from "@/api/events"
import { Event } from "@/models/events"
import { useCallback, useState } from "react"

export default function useGetEvents() {
  const [isLoadingEvents, setIsLoadingEvents] = useState(false)
  const [events, setEvents] = useState<Event[]>([])

  const getEvents = useCallback(async () => {
    try {
      setIsLoadingEvents(true)
      const events = await eventsApi.getEvents()
      setEvents(events)
    } catch (error: any) {
      console.log(error.message)
    } finally {
      setIsLoadingEvents(false)
    }
  }, [])

  return { getEvents, events, isLoadingEvents }
}
