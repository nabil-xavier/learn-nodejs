function samplePromies() {
  return Promise.resolve("Nabil");
}

async function run() {
  const name = await samplePromies();
  console.info(name);
}

run();
