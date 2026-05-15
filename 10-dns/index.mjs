import dns from "dns/promises";

const address = await dns.lookup("www.github.com");

console.info(address.address);
console.info(address.family);
