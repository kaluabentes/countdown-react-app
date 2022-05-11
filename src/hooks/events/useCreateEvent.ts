import eventsApi from "@/api/events"
import { Event, FormEvent } from "@/models/events"
import adaptEvent from "@/utils/adaptEvent"
import { useState } from "react"

export default function useCreateEvent(callback?: () => void) {
  const [isCreatingEvent, setIsCreatingEvent] = useState(false)

  async function createEvent(event: FormEvent) {
    try {
      setIsCreatingEvent(true)
      await eventsApi.createEvent(adaptEvent(event))
      if (callback) callback()
    } catch (error: any) {
      console.log(error.message)
    } finally {
      setIsCreatingEvent(false)
    }
  }

  return { isCreatingEvent, createEvent }
}
