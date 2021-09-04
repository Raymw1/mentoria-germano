
function intervals() {
  const interval = setInterval(() => {
    console.log("I'm 2 seconds late!");
  }, 2000)
  
  setTimeout(() => {
    clearInterval(interval)
  }, 10000)
}

const promiseDelay = (message, millisec) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, millisec)
  })
}

promiseDelay("I have a delay", 2000).then((message) => console.log(message))
