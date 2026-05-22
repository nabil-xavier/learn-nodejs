import timers from "timers/promises"

console.info("Wait until 3 seconds")
await timers.setTimeout(3000)
console.info("Executed")

