const buffer = Buffer.from("Name", "utf8")

console.info(buffer.toString())
console.info(buffer.toString("hex"))
console.info(buffer.toString("base64"))
console.info(buffer.toString("base64url"))
console.info(buffer.toString("ascii"))
