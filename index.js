// 1.Write a function squareNumbers(arr) that returns a new array where each number in the original array is squared using map method.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let square = arr.map((a) => a * a);
console.log(square);
// ----------------------------------------------------------------------- 

// 2.Write a function toUppercase(arr) that returns a new array where each string in the original array is converted to uppercase using map method.

let arr1 = ["hi", "hello", "welcome", "bye"];

// let toUppercase=arr1.map(function (b) {
//     return b.toUpperCase()
// })    
// console.log(toUppercase)

let toUpperCase=arr1.map((b)=>b.toUpperCase())
console.log(toUpperCase)
