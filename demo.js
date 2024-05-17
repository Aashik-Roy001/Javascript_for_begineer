// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "myValue1";
// const value2 = "myValue2";

// const myObject = {};

// myObject[key1] = value1;
// myObject[key2] = value2;

// console.log(myObject);
// console.log(typeof myObject);

//===================================

// const arr = ["item1", "item2"];
// // const newArr = [...arr, 100];

// // console.log(arr);
// // console.log(newArr);

// const [var1, ...newArr] = arr;
// console.log(var1);

// console.log(arr);
// console.log(newArr);

//===========================================

// const arr = [3, 2, 5, 72, 6];

// function returnIndex(arr, target) {
//   for (const element in arr) {
//     if (arr[element] === target) {
//       return element;
//     }
//   }
//   return "value not found";
// }

// let index = returnIndex(arr, 50);
// console.log(index);

//========================================

// const addAll = (...nums) => {
//   let sum = 0;
//   for (const num of nums) {
//     sum += num;
//   }
//   return sum;
// };

// let res = addAll(1, 2, 3, 4, 5);
// console.log(res);

//=========================================

// const numbers = [2, 4, 3, 5];

// numbers.forEach((number, index) => {
//   console.log(
//     `Number is ${number} at index ${index} and after Multiplication by 2 it will be ${
//       number * 2
//     }`
//   );
// });

//===========Print the firstName of the user============================

// const users = [
//   { firstName: "Ganesh", age: 24 },
//   { firstName: "Mohan", age: 22 },
//   { firstName: "Mahesh", age: 20 },
// ];

//  users.forEach((user, index) => {
//    console.log(user.firstName, `From object at ${index} index in Array `);
//  });

// same can be achive using for of loop as well or any normaol for loop as well

// for (const user of users) {
//   console.log(user.firstName);
// }

//=============Printing the FirstName using map() method

// const users = [
//   { firstName: "Ganesh", age: 24 },
//   { firstName: "Mohan", age: 22 },
//   { firstName: "Mahesh", age: 20 },
// ];

// const result = users.map((user, index) => {
//   return user.firstName;
// });

// console.log(result);

//=============Find the sum of the price of the user cart Products=========

// const UserCart = [
//   { productId: 1, productName: "Laptop", price: 99000 },
//   { productId: 2, productName: "Grinder", price: 5000 },
//   { productId: 3, productName: "Washing Machine", price: 10000 },
// ];

// const totalPrice = UserCart.reduce((acc, currentItem) => {
//   return acc + currentItem.price;
// }, 0);

// console.log(totalPrice);

//===============Arrange the product price form low to high using sort() method=================
// const UserCart = [
//   { productId: 1, productName: "Laptop", price: 99000 },
//   { productId: 2, productName: "Grinder", price: 5000 },
//   { productId: 3, productName: "Washing Machine", price: 10000 },
// ];

// const lowToHighPrice = [...UserCart].sort((a, b) => {
//   // slice/conact/spread operator will make a new array
//   return a.price - b.price;
// });

// console.log(lowToHighPrice);

//===============find the ProductName From given ProductId=============
// const UserCart = [
//   { productId: 1, productName: "Laptop", price: 99000 },
//   { productId: 2, productName: "Grinder", price: 5000 },
//   { productId: 3, productName: "Washing Machine", price: 10000 },
// ];

// function findProduct({ productId, productName }, TargetedId) {
//   if (productId == TargetedId) {
//     return productName;
//   }
// }

// const item = UserCart.find((product) => {
//   if (product.productId == 2) {
//     return id.productName;
//   }
// });

// console.log(item);

//=============Check if price of evrey product is less than 100000===================

// const UserCart = [
//   { productId: 1, productName: "Laptop", price: 9909900 },
//   { productId: 2, productName: "Grinder", price: 5000 },
//   { productId: 3, productName: "Washing Machine", price: 10000 },
// ];

// const ans = UserCart.every((ProductPrice) => {
//   return ProductPrice.price < 100000;
// });
// console.log(ans);

//=================implement some() method =====================

// const UserCart = [
//   { productId: 1, productName: "Laptop", price: 99000 },
//   { productId: 2, productName: "Grinder", price: 5000 },
//   { productId: 3, productName: "Washing Machine", price: 10000 },
// ];

