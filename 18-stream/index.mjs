import fs from "fs";

const writer = fs.createWriteStream("./18-stream/target.log");
writer.write("First Name\n");
writer.write("Second Name\n");
writer.end();

const reader = fs.createReadStream("./18-stream/target.log");
reader.addListener("data", (data) => {
  console.info(data.toString());
});
