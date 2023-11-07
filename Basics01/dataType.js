// Primitive data Type :- Number,String,Boolean,Null,Undefined,Symbol,Bigint (these ara call by value i.e a copy will be given to you)
// Non-Primitive data Type :- Array,Object,Function (these are call by reference i.e reference will be given to you of these data type )

let accountId = 123456
let userName = "mrRoy"
let loggedIn = true
let passWd;
const arr =[1,2,3]
const myFun = function (){
    console.log("HEllo World")
}

const obj  ={
    name:"mrmroy"
}

console.log(typeof(accountId))
console.log(typeof(userName))
console.log(typeof(loggedIn))
console.log(typeof(passWd))
console.log(typeof(undefined))   // this will give data type as undefined
console.log(typeof(null))       // this will give data type as object
console.log(typeof arr)         // Array's datatype is Object
console.log(typeof myFun)       // Function's dataType is Function Object
console.log(typeof obj)         // object's dataType return object 