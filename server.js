const http = require("http");
const handler = require("./src/handler");

const server = http.createServer(handler);

server.listen(3000, function() {
  console.log("Server listening on port 3000, ready to accept requests ;)");
});
