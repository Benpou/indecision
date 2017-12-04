
class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  
  getGreeting() {
    return `Hi. I am ${this.name}!`;
  }
  
  getDescription() {
    return `${this.name} is ${this.age}.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  
  hasMajor() {
    return !!this.major;
  }
  
  getDescription() {
    let description = super.getDescription();
    
    if (this.hasMajor()) {
      description += ` The major is ${this.major}.`;
    }
    
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  
  // This part over write the main greeting in class
  hasHomeLocation() {
    return !!this.homeLocation;
  }
  
  getGreeting() {
    let greeting = super.getGreeting();
    
    if (this.hasHomeLocation()) {
      greeting += ` I'm visiting from ${this.homeLocation}`;
    }
    return greeting;
  }
}


const me = new Traveler('Ben', 26, 'LA');
console.log(me.getGreeting());
console.log(me.getDescription())



const other = new Student();
console.log(other);