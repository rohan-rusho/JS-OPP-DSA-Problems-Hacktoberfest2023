class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

class PersonCollection {
  constructor() {
    this.people = [];
  }

  addPerson(person) {
    this.people.push(person);
  }

  getOldestPerson() {
    if (this.people.length === 0) {
      return null;
    }

    let oldest = this.people[0];

    for (const person of this.people) {
      if (person.age > oldest.age) {
        oldest = person;
      }
    }

    return oldest;
  }
}

const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);
const person3 = new Person('Charlie', 35);

const peopleCollection = new PersonCollection();

peopleCollection.addPerson(person1);
peopleCollection.addPerson(person2);
peopleCollection.addPerson(person3);

const oldestPerson = peopleCollection.getOldestPerson();

if (oldestPerson) {
  oldestPerson.sayHello();
} else {
  console.log('No people in the collection.');
}
