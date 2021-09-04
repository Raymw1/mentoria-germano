const username = "Rayan";
const mentorname = "Germano";
const int = 1;
const string = "1";

function printResults(value1, value2, strict = false) {
  const result = strict ? value1 === value2 : value1 == value2;
  return console.log(`${value1} ${strict ? '===' : "=="} ${value2}?\nResposta: ${result}\n`);
}

printResults(username, mentorname, true);
printResults(int, string);
printResults(int, string, true);