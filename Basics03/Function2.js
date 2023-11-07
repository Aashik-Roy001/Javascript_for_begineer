// //To pass n no. of argument inside function parameter

// function shoppingCart(...itemPrice){    // using Rest Operator
//     return itemPrice
// } 

// console.log(shoppingCart(22,445,23,454,23,8) )       // will return array of itemPrice


// function shoppingCart(itemPrice1,itemPreice2 ,...itemPrice){    // using Rest Operator
    
//     return itemPrice
// } 

// console.log(shoppingCart(22,445,23,454,23,8) )       // this time first two price will not taken as that are stored in itemPrice1 and 2 and rest of the price will be taken



// //To pass Object inside function :

// function ObjFunction({name,Email}){                     // I have used Object Destructuring
//     return `username is ${name} and Email is ${Email}`
// }

// console.log(ObjFunction(obj={                   // passing object as argument inside function
//     name : "mrRoy",
//     Email : "mrroy3518@gmail.com"
// }))



// // To pass Array as Agurment iside Function Parameter : 

// function ObjFunction2([...prices]){                     // I have used Object Destructuring+Rest Operator
//     return `Prices are : ${prices}`
// }

// console.log(ObjFunction2([200,300,34,100,45]))


//---------------------------------------------------------------------------

// case:

function test1(){
    console.log("fun1");
}

function test1(){
    console.log("fun2");
}
test1()         // second function override the first function . so, the output will be of second function.
