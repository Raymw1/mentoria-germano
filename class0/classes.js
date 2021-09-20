class Casa {
  constructor(janelas, portas) {
    this.janelas = janelas;
    this.portas = portas;
  }
  addWindows(quantity) {
    this.janelas += quantity;
  }
}

const novaCasa = new Casa(8, 8);
novaCasa.addWindows(2);
console.log(novaCasa);

class Animal {
  static scientficName = "Default"
  static clone(animal) {
    return new Animal(animal.patas, animal.asas, animal.voa)
  }
  constructor (patas, asas, voa) {
    this.patas = patas;
    this.asas = asas;
    this.voa = voa;
  }
  voar() {
    if (this.voa) {
      console.log("Estou voando!\n");
    } else {
      console.log("Vou caiir!\n");
    }
  }
}


const bird = new Animal(2, 2, true);
console.log(bird);
const sheep = Animal.clone(bird);
console.log(sheep);
console.log(Animal.scientficName);
bird.voar();

class Dog extends Animal {
  constructor(values, shaves) {
    super(...values)
    this.shaves = shaves
  }
  sing () {
    console.log("I'm singing")
  }
}

const doguinho = new Dog([4, 0, false], "Lots");
doguinho.sing();
console.log(JSON.parse(JSON.stringify(doguinho)));