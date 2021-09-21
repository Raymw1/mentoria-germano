const express = require("express");
const server = express();
const routes = require("./routes/index")

server.use(express.json());
server.use(routes);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Go to http://127.0.0.1:${PORT}`);
})

