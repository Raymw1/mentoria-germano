function myFunc() {
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
}

myFunc(15, '{"name": "John"}', "", '{"age": "30"}', '{"age": "45"}')