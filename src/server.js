const http = require("http");

const server = http.createServer();

server.listen(3000, function() {
  console.log("Server listening on port 3000, ready to accept requests ;)");
});
