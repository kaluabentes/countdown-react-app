import dayjs, { Dayjs } from "dayjs"
import padZeros from "./padZeros"

export default function getRemainingTime(finalMs: number) {
  const finalDayJs = dayjs(finalMs)
  const nowDayJs = dayjs()

  return {
    seconds: getSeconds(nowDayJs, finalDayJs),
    minutes: getMinutes(nowDayJs, finalDayJs),
    hours: getHours(nowDayJs, finalDayJs),
    days: getDays(nowDayJs, finalDayJs),
  }
}

function getSeconds(nowDayJs: Dayjs, finalDayJs: Dayjs) {
  const seconds = finalDayJs.diff(nowDayJs, "seconds") % 60
  return padZeros(seconds, 2)
}

function getMinutes(nowDayJs: Dayjs, finalDayJs: Dayjs) {
  const minutes = finalDayJs.diff(nowDayJs, "minutes") % 60
  return padZeros(minutes, 2)
}

function getHours(nowDayJs: Dayjs, finalDayJs: Dayjs) {
  const hours = finalDayJs.diff(nowDayJs, "hours") % 24
  return padZeros(hours, 2)
}

function getDays(nowDayJs: Dayjs, finalDayJs: Dayjs) {
  const days = finalDayJs.diff(nowDayJs, "days") % 365
  return days.toString()
}
