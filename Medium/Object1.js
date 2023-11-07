/*Basically Two ways to create object :-
        1. Using object literals({}) => values are accessed by Dot notation and Bracket Notation
        2. Using Object Constructor(Object.create())  => It will create a singleton object
*/
 const mySymbol = Symbol("key1")        // you have to add this symbol into the object .

const myObj = {
    name : "mrroy",
    age : 21,
    [mySymbol] : "Panther",  // Symbol dataType is Always written inside Square bracket inside object otherwise It will will treated as "String" Not "Symbol" and is  accessed only  by using bracket notation.
    "user Emai" : "mrroy3518@gmail.com",   // This will be only accessed by using bracket notation.
    isLoGgedIn : false,
    lastLoggedin : ["Monday","Friday"],
    location : {
        state : "Bihar", 
        city:"patna",
        street : "Kachauri Gali"
    }
}

console.log(myObj.location);
console.log(myObj["user Emai"])
// console.log(myObj."user Email")    // not alllowed
console.log(myObj[mySymbol])  // data type will still string but it key is now Symbol
console.log(myObj);
 

//To freeze you object :    // will not let any chnages to your object.

Object.freeze(myObj);
myObj.name = "Sammy"
console.log(myObj);


//  To add Function in your Object:

myObj.greeting = ()=>{
    console.log("hello Users");    // if you will use the return keyword then it will not give you expilcity undefined. 
}

console.log(myObj.greeting);   // it will return the reference of the function
console.log(myObj.greeting());


/* NOTE :- 

        When a function doesn't explicitly return a value, it implicitly returns undefined. This is because the return statement is optional in JavaScript. 
        If you want a function to return a specific value, you need to explicitly use the return statement. 

*/