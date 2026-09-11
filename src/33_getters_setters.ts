class Temperature {
  #c = 0

  constructor (celsius: number) {
    this.celsius = celsius
  }

  get celsius (): number {
    return this.#c
  }

  set celsius (value: number) {
    this.#c = value
  }

  get fahrenhiet (): number {
    return (this.#c * 9) / 5 + 32
  }

  set fahrenhiet (f: number) {
    this.celsius = (f * 9) / 5 + 32
  }
}

const t = new Temperature(6)

t.fahrenhiet = 23
