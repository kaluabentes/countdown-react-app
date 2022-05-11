import { AdaptedEvent, Event } from "@/models/events"
import { API_DELAY } from "@/utils/constants"

function createEvent(event: AdaptedEvent) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const localEvents = localStorage.getItem("events")
      let events = []

      if (localEvents) {
        events = JSON.parse(localEvents)
      }

      const newEvents = [
        ...events,
        {
          ...event,
          id: events.length + 1,
        },
      ]

      localStorage.setItem("events", JSON.stringify(newEvents))

      resolve({ message: "ok" })
    }, API_DELAY)
  })
}

function getEvents(event: Event) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const localEvents = localStorage.getItem("events")
      let events = []

      if (localEvents) {
        events = JSON.parse(localEvents)
      }

      resolve(events)
    }, API_DELAY)
  })
}

function deleteEvent(eventId: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const localEvents = localStorage.getItem("events")
      let events = []

      if (localEvents) {
        events = JSON.parse(localEvents)
      }

      const newEvents = events.filter((event: Event) => event.id !== eventId)

      localStorage.setItem("events", JSON.stringify(newEvents))

      resolve({ message: "ok" })
    }, API_DELAY)
  })
}

const eventsApi = {
  createEvent,
  getEvents,
  deleteEvent,
}

export default eventsApi
