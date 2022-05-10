import dayjs, { Dayjs } from "dayjs"
import padZeros from "./padZeros"

export default function getRemainingTime(countdown: number) {
  const countdownDayJs = dayjs(countdown)
  const nowDayJs = dayjs()

  return {
    seconds: getSeconds(nowDayJs, countdownDayJs),
    minutes: getMinutes(nowDayJs, countdownDayJs),
    hours: getHours(nowDayJs, countdownDayJs),
    days: getDays(nowDayJs, countdownDayJs),
  }
}

function getSeconds(nowDayJs: Dayjs, countdownDayJs: Dayjs) {
  const seconds = countdownDayJs.diff(nowDayJs, "seconds") % 60
  return padZeros(seconds, 2)
}

function getMinutes(nowDayJs: Dayjs, countdownDayJs: Dayjs) {
  const minutes = countdownDayJs.diff(nowDayJs, "minutes") % 60
  return padZeros(minutes, 2)
}

function getHours(nowDayJs: Dayjs, countdownDayJs: Dayjs) {
  const hours = countdownDayJs.diff(nowDayJs, "hours") % 24
  return padZeros(hours, 2)
}

function getDays(nowDayJs: Dayjs, countdownDayJs: Dayjs) {
  const days = countdownDayJs.diff(nowDayJs, "days") % 365
  return days.toString()
}
