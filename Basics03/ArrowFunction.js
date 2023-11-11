// To understand Arrow function first we have to understand about "this" keyword :


const UserInfo={
    userName : "mrroy",
    price: 799,

    GreetMessage : function(){
        console.log(`${this.userName} , Thankyou for Buying, Your Bill is Rs.${this.price}`);
        console.log(this)       // this keyword will talk about current context i.e. in this case is userInfo
    }
}

UserInfo.GreetMessage();
console.log(this)       // this keyword talk about the current context i.e. in this case is empty because you are in
                        //"node Environment" so no global object but when you run "this" keyword in Browser then it will return
                        //"Window as a global object".(very important)

UserInfo.userName = "sam"
UserInfo.GreetMessage();


// ImmmediatelyInvoked Function :
 
(function thisInsideFunction(){
console.log(this.userName);      // undefined 
})()


//------------------------------------------------------------------------------------------------------------------------
// Now let's talk about Arrow Function :

const ArrowFunction = ()=>{
    let userName = "mrroy"
    console.log(this.userName);     // undefined
}
ArrowFunction();


const userDetail ={
    userName : "mrRoy",
    Age : 25,
    ArrowFunc : ()=>{
        console.log(`welcome ${this.userName}`)
        console.log(this); 
    }
    
}
userDetail.ArrowFunc()

const add1 = (num1,num2)=>{
    return num1+num2                // you must have to use "return" keyword if you are using "curly braces".this is called "explicit return".
}

const add2 = (num1,num2)=> (num1+num2)      // No neeed to use "return" keyword if you are not using "parenthesis".this is called "implicit return"

const greet = (name)=> ({userName : name})   // curly braces is imortant if you are returning object.  
console.log(greet("mrroy"));
//---------------------------------------------------------------------------------------------------------------------------
// NOTE:arrow function does not have its own this binding that's why it is not preferred to use this inside arrow function.