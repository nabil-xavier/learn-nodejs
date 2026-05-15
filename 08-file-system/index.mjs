import fs from "fs/promises";

const buffer = await fs.readFile("08-file-system/index.mjs");

console.info(buffer.toString());

await fs.writeFile("08-file-system/temp.txt", "Hello");
