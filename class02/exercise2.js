function onlyNumbers(list) {
  const checkIfIsNum = (num) => typeof num == "number";
  return list.filter(checkIfIsNum)
}

const list = ['qwd', 123, false, true, 132, 2, 4, [1], 2, 1, "4r", "4"]
console.log(onlyNumbers(list));
