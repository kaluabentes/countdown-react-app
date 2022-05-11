import { FormEvent } from "@/models/events"
import dayjs from "dayjs"

export default function adaptEvent(formEvent: FormEvent) {
  let date: Date = new Date()

  if (formEvent.dateMethod === "days") {
    date = dayjs().add(Number(formEvent.date), "days").toDate()
  }

  if (formEvent.dateMethod === "date") {
    date = new Date(formEvent.date)
  }

  return {
    date,
    title: formEvent.title,
    description: formEvent.description,
  }
}
