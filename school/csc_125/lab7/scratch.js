class Foo {
  hi = "hello"
  constructor(name) {
    this.name = name
  }

  hello(){
    console.log(`${this.hi} ${this.name}`)
  }
}
