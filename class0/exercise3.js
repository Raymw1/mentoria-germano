const array = [30, 5, 5, 18, 43, 16, 21, 16, 24, 4, 38, 3, 18, 19, 18, 42, 6, 35, 38, 43];
function sortArray(array) {
  return array.sort((num1, num2) => {
    if (num1 < num2) {
      return -1;
    } else if (num1 > num2) {
      return 1;
    } else {
      return 0;
    }
  })
}

function sortInEvenAndOdd(array) {
  array = array.sort((num1, num2) => {
    if (num1 % 2 == 0) {
      return -1;
    } else {
      return 1;
    }
  })
  return array
  // const even = [];
  // const odd = [];
  // array.forEach(num => {
  //   if (num % 2 === 0) even.push(num);
  // });
  // array.forEach(num => {
  //   if (num % 2 !== 0) odd.push(num);
  // });
  // return even.concat(odd)
}

sortArray(array);
const arrayEvenAndOdd = sortInEvenAndOdd(array);
console.log(arrayEvenAndOdd);
console.log(array);
