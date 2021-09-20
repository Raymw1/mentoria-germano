const fs = require("fs");
let content;

function tryAndCatch() {
  try {
    content = fs.readFileSync("class0/file.md", "utf-8");
  } catch (err) {
    console.error(err);
  }

  console.log("File read!\n", content);
}

function callbackFunctions() {
  fs.readFile("class0/file.md", "utf-8", function (err, content) {
    if (err) return console.error(err);
    console.log("File read!\n", content);
  });
}

function usePromises() {
  const readPromise = (path) => {
    return new Promise((resolve, reject) => {
      fs.readFile("class0/file.md", "utf-8", function (err, content) {
        if (err) reject(err);
        resolve(content);
      });
    });
  };
  readPromise("class0/file.md")
    .then((content) => console.log("File read!\n", content))
    .catch((err) => console.error(err));
}

async function asyncs() {
  async function readFile() {
    return fs.readFileSync("class0/file.md", "utf-8", () => {});

  }
  const file = await readFile();
  console.log("File read!", file);
}

asyncs()