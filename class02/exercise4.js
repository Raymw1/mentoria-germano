function sum(num1, num2, callback, errorCallback) {
  return new Promise((resolve, reject) => {
    let sum = sumNums(num1, num2)
    setTimeout(() => {
      if (sum == 2) {
        resolve("Success!")
      } else {
        reject("Failed!")
      }
    }, 1000)
  })
}

function sumNums(num1, num2) {
  return num1 + num2
}

function usePromises() {
  const log = (something) => console.log(something)
  const rejected = sum(1, 2).then(log).catch(log) // Rejected
  const resolved = sum(1, 1).then(log).catch(log) // Resolved
  const pending = sum(1, 1) // Pending
  console.log(pending)
}

usePromises()