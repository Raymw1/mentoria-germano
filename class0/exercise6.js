function myFunc() {
  for (index in arguments) {
    const argument = arguments[index]
    if (typeof argument == "string") {
      try {
        console.log(JSON.parse(argument));
      } catch (err) {
        console.log("Não é JSON");
      }
    }
  }
}

myFunc(15, '{"name": "John"}', "", '{"age": "30"}', '{"age": "45"}')