// const ans = UserCart.some((ProductPrice) => {
//   return ProductPrice.price < 100000;
// });
// console.log(ans);

//=================splice() method=================

// const item = ["item1", "item2", "item3", "item4", "item5", "item6"];
// const UserCart = [
//   { productId: 1, productName: "Laptop", price: 99000 },
//   { productId: 2, productName: "Grinder", price: 5000 },
//   { productId: 3, productName: "Washing Machine", price: 10000 },
// ];
// const modifiedArray = item.splice(1, 0, "item7", "item8");
// // console.log(modifiedArray);
// console.log(item);

//===============Set=========================

// const numbers = new Set([1, 2, 3, 4]);
// console.log(numbers);

//==================WAP to array having unique elements from given array===
//===================================or ========================================
//==================WAP to remove the duplicates from given array==========

// const duplicateElement = [2, 2, 4, 2, 5, 5, 6];
// const mySet = new Set(duplicateElement);
// let length = 0;
// for (let element of mySet) {
//   length++;
// }
// console.log(mySet);
// console.log(length);

//==============printing all the values of a Map object==============

// const mapObject = new Map();
// mapObject.set("item1", "it is string Type");
// mapObject.set(1, "it is on number type");
// mapObject.set([1, 2, 3, 4], "it is of array type");
// mapObject.set({ key1: "item1", key2: "item2" }, "it is an Object");

// // // // console.log(mapObject.keys());

// // for (const obj of mapObject) {
// //   console.log(Array.isArray(obj));       // true , i.e keys and values are returende in form of array
// // }

// //==========Another way=======

// for (let [key, value] of mapObject) {
//   // here we are destructuring the Array
//   console.log(key, value);
// }

//===================Add some new key using Map Object====================

// const person = {
//   id: 1,
//   firstName: "Aashik",
// };

// const person2 = {
//   id: 2,
//   firstName: "Aashu",
// };

// const userInfo = new Map();
// userInfo.set(person, { age: 23, Address: "Patna,Bihar" });
// userInfo.set(person2, { age: 19, Address: "Patna,Bihar" });
// console.log(userInfo.get(person).age, userInfo.get(person).Address);
// console.log(userInfo.get(person2).age, userInfo.get(person2).Address);

//=========================Methods=======================================
// const person = {
//   firstName: "Aashu",
//   age: 19,

//   // do not use this keyword inside arrow function as it will change the lexical scope of referring the object
//   about: () => {
//     console.log(`hello ${this.firstName} your are ${this.age} year old`); // this keyword will ensure that the firstName and age that you are passing is referring the same object.
//   },

//   //   about: function () {
//   //     console.log(`hello ${this.firstName} your are ${this.age} year old`); // this keyword will ensure that the firstName and age that you are passing is referring the same object.
//   //   },
// };

// // person?.about(person?.firstName, person?.age);

// // but if you do'nt want to do like this then you can use this keyword inside method to refer the current object

// person.about();

//========== some more on this keyword ===========
// this use krke jo bhi property access krna chahte ho wo kr sakte ho kyunki this will take the reference of that object
// const personInfo = function () {
//   console.log(`Hello ${this.name} you are ${this.age} year old`);
// };

// const person1 = {
//   name: "aashik",
//   age: 23,
//   about: personInfo,
// };

// const person2 = {
//   name: "aashu",
//   age: 19,
//   about: personInfo,
// };

// const person3 = {
//   name: "Mahesh",
//   age: 24,
//   about: personInfo,
// };

// person1.about();
// person2.about();
// person3.about();

//========================OOPS===========================

// const createUser = (firstName, lastName, email, age, address) => {
//   const user = {};
//   user.firstName = firstName;
//   user.lastName = lastName;
//   user.email = email;
//   user.age = age;
//   user.address = address;
//   user.is18 = function () {
//     return this.age >= 18;
//   };
//   user.about = function () {
//     return `${this.firstName} ${this.age}`;
//   };
//   return user;
// };

// const user1 = createUser(
//   "aashik",
//   "roy",
//   "aashikroy01@gmail.com",
//   15,
//   "patna,bihar"
// );
// console.log(user1);
// console.log(user1.is18());
// console.log(user1.about());

