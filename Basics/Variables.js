var phoneNumber = 8943489432
let userName = "mrRoy"
const userId = "mrroy3518"

console.table([phoneNumber,userName,userId])


var phoneNumber = 9856948584  // we can reDeclare the var Variable
// let userName = "sammy" // but let cannot be reDeclare
userName = "sammy"
userId = "sammy3518"  // we cannot reAssign different value to const Variable

console.table([phoneNumber,userName,userId])

var i = "hello";
for(var i = 0;i<10;i++){
    console.log(i);
}
console.log(i) // here the value of i will console as 10 instead of "hello" as var has functional-scope.

// To solve this use always let keyword as it is block-scope inside loop:-

var i = "hello";
for(let i = 0;i<10;i++){
    console.log(i);
}
console.log(i) // this time it will print "hello not 10"



let i;
console.log(i); // if you will not assign any value to a varible then it will give you undefined