const http = require("http");
const status = require("http-status");
const server = http.createServer();
const fs = require("fs");

let names = null;
server.on("request", (req, res) => {
  if (req.url.startsWith("/") && req.method === "GET") {
    let results = [];
    try {
      let queries = req.url.split("?");
      queries.shift();
      let file = null
      try {
        file = fs.readFileSync("src/names.txt", "utf-8").split("\n");
      } catch (err) {
        console.error(err);
        file = names
      }
      if (queries.length > 0) {
        queries = queries[0].split("&");
        const values = {};
        queries.forEach(query => {
          const name = `${query.split("=")[0]}`;
          const value = `${query.split("=")[1]}`;
          values[name] = value;
        })
        const wantedName = values.name;
        file.forEach(name => {
          if (name.includes(wantedName)) results.push(name);
        })
      } else {
        results = file
      }
    } catch {
      try {
        file = fs.readFileSync("src/names.txt", "utf-8").split("\n");
      } catch (err) {
        console.error(err);
        file = names
      }
      results = file
    }
    res.end(JSON.stringify({ names: results }));
  }

  if (req.url.startsWith("/") && req.method === "POST") {
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
