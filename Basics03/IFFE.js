// let's talk about iffe(immediately invoked function expression)

/* why iffe :-

    
IIFEs (Immediately Invoked Function Expressions) are a powerful tool in JavaScript that can be used to
 encapsulate code, protect data, and prevent conflicts between variables. Here are some of the reasons why we need IIFEs:

1. Encapsulation: IIFEs can be used to encapsulate code, which means that 
                  they can create a private scope for variables and functions.
                  This can help to prevent accidental changes to variables and functions, 
                  and it can also make code more modular and reusable.

2. Preventing Variable Conflicts: IIFEs can be used to prevent variable conflicts between different libraries or modules. 
                                  This can be a problem when two or more libraries or modules use the same variable names.

3.  Controlling Scope: IIFEs can be used to control the scope of variables and functions. This can be useful for preventing
                       variables from being leaked into the global scope, and it can also be used to create nested scopes.

4.Avoiding Pollution of the Global Scope: IIFEs can be used to avoid polluting the global scope with variables and functions. 
                                          This can make code more organized and easier to maintain.

Note: 
In JavaScript, global scope pollution occurs when variables and functions are declared directly in the global scope, 
without using any encapsulation techniques such as modules or closures.

*/


(function func(){
    console.log("I am iffe");
})() ;      // it is mandatory to add semicolon(;) to avoid potential syntax errors and to make the code more readable.


//The reason why a semicolon is not strictly required is because JavaScript has a feature called Automatic Semicolon Insertion (ASI).
//ASI allows the JavaScript interpreter to insert semicolons automatically in certain situations. 

(()=>{
    console.log("I am iffe2");
})()

//------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Modules and closures are both techniques for encapsulating code and data in JavaScript. However, they have some key differences.

Modules

Modules are a way to group related code and data together into a single unit. This can help to make code more organized and easier to maintain. Modules can also be reused in different parts of an application.

Modules are typically implemented using the following syntax:

JavaScript
(function() {
  // Private variables and functions

  // Exported functions and variables
})();
Use code with caution. Learn more
The (function() {...})(); syntax is an immediately invoked function expression (IIFE). This creates a private scope for the code inside the parentheses. The return statement is used to export functions and variables from the module.

Closures

Closures are a way to create private variables and functions that can be accessed from outside of the scope in which they were created. This can be useful for creating data that needs to be kept confidential, or for creating functions that need to access data from their enclosing scope.

Closures are typically created using the following syntax:

JavaScript
function outerFunction() {
  var privateVariable = "Hello world!";

  function innerFunction() {
    console.log(privateVariable);
  }

  return innerFunction;
}

var myFunction = outerFunction();
myFunction(); // Output: Hello world!
Use code with caution. Learn more
In this example, the innerFunction function is a closure because it has access to the privateVariable variable, which is declared in the outer function. The innerFunction function can still access the privateVariable variable even after the outerFunction function has returned.

Key Differences

Here is a table that summarizes the key differences between modules and closures:

Feature	    Modules	                                Closures

Scope	    Private	                                Private or public
Export	    Can export functions and variables	    Can only export functions



*/