import { Console } from "console";
import fs from "fs";

const file = fs.createWriteStream("./22-console/application.log");

const log = new Console({
  stdout: file,
  stderr: file,
});

log.info("Hello World");
log.error("Error message");

const message = {
  title: "title",
  body: "body",
};

log.table(message);
