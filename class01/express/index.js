const express = require("express");
const server = express();
const routes = require("./routes/index");

// server.use(express.urlencoded({ extended: true }))
server.use(express.json())
server.use(routes);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://127.0.0.1:${PORT}`);
});
