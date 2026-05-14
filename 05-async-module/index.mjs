function samplePromies() {
  return Promise.resolve("Nabil");
}

const name = await samplePromies();
console.info(name);
