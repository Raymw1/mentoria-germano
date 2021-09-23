function getNames(objects) {
  const names = objects.map((obj) => {
    if (typeof obj.firstname == 'string' && typeof obj.lastname == 'string') return `${obj.firstname} ${obj.lastname}`
  });
  return names.filter(name => name !== undefined)
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

module.exports = getNames;