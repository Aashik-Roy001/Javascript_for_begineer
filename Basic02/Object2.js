const singletonObj = new Object()   // it is a singleton object ( a singleton is an object that can only be instantiated once. This means that there can only be one instance of the object in existence at any given time. )
const nonSingletonObj = {}          // It is a non singleton Object (A non-singleton object, on the other hand, is an object that can be instantiated multiple times. This means that there can be multiple instances of the object in existence at any given time. )
console.log(singletonObj);
console.log(nonSingletonObj);

singletonObj.name = "mrRoy"
singletonObj.userId = "mrroy3518"
singletonObj.email = "mrroy3518@gmail.com"
singletonObj.location = {
    Permament : {
        state : "Bihar",
        city : "patna",
        street :{
            Colony : "Kauchari gali",
            Road_No : 7
        }

    }
}

// effcient way to write the above code :- using object desturcturing (by using using this mehod we need not to have to do singleton. each time)

const {
    name = "mrRoy",
    userId = "mrroy3518",
    email = "mrroy3518@gmail.com",
    location = {
            Permament : {
                state : "Bihar",
                city : "patna",
                street :{
                    Colony : "Kauchari gali",
                    Road_No : 7
                }

    }
}
} = singletonObj

console.log(singletonObj.location.Permament.street.Road_No);


// Merging object:

const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = {4:"d",5:"e",6:"f"}

const newArr = {...obj1,...obj2}    // spread operator unpack the elements of object.
const newArr2 = Object.assign({},obj1,obj2)  // another method to copy all enumerable("enumerable" refers to an object or collection that can be iterated through, meaning that its elements can be accessed and processed one at a time.)
console.log(newArr);
console.log(newArr2);


// More on object :

console.log(`Keys are : ${typeof Object.keys(singletonObj)} => ${Object.keys(singletonObj)}`);     // it will give you array of keys
console.log(`Values are : ${typeof Object.values(singletonObj)} => ${Object.values(singletonObj)}`);   // it will give you array of values.
console.log(`Entries are  : ${typeof Object.entries(singletonObj)} =>${Object.entries(singletonObj)}`);

console.log(singletonObj.hasOwnProperty("email"));





//-----------------------------------------------------------------------------------------------------------------------------------

/*Note : -

The data type of an array in JavaScript is considered to be an object. This is because arrays inherit from the Object prototype, which means that they have access to all of the methods and properties of objects. However, arrays also have some unique characteristics that distinguish them from other types of objects.

One of the key differences between arrays and other objects is that arrays are ordered collections of elements. This means that the elements of an array have a specific order, and that order can be accessed and modified. Other types of objects, such as plain objects, do not have an inherent order.

Another difference between arrays and other objects is that arrays have a special property called length. The length property represents the number of elements in the array. Other types of objects do not have a length property.

Finally, arrays have a number of methods that are specifically designed for working with arrays. These methods include push(), pop(), shift(), unshift(), splice(), slice(), indexOf(), lastIndexOf(), and join(). Other types of objects do not have these methods.

So, while arrays are technically considered to be objects, they are also a special type of object with their own unique characteristics and behavior. This is why the typeof operator returns "object" for arrays, even though they are not exactly the same as other types of objects.*/