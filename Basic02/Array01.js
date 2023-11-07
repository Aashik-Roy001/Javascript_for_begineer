// Array is the collection of mutiple items in single variable.It is resizable with mixed datatype.
// Array in js perfomr Shallow copy(same reference point after copying) while performing Copying of Array.


const myArr1 = [1,2,3,4]
const myArr2 = new Array(1,2,3,4)

console.log(myArr1)
console.log(myArr2)


//------------------------------------------------------------------------------------

//Methods:-

myArr1.push(10)
console.log(myArr1)

myArr1.pop()  // remove last value
console.log(myArr1)

myArr1.unshift(9)  // add to the first position by shifting all th elements
console.log(myArr1)

myArr1.shift()  // remove the first element and shift all other forward to fill that gap.
console.log(myArr1)

const result1 = myArr1.includes(10)
console.log(result1)   // return boolean type

const result2 = myArr1.indexOf(10)
console.log(result2)   // return -1 if does'nt exist 

const newArr = myArr2.join()
console.log((myArr2))
console.log((newArr))  // join bind the array with myArray and convert it into string type

const subArray1 = myArr1.slice(1,3)    // 1st index is included  and 3rd index is excluded
console.log(subArray1)

const subArray2 = myArr1.splice(1,2)    // 1st index is the position to start  and 3rd index is the no. of delete count
console.log(subArray2)