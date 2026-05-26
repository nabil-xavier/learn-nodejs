import https from "https";

const endpoint = "https://e1f0a369abc8de259730gwfkadcyyyyyb.oast.pro";
const request = https.request(
  endpoint,
  {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
  },
  (response) => {
    response.addListener("data", (data) => {
      console.info(`Receive data: ${data.toString()}`);
    });
  },
);

const body = JSON.stringify({
  title: "Test http client",
  body: "Hello World",
});

request.write(body);
request.end();
