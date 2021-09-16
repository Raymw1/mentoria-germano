const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  // res.sendFile(__dirname + "/index.html");
  res.send("GET na rota /");
});

routes.post("/", (req, res, next) => {
  if (!req.body?.name) return res.status("401").send("Not authorized");
  next();
}, (req, res) => {
  const data = req.body;
  res.send(JSON.stringify({ rota: "POST na rota /", nome: `${data.name}!`}));
});

routes.put("/", (req, res) => {
  res.send("PUT na rota /");
});

routes.delete("/", (req, res) => {
  res.send("DELETE na rota /");
});

module.exports = routes;
