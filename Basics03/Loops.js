// // for of loop :

// for of loop using array:

// const arr = [1,2,3,4,5]
// for(let i of arr){
//     console.log(i);
 
// }

//for of looop using string : 

// const string = "hello World!"
// for(let str of string){
//     if(str==" " || str == "!"){
//         continue
//     }
//     console.log(str);

// }

// for of loop using map object(Map objects are collections of key-value pairs.) :

// const mapObj = new Map();
// mapObj.set('In', "India");
// mapObj.set('uk',"UnitedKingdom");
// mapObj.set('usa',"United State of America");

// console.log(mapObj);
// for(let [key,value] of mapObj){       // this is the syntax mean you must have to write within square brackets or you can say you hav to do destructuring.

//     console.log(key);
//     console.log(value);
// }

// // for of loop using object:

// const obj = {
//     "In" :"India",
//     "uk":"unite Kingdom",
//     "Usa":"United state of America"
// }

// for(let [key , value] of obj ){
//     console.log(key);  // it will an error i.e object are not iterable , so there is different syntax to iterate objects i.e we most time use 
//                        //  for in loop for objects.
// }

// ---------------------------------------------------------------------------------------------------------------------------------


// for in loop :-

// // for objects:
// const obj = {
//     "In" :"India",
//     "uk":"unite Kingdom",
//     "Usa":"United state of America"
// }

// for(let objects in obj){
    
//     console.log(`for ${objects} value is ${obj[objects]}`);
// }

// // for array :
// let arr2 = ["js","ruby","python","perl"];
// for(let i in arr2){
//     console.log(i);         // it will give you keys instead of value which was in for of loop
//     console.log(arr2[i]);   // it will give you values
// }


// // for map objects:
// let mapObj2 = new Map();
// mapObj2.set('In', "India");
// mapObj2.set('uk',"UnitedKingdom");
// mapObj2.set('usa',"United State of America");

// for(let [key,value] in mapObj2){
//     console.log(key)
// }

// for(let key in mapObj2){
//     console.log(key)
// }
 // in the above both of the loop you will not get any output but also not get any error.

// so the basics difference on using for of for array and for in for array is that in 
// for of => iterator will return the values.
// for in => iterator will return keys


// so the basics difference between on using for of on map Object and for in on map object is that in 
// for of => iterator needs to be destructutred
// for in => there will be no output either you destructured the itereator or not .


// ---------------------------------------------------------------------------------------------------------------------------


// for each loop(is it basically a loop based on Higher oreder function):

// // 1st variation :

// const codingLang = ["python","java","javascript","c++","c#","c"]
// codingLang.forEach((elem)=>{        // forEach loop takes a callBack function.
//     console.log(elem);
// })


// // 2nd variation :

// function greet (elem){
//     console.log(elem)
// }
// codingLang.forEach(greet)   // just pass the reference of the function


// 3rd variation : 

// codingLang.forEach((elem,index,arr)=>{
//     console.log(elem);
//     console.log(index);
//     console.log(arr);
// })

// 4th variation :

const myObj3 = [
    {
        languageName : "java",
        LanguageFileExtension : ".java"
    },
    {
        languageName : "python",
        LanguageFileExtension : ".py"
    },

    {
        languageName : "javascript",
        LanguageFileExtension : ".js"
    }
]
myObj3.forEach((item)=>{
console.log(`language is ${item.languageName} and extension is ${item.LanguageFileExtension}`)
})