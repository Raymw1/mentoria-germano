const type1 = 1;
const type2 = "false";
const type3 = false;
const type4 = {};
const type5 = undefined;

function printType(value) {
  return console.log(`Tipo de ${value}: ${typeof(value)}`);
}

printType(type1);
printType(type2);
printType(type3);
printType(type4);
printType(type5);
