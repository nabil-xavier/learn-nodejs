import http from "http";

const server = http.createServer((req, res) => {
  console.info(req.method);
  console.info(req.url);

  if (req.method === "POST") {
    req.addListener("data", (data) => {
      res.setHeader("Content-Type", "application/json");
      res.write(data);
      res.end();
    });
  } else {
    if (req.url === "/test") {
      res.write("test server");
    } else {
      res.write("Hello World");
    }
    res.end();
  }

});

server.listen(3000);
