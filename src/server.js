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
  } else if (endpoint === "/node") {
  } else if (endpoint === "/girls") {
  } else {
    const extension = endpoint.split(".")[1];

    const extensionType = {
      css: "text/css",
      js: "text/js",
      ico: "image/x-icon",
      jpg: "image/jpeg",
      png: "image/png"
    };

    fs.readFile(__dirname + "/../public/" + endpoint, function(error, file) {
      if (error) {
        console.log(error);
        return;
      } else {
        response.writeHead(200, { "content-type": extensionType[extension] });
        response.end(file);
      }
    });
  }
}

const server = http.createServer(handler);

server.listen(3000, function() {
  console.log("Server listening on port 3000, ready to accept requests ;)");
});
