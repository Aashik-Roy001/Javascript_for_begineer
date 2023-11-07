
/* NOTE :- The Abstract Equality Comparison Algorithm in the ECMAScript specification states that:

The equality operator (==) performs type conversion before comparing values. */



let data  = null;
let conversion = Number(data) // this conversion of null into Number(0) is done by js
console.log(conversion)

console.log(null>0)  // (0>0 =>false)
console.log(null<0)  // (0<0 => false)
console.log(null==0) // (null==0 => false) in this case no conversion take place instead directly value is compared
console.log(null>=0) // (0>=0 =>true)
console.log(null<=0) // (0<=0 =>true)


let data2  = undefined;
let conversion2 = Number(data)
console.log((conversion2));

console.log(undefined>0)  //(NaN > 0 =>flase)
console.log(undefined<0)  //(NaN < 0 =>flase)
console.log(undefined==0) //(NaN == 0 =>flase)
console.log(undefined>=0) //(NaN >= 0 =>flase)
console.log(undefined<=0) //(NaN <= 0 =>flase)

