const http = require("http");

const server = http.createServer(handler);

const message = "Hi, from G and G";

function handler(request, response) {
  response.writeHead(200, { "content-type": "text/html" });
  response.write(message);
  response.end();
}

server.listen(3000, function() {
  console.log("Server listening on port 3000, ready to accept requests ;)");
});
