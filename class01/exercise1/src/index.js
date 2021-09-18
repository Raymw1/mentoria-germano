const http = require("http");
const status = require("http-status");
const server = http.createServer();
const fs = require("fs");

let names = null;
server.on("request", (req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.write(`<html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <h1>Página inicial</h1>
    </body>
    </html>`);
  }

  if (req.url.startsWith("/json") && req.method === "GET") {
    let query = req.url.split("=");
    let wantedNames = null;
    try {
      query.shift();
      query = query[0]?.split(",");
      let file = null
      try {
        file = fs.readFileSync("src/names.txt", "utf-8").split("\n");
      } catch (err) {
        console.error(err);
        file = names
      }
      wantedNames = new Set();
      if (Array.isArray(file)) {
        file?.forEach((name) => {
          query.forEach((queryName) => {
            if (name.includes(queryName)) wantedNames.add(name);
          });
        });
      } else {
        query.forEach((queryName) => {
          if (file?.includes(queryName)) wantedNames.add(file);
        });
      }
      wantedNames = Array.from(wantedNames);
    } catch {
      try {
        file = fs.readFileSync("src/names.txt", "utf-8").split("\n");
      } catch (err) {
        console.error(err);
        file = names
      }
      wantedNames = file
    }
    res.end(JSON.stringify({ names: wantedNames }));
  }

  if (req.url.startsWith("/json") && req.method === "POST") {
    let body = [];
    req
      .on("data", (bit) => {
        body.push(bit);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        try {
          if (!body) {
            res.statusCode = 400;
            return res.end("Bad request");
          }
          const json = JSON.parse(body);
          if (!json.names) {
            res.statusCode = 400;
            return res.end("Bad request");
          }
          names = json.names;
          names = Array.isArray(names)
            ? names.map((name) => name.toLowerCase())
            : names.toLowerCase();
          let file = null;
          try {
            file = fs.readFileSync("src/names.txt", "utf-8");
            file = file.split("\n");
            file = new Set(file);
            Array.isArray(names)
              ? names.forEach((name) => file.add(name))
              : file.add(names);
            file = Array.from(file).join("\n");
            fs.writeFileSync("src/names.txt", file)
          } catch (err) {
            console.error(err);
          }
          res.end(
            JSON.stringify({
              message: `Names added: ${names}`,
            })
          );
        } catch (err) {
          console.error(err);
          res.statusCode = 400;
          res.end("Bad request");
        }
      });
  }

  // res.end()
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Go to http://127.0.0.1:${PORT}`);
});
