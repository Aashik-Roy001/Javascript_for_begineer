function add(num1,num2){
console.log(num1+num2)
}

console.log(add)     // taking reference of the function.
add()               // calling the function.   It will give NaN if no argument passed.
add("1",2)           // will concatenate both the value and gives 12
add("1","2")
add(2,null)             //It will also give NaN
add(undefined,1)      // It will also give NaN
add(34,56)

 // return the function : 

 function myFun(user){
    if(!user){
        return ("Please enter the valid user name")
    }
    return `Hello ${user}`
 }
 console.log(myFun);
 console.log(myFun("MrRoy"));
 console.log(myFun(null));


 // To give the Default value in th parameter : 

 function myFun(user = "user"){
    if(!user){
        return ("Please enter the valid user name")
    }
    return `Hello ${user}`
 }
 
 console.log(myFun("MrRoy"));
 console.log(myFun());      // if the user will left blank then deafult value will returned otherwise passed argument will be returned