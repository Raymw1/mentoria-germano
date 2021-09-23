const express = require("express");
const server = express();

server.use(express.json());

server.get("/", () => {
  let totalAge = null;
  for (index in arguments) {
    let argument = arguments[index]
    if (typeof argument == "string") {
      try {
        argument = JSON.parse(argument);
        console.log(argument);
        if (argument.age) totalAge += Number(argument.age);
      } catch (err) {
        console.log("Não é JSON");
      }
    }
  }
  console.log(`Soma das idades: ${totalAge}!`);
})


const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Go to http://127.0.0.1:${PORT}`);
})

