function getNames(objects) {
  return objects.map((obj) => `${obj.firstname} ${obj.lastname}`);
}

const names = [
  {
    firstname: "Rayan",
    lastname: "Wilbert",
  },
  {
    firstname: "Bruno",
    lastname: "Germano",
  },
  {
    firstname: "Pedro",
    lastname: "Henrique",
  },
  {
    firstname: "José",
    lastname: "Augusto",
  },
  {
    firstname: "Victor",
    lastname: "Pereira",
  },
];
console.log(getNames(names));
