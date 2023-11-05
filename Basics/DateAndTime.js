/*Dates have been a long-standing pain point in ECMAScript (JavaScript) for several reasons:

Inconsistent date parsing and formatting:- JavaScript's native Date object has inconsistent behavior across browsers.
Lack of built-in date-time manipulation functions: JavaScript's native Date object lacks built-in functions for common date-time manipulation tasks, such as adding or subtracting days, months, or years.
                                                     This forces developers to write their own functions or use third-party libraries.

Here's a simple example of how date parsing can be inconsistent across browsers:*/

const dateString = "2023-11-05";
const date = new Date(dateString);

// console.log(date.getFullYear()); // Output: 2023 (Chrome, Firefox, Safari)
// console.log(date.getFullYear()); // Output: 2024 (Internet Explorer)
//-----------------------------------------------------------------------------------

let myDate = new Date()
//console.log(myDate.toDateString())
//console.log(myDate.toString());

let ownDate1 = new Date(2023,1,6)
//console.log(ownDate1.toLocaleString())

let ownDate2 = new Date("01-14-2023")
//console.log(ownDate2.toLocaleString())
// console.log(ownDate2.toLocaleString("default",{    // you can use toLocaleString TO customie your date
//     weekday:"long",
    
// }))


let myTimeStamp = Date.now()
console.log(myTimeStamp) // Date.now() returns the number of milliseconds elapsed since the Unix epoch, which is 00:00:00 UTC on January 1, 1970. 
console.log(Math.floor(myTimeStamp/1000))  // it will convert the millisecond in second.



//--------------------------------------------------------------------------------------------------------------------------------
// To address the shortcomings of the current Date API in JavaScript, the ECMAScript committee (TC39) has proposed a new Temporal API. 
//This new API aims to provide a more consistent, user-friendly, and feature-rich way to work with dates and times in JavaScript.