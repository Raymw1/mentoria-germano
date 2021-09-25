function reverseString(string) {
  const reversedString = []
  for (let char of string) {
    reversedString.unshift(char.toLowerCase())
  }
  return reversedString.join("")
}

module.exports = reverseString
