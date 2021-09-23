function sumAges() {
  let totalAge = 0;
  for (index in arguments) {
    let argument = arguments[index]
    if (typeof argument == "string") {
      try {
        argument = JSON.parse(argument);
        if (argument.age && (typeof argument.age == 'number')) totalAge += Number(argument.age);
      } catch (err) {
      }
    }
  }
  return totalAge
}

module.exports = sumAges