// there is a problem in above code as if i will make user1,user2,user3....son on then for al
//new user created there will be creation of method that is "is18" and "about"
//and this also contains the space in memory but we need this method only one time not to create again
// again for each creation of object .

// for thtis the sloution is that we have to add the reference of that function in createUser function
//as property in user object :

// const userMethod = {
//   is18: function () {
//     return this.age >= 18;
//   },
//   about: function () {
//     return `${this.firstName} ${this.age}`;
//   },
// };
// const createUser = (firstName, lastName, email, age, address) => {
//   const user = {};
//   user.firstName = firstName;
//   user.lastName = lastName;
//   user.email = email;
//   user.age = age;
//   user.address = address;
//   user.about = userMethod.about;
//   user.is18 = userMethod.is18;

//   return user;
// };

// // now it is better than the previous one as in this if any of the method is called
// // js will go to that address stored as reference in createUser function.

// const user1 = createUser(
//   "aashik",
//   "roy",
//   "aashikroy01@gmail.com",
//   15,
//   "patna,bihar"
// );
// console.log(user1);
// console.log(user1.is18());
// console.log(user1.about());

// But in the above code there is still some problem
// problem is that if we want to add some more method in the user1 then we have to first
//make a key value pair of that in the userMethod object and then we also have to add this into our createUser
//fucntion  so that we can use that
//suppose we have to  add 100000 method then we also have to add those 100000 methods in createUser function
//so this will create problem

//we can solve this problem using __ptoto__ / [[ptoyotype]]  i.e prototype chaining
//which can be achieved using Object.create() method.Tis is also called prototype chaining.

// const userMethod = {
//   is18: function () {
//     return this.age >= 18;
//   },
//   about: function () {
//     return `${this.firstName} ${this.age}`;
//   },
// };

// const createUser = (firstName, lastName, email, age, address) => {
//   const user = Object.create(userMethod); //passing the reference of the obj which will be our prototype
//   user.firstName = firstName;
//   user.lastName = lastName;
//   user.email = email;
//   user.age = age;
//   user.address = address;

//   return user;
// };

// const user1 = createUser(
//   "aashik",
//   "roy",
//   "aashikroy01@gmail.com",
//   15,
//   "patna,bihar"
// );
// console.log(user1.about()); // here javascript will first find the proprerty inside the obj and if he not able to find then he
// // goes to it's attached prototype i.e userMethod.

// console.log(user1.is18());

// Finally our problem get resolved...
// but we can still optimized some more space form above code by using prototype property
// __proto/[[prototype]]  &&  protptype bot are different things

//=============================prototype=========================

// function createUser(firstName, lastName, email, age, address) {
//   const user = Object.create(createUser.prototype); //"CREATING THE LINKING BETWEEN __proto-- and prototype and this time we are making create user's prtotype as __proto__ i.e if any property not able to find inside create user then it will find it in the createUser's prototype
//   user.firstName = firstName;
//   user.lastName = lastName;
//   user.email = email;
//   user.age = age;
//   user.address = address;
//   return user;
// }

// createUser.prototype.is18 = function () {
//   return `
// ${this.age >= 18}`;
// };
// createUser.prototype.about = function () {
//   return `${this.firstName} ${this.age}`;
// };

// const user1 = createUser(
//   "aashik",
//   "roy",
//   "aashikroy01@gmail.com",
//   15,
//   "patna,bihar"
// );
// console.log(user1);
// console.log(user1.about());
// console.log(user1.is18());

// But we can still otimized this using new keyword

//=========================== new Keyword ============================

// new Keyword do the following three steps:
// 1) crete emprty object using this =>{}
// 2) return this
// 3) do this thing automatically : const user = Object.create(createUser.prototype);

// inside fucntion we will have to use this keyword aslo as we will call the constructor

// function CreateUser(firstName, lastName, email, age, address) {
//   // you need not to do this like user.firestName = firstName as
//   //this{} object has been created for you so, you just need to add the proprties to this{}
//   // using this.firstName = firstName , that you already know to add the property inside any object
//   // there is a convention that if you want anyone to call you fucntion using new keyword then always start the name of the fucntion with capital letter
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.email = email;
//   this.age = age;
//   this.address = address;
//   return this; // but this is optional as new keyword will do this for you
// }

