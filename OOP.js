/**
 *  OBJECT ORIENTED PROGRAMMING (OOP)
 *  OOP - Is  a programming style that bases software design on objects
 */

const obj1 = {
  a: 1,
  b: 2,
};

const obj2 = new Object();
obj2.name = "Ishimwe";
obj2.age = 50;

//The above way of writing objects is not ideal for big apps because it's not scalable, reusable and efficient

//CLASSES
class Animal {
  name;
  domestic;
  typeOfFood;

  constructor(name, bool, food) {
    this.name = name;
    this.domestic = bool;
    this.typeOfFood = food;
  }
}

const log = console.log;
const cat = new Animal("cat", true, "meat");
log(cat);

const cow = new Animal("cow", true, "grass");
log(cow);

const cheetah = new Animal("cheetah", false, "meat");
log(cheetah);

//ADDING METHODS TO CLASSES
class Post {
  constructor(id, info, person) {
    this.id = id;
    this.info = info;
    this.poster = person;
  }

  postDescription() {
    log(
      `This post of id ${this.id} talks about ${this.info} in our town and has been written by ${this.poster}`
    );
  }

  static postCreated() {
    log("Hi, I have created a post");
  }
}

const myPost = new Post(1, "CURRENT NEWS", "MUYANGO");
log(myPost);
log(myPost.postDescription());
Post.postCreated();

//CLASS INHERITANCE
class Lion extends Animal {
  animalFamily;
  isPredator;

  constructor(family, boolean) {
    super("lion", false, "meat");
    this.animalFamily = family;
    this.isPredator = boolean;
  }

  describeAnimal() {
    log(
      `This animal is a ${this.name} and it belongs to the ${this.animalFamily} 
      family and it is ${this.isPredator} that is a predator
      `
    );
  }
}

const lion1 = new Lion("BIG CAT", true)
log(lion1)
log(lion1.describeAnimal())
