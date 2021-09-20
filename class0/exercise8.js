const array = [1, 23, 12, 34, 12, 21, 2, 21, 23]
function waitTo(message, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(message);
      resolve()
    }, time)
  })
}

async function init(array) {
  for (let num of array) {
    await waitTo(num, 2000)
  }
  // const arrayPromises = array.map(num => await waitTo(num, 2000));
  // return Promise.all(arrayPromises);
}


init(array)