// call by value :- Used for the Primitive dataTypes and uses stack
// Eg:-

let user1 = "mrroy"
let user2 = user1  // copy of user1 us give to user2 so any change done i User2 will not reflect in User1

user2 = "sammy" // changing the data of user2

console.log(user1) // mrroy 
console.log(user2) // sammy 


//--------------------------------------------

// call by reference : - used for non-primitive data type and uses Heap 
// Eg:-

let User1 = {
Name :"mrroy"
}
let User2 = User1   // Reference of User1 is given to User2 so any change made in User2 will reflect in User1 and vice versa

User2.Name = "sammy"

console.log(User1.Name) //sammy
console.log(User2.Name) //sammy as  