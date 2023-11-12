// Nullis Coalescing operator(??) is used to return the first operand if it is not null or undefined. Otherwise, it returns the second operand.
// It is mainly used whrn you are fetching data from database.

let username1 = null?? "guest";         //guest
let username2= "guest"??undefined;      //guest
let username3 = null??undefined;        //undefined
let username4 = undefined??null;        //null
console.log(username1);
console.log(username2);
console.log(username3);
console.log(username4);

//-------------------------------------------------------------------------------------------------

// Falsy values:

/*
        flase , 0  , -0 , BigInt 0n , "" , ni\ull, undefined , NaN

*/

// Truthy Values:

/*
        true, "0" , " " , [] , {} , () , function(){}

*/