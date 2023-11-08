// //Scope :

// let num1 = "outer let"
// var num2 = "outer var"
// const num3 = "outer const"

// if(true){
//     let num1  = "Inner let"
//     var num2 = "Inner var"      // num2 value get changed if we declare the variable with var keyword , that's why it is not preferred to use.
//     const num3 = "Inner const"

// }
// console.log(num1) //Outer let
// console.log(num2) //Inner var
// console.log(num3) //Outer const


// -------------------------------------------------------------------------------------------------
//Scope chaning :

// function HigherFunction(){
//     const High = "I am Higher Function"
//     console.log(High)
//     function Lower1Function(){
//         let Lower1 = `I am lower1 and inside Higher Function`
//         console.log(Lower1)
//         function Lower2Function(){
//             const Lower2 = `I am Lower2 and Inside Lower1Function`
//             console.log(Lower2)
//         }
//         Lower2Function()
//         //console.log((Lower2));      // out Of Scope
//         console.log(Lower1);           //in-Scope
//     }
//     Lower1Function()
//      // console.log(Lower1)         // out of scope
//      console.log(High);             // in-Scope

// }

// HigherFunction()

//------------------------------------------------------------------------------------------------------------

// // Hoisting:

//console.log(val1)      // let keyword is not hoisted
//console.log(val2)       // var keyword is hoisted but will give undefined
//console.log(val3)       // const is also not hoisted

let val1 = "let"
var val2 = "var"
const val3 = "const"


// console.log(myFunc1())
// console.log(myFunc2())
//console.log(myFun3())

function myFunc1() {                // Regural Fuction are Hoisted
    return "Regular Function";

}

let myFunc2 = function () {       // Function Expression not  Hoisted
    return "Function Expression";

}

let myFun3 = () => {              // Arrow Function is also not Hoisted
    return "ArrowFunction"
}



/* Hoisting, which is a behavior of the JavaScript compiler,
 moves declarations of variables and functions to the top of their scope before the code is executed.
  However, function expressions are not considered complete statements until they are evaluated,
   which means that the compiler cannot understand them until the rest of the code is executed.

   */