// CreateUser.prototype.is18 = function () {
//   return this.age >= 18;
// };

// CreateUser.prototype.about = function () {
//   return `${this.firstName} ${this.lastName}, ${this.age} years old`;
// };

// const user1 = new CreateUser(
//   "aashik",
//   "roy",
//   "aashikroy01@gmail.com",
//   15,
//   "patna, bihar"
// );

// console.log(user1);
// console.log(user1.about());
// console.log(user1.is18());

// But sitll it is not modofied full as if we want to apply oops concept to this
//like inheritnace then we have to this code again which is a tedioud task ,
// so to avoid this we have "class" keyword introduced in ES6

//======================= hasOWnProprty======================
// if you will print the keys of user1 then it will give you the key of the prototype as well but if you
// want to get just property of user1 only then you can use hasOwnProperty

// for (let key in user1) {
//   if (user1.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

// ========================= class ==================================

// class are fake in javascript becuse by default internally the processing like that we have done above without using class keyword
// but using class keyword will will  not have to think about this

// class createUser {
//   constructor(firstName, lastName, email, age, address) {
//     console.log("constructor invoked");
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
//   }

//   about() {
//     return `${this.firstName} ${this.lastName}, ${this.age} years old`;
//   }

//   is18() {
//     return this.age >= 18;
//   }
// }

// const user1 = new createUser(
//   "aashik",
//   "roy",
//   "aashikroy01@gmail.com",
//   15,
//   "patna, bihar"
// );

// // console.log(user1);
// // console.log(user1.about());
// // console.log(user1.is18());
// console.log(Object.getPrototypeOf(user1));

//====================practice question on Class ====================

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   eat() {
//     if (this.name == "deer") {
//       console.log(`${this.name} eats grass`);
//     } else if (this.name == "lion") {
//       console.log(`${this.name} eats meat`);
//     } else if (this.name == "tommy") {
//       return `${this.name} drinks milk from parent class`;
//     }
//   }
// }

// const animal = new Animal("lion", 20);
// console.log(animal);
// console.log(animal.name);
// console.log(animal.age);

// ====================== Inheritance(extends keyword)================

// class Cat extends Animal {
//   constructor(name, age, sound) {
//     super(); // super ka use krke we can call the constructor of base class
//     //that is constructor(name,age)
//     this.name = name;
//     this.age = age;
//     this.sound = sound;
//   }
//   sound() {
//     if (this.sound == "Meow") {
//       return `${this.name} sounds meow`;
//     }
//   }

//   eat() {
//     return `${this.name} drinks milk from child class`;
//   }
// }
// const cat = new Cat("tommy", 5);
// const catSound = new Cat("Tommy", 10, "Meow");
// console.log(cat);
// console.log(catSound);
// console.log(cat.eat()); // if you remove eat() method from CAT and then watn to print then first jaavscript will
// look for eat() method in child class and if not found then will will see in parent class

// console.log(cat);
// console.log(cat.age);
// console.log(cat.name);
// console.log(cat.sound());
// console.log(cat.eat());

// ======================== getters and setters =============================

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get fullName() {
    // by doing get fullName we can trat this as property of the class instead of only method
    console.log("fetching the name from getter and printing");
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(fullName) {
    console.log("setting the name into the setter and i call the getter for ");
    const [firstName, lastName] = fullName.split(" "); // jahan se space " " milega wahan se split kr dega
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new Person("Aashik", "Roy", 23);
console.log(person1.fullName); // it will  give you the function name rather than "Aashik Roy"

// but you call it like this :

// console.log(person1.fullName)  but we want to call it like  console.log(person1.fullName)
// to achieve this we can use "getter and setter"

// use  "get fullName()"

// now we also want to change the firstName and lastName and to do that we know how to do :
// person1.firstName = firstName;
// person1.lastName = lastName;

// but we want to do like this :
// person1.fullName = "aashu kumar"

// to do this we need to
//use "set name()"
person1.fullName = "Aashu kumar"; // it will first set the name form setter and then get the name as "aashu kumar" from the getter as name has been set different
console.log(person1.fullName);
