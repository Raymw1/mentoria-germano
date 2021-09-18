const http = require("http");
const server = http.createServer();

let names = [];
server.on("request", (req, res) => {
  if (req.url.startsWith("/") && req.method === "GET") {
    let queries = req.url.split("?");
    queries.shift();
    let results = [];
    if (queries.length > 0) {
      queries = queries[0].split("&");
      const values = {};
      queries.forEach(query => {
        const name = `${query.split("=")[0]}`;
        const value = `${query.split("=")[1]}`;
        values[name] = value;
      })
      const wantedName = values.name;
      names.forEach(name => {
        if (name.includes(wantedName)) results.push(name);
      })
    } else {
      results = names
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
        const json = JSON.parse(body);
        names.push(json.name.toLowerCase());
        return res.end(
          JSON.stringify({
            message: `Name added: ${json.name}`,
          })
        );
      });
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Go to http://127.0.0.1:${PORT}`);
});
