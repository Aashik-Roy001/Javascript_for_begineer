//Strings can be created as primitives, from string literals, or as objects, using the String() constructor:
// eg:-

// 1. As Primitives using string literals:-
 let str1 = "hello1" 
 let str2 = 'hello2'
 let str3 = `hello3 ${str1}` // Using templet literal or string interpolation

 // 2. As object using String() constructor :

 let str4 = new String("hello4")



 // Let apply some in-built method on string:

 //------------------------------------------------------------------------------------------------------
 // 1. at():-
 
 /* 
    Takes => integer val to find character.
    Return =>  String consisting of the single UTF-16 code unit.
 
    Negative integers count back from the last string character.
    Returns undefined if the given index can not be found.
*/

let myName = "mrroy"
console.log(myName.at(3))

//-------------------------------------------------------------------------------------------------------------------------------------------


//------------------------------------------------------------------------------------------------------
 // 2. at():-
 
 /* 
    Takes => Index and convert it into an integer
    Return => A string representing the character (exactly one UTF-16 code unit) at the specified index. 

    If index is out of the range of 0 – str.length - 1, charAt() returns an empty string.

*/

let myCharAtName = "mrroy"
console.log(myName.charAt(undefined)) // will convrt it into 0 then return m
console.log(myName.charAt(null)) //  will convrt it into 0 then return m
//-------------------------------------------------------------------------------------------------------------------------------------------


