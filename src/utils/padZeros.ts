export default function padZeros(number: number, length: number) {
  return String(number).padStart(length, "0")
}
