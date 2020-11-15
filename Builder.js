// Will create Burger
class Burger {
  constructor () {
    this.sauce;
    this.cutlet;
    this.bread;
  }
  // add souse
  setSause (val) {
    this.sauce = val;
  };
  // add cotlet
  setCutlet (val) {
    this.cutlet = val;
  };
  // add bread
  setBread (val) {
    this.bread = val;
  };

  getSauce () {
		return this.sauce;
  };
  
	getBread () {
		return this.bread;
  };
  
	getCutlet () {
		return this.cutlet;
	};

  // clear all ingredients
  clear () {
    this.setSause(undefined);
    this.setCutlet(undefined);
    this.setBread(undefined);
  }
}

// Abstract Builder

class BurgerBuilder {
  constructor () {
    this.burger = new Burger();
  }

  getBurger() {
    return this.burger;
  }

  createNewBurger() {
    this.burger.clear();
  }

  // abstracts metods

  buildSause () { };
  buildCutlet () { };
  buildBread () { };
}

// we have two burgers in our cafe , BBQ and Black night

class BBQBurger extends BurgerBuilder {
  constructor () {
    super();
    this.burger = this.getBurger();
  }
// cerate abstarts metods
  buildSause () {
    this.burger.setSause('Hot');
   };
  buildCutlet () {
    this.burger.setCutlet('Cow');
   };
  buildBread () { 
    this.burger.setBread('White');
  };
}

class BlackNight extends BurgerBuilder {
  constructor () {
    super();
    this.burger = this.getBurger();
  }
// cerate abstarts metods
  buildSause () {
    this.burger.setSause('Chilli');
   };
  buildCutlet () {
    this.burger.setCutlet('Chiken');
   };
  buildBread () { 
    this.burger.setBread('Black');
  };
}

// who will take order
class Waiter {
  constructor () {
    this.burgerBuilder;
  }

  setBurgerBuilder (builder) {
    this.burgerBuilder = builder;
  }

  getBurger () {
    return this.burgerBuilder.getBurger();
  }

  constructBurger () {
    this.burgerBuilder.createNewBurger();
    this.burgerBuilder.buildBread();
    this.burgerBuilder.buildSause();
    this.burgerBuilder.buildCutlet();
  }
}

// order our burgers

const waiter = new Waiter();

const firstBurger = new BBQBurger ();
waiter.setBurgerBuilder (firstBurger); // <-- take our order
waiter.constructBurger(); // <-- add burger's ingredients
const  bbqBurger = waiter.getBurger(); // <-- burger is ready
console.log(bbqBurger.getCutlet() + ', ' + bbqBurger.getBread() + ', ' + bbqBurger.getSauce()) // <-- burger's set

const secondBurger = new BlackNight();
waiter.setBurgerBuilder(secondBurger);
waiter.constructBurger();
const blackNight = waiter.getBurger();
console.log(blackNight.getCutlet() + ', ' + blackNight.getBread() + ', ' + blackNight.getSauce());

/* 
What we done:

1) create class which Know about set burgers and can clear his ingredients;
2) create builder which take abstract burger and can return this burger also has abstract methods for create ingredients;
3) create burger which extends from builder (point 2) and use abstracts methods;
4) create witer he takes our burger, add burger's setting and can return burger

*/