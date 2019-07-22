const http = require("http");
const fs = require("fs");

function handler(request, response) {
  const endpoint = request.url;
  const method = request.method;

  if (endpoint === "/") {
    response.writeHead(200, { "content-type": "text/html" });

    fs.readFile(__dirname + "/../public/index.html", function(error, file) {
      if (error) {
        console.log(error);
        return;
      }

      response.end(file);
    });
  }
}

const server = http.createServer(handler);

server.listen(3000, function() {
  console.log("Server listening on port 3000, ready to accept requests ;)");
});
