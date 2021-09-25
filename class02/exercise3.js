function findElement(list, wanted) {
  return list.indexOf(wanted)
}

const list = [1, 2, 3, 4, "foo", 5, 6, 7, 8, 9];
console.log(`Index: ${findElement(list, "foo")}`);