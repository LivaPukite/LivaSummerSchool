class Person {
  constructor(name, surname, age, job, isSleeping) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.job = job;
    this.isSleeping = isSleeping;
  }
  sleeping() {
    return console.log((this.Sleeping = true));
  }

  calcAge() {
    return console.log(2024 - this.age);
  }

  introduce() {
    console.log(`Hi, my name is ${this.name}`);
  }
}

module.exports = Person;

//new Person('Liva', 'Pukite', 22, 'IT', false).sleeping();
