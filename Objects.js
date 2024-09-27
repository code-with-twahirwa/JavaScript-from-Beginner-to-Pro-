// JS OBJECTS
// An object is a data type that stores data in key-value pairs

const objOfPeople = {
  person1: "Gihozo",
  person2: "Umurerwa",
  person3: "Ngabo",
};

console.log(objOfPeople);

const obj1 = new Object();
const obj2 = new Object();
console.log(obj1);
(obj1.name = "Munezero"), (obj1.age = 12);
console.log(obj1);
obj2["name"] = "Umutoni";
obj2["age"] = 20;
obj2["homeTown"] = "Nyarusiza";
console.log(obj2);

//Accessing data in object
console.log(obj1.age);
console.log(obj2["name"]);

//Methods available on objects
console.log(Object.keys(obj1));
console.log(Object.getOwnPropertyNames(obj1))
console.log(Object.values(obj1));

//Static methods
const copyObj1 = Object.assign(obj1);
copyObj1.profession = "tailor";
console.log(copyObj1);
const copyObj2 = Object.create(obj2);
copyObj2.profession = "Carpenter";
console.log(copyObj2);
console.log(copyObj2.name);

console.log(obj1);
//Object.freeze(obj1);
console.log(Object.isFrozen(obj1))
obj1.hobby = "playing soccer"
console.log(obj1)
