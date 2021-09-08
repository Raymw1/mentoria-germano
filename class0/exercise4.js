function toFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}

const celsius = 4;
const stringFahrenheit = `${celsius} graus celsius são ${toFahrenheit(celsius)} graus fahrenheit!`;
const countWords = stringFahrenheit.split(" ").length
console.log(`"${stringFahrenheit}" tem ${countWords} palavras`);
