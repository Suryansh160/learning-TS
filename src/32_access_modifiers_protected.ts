// protected -> class, subclass

class Animal {
  protected energy = 23

  eat (amount: number) {
    this.energy = Math.min(100, this.energy + amount)
  }
}

class Dog extends Animal {
  run () {
    this.energy -= 10
  }

  status () {
    return this.energy
  }
}

const D = new Dog()
D.eat(65)
D.run()
D.status()

// D.energy