const http = require("http");
const server = http.createServer();

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
    query.shift();
    query = query[0].split(",");
    let wantedNames = new Set();
    names?.forEach((name) => {
      query.forEach((queryName) => {
        if (name.includes(queryName)) wantedNames.add(name);
      });
    });
    wantedNames = Array.from(wantedNames);
    res.end(JSON.stringify({ names: wantedNames }));
    // res.end(JSON.stringify({ names: names }))
  }

  if (req.url.startsWith("/json") && req.method === "POST") {
    let body = [];
    req
      .on("data", (bit) => {
        body.push(bit);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        const json = JSON.parse(body);
        names = json.name;
        names = names.map((name) => name.toLowerCase());
        res.end(
          JSON.stringify({
            message: `Names added: ${json.name}`,
          })
        );
      });
  }

  // res.end()
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Go to http://127.0.0.1:${PORT}`);
});
