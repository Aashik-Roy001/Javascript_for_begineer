const junkFood = ["Pizza","Pasta","Burger"]
const healthyFood = ["Rice","Dal","Vegetable"]

junkFood.push(healthyFood) 
console.log(junkFood);  // push treat another array as element and add ,as it is, which will in 2D Array & will  return same Array and

// To Avoid this :

const newArr =junkFood.concat(healthyFood)
console.log(newArr); // concat will  return the new Array


 // But we can also use Spread operator :

const newArr2 = [...healthyFood,...junkFood]  // spread both the Array as single element i.e in pieces
console.log(newArr2);


//Special case :

const specialCase = [1,2,3,[4,5,[6,7]]]
const newArr3  = specialCase.flat(Infinity)   // it will flat the whole Array of arrays
console.log(newArr3);


// Interesting Case : 

console.log(Array.isArray("Pizza"));
console.log(Array.from("Pizza"));
console.log(Array.of("Pizza"));
console.log(Array.from({name: "mrroy"}));   // will return empty Array as it don't know either on key or value it have to form the array.
const bloodGroup1 = "A+"
const bloodGroup2 = "AB+"
const bloodGroup3 = "O+"

console.log(Array.of(bloodGroup1,bloodGroup2,bloodGroup3));   // it will return the Array of mutiple element