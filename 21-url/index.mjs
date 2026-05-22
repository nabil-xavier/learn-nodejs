import { URL } from "url";

const testUrl = new URL("https://test.com/path?query=true");

console.info(testUrl.toString());
console.info(testUrl.href);
console.info(testUrl.protocol);
console.info(testUrl.host);
console.info(testUrl.pathname);
console.info(testUrl.searchParams);
