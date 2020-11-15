class Product {
  getName () {}
  getNumber () {}
  getModel () {}
}

class ConcreateProductA extends Product{
  constructor () {
    super();
    this.number = 'L33F13V8'
  }

  getName () {
    return 'Phone';
  }
  getNumber () {
    return this.number;
  }
  getModel () {
    return 'Modal N10';
  }
}

class Creator {
  FactoryMethod () {}
}

class ConcreateCreatorA extends Creator {
  FactoryMethod () {
    return new ConcreateProductA ();
  }
}

const creator = new ConcreateCreatorA();
const metods = creator.FactoryMethod();

console.log(metods.getName() + ', ' + metods.getNumber() + ', ' + metods.getModel());