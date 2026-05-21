import readline from "readline/promises";
import process from "process";

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function questionPrompt() {
  const answer = await input.question("What is your name? ");
  console.info(`Hello ${answer}`);
  input.close();
}

questionPrompt();
