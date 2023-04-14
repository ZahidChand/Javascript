//      Math Object IN JavaScript  

/**
 *      The JavaScript Math object allows you to perform mathematical tasks on numbers.


 */
console.log(Math.PI);           //3.141592653589793
// It will return you value of pie


Math.round()
// returns the value of x rounded to its nearest integer
let num1 = 10.4789
console.log(Math.round(num1));      //10

let num2 = 10.5789
console.log(Math.round(num2));      // 11

// After decimal whichevr number is closest it will take that no and return the output

 
// Math.pow() 
// Math.pow(x, y) //returns the value of x to the power of y
 
console.log(Math.pow(2, 3));            //8
console.log(2 ** 3);                    //8


// Math.sqrt() 
// Math.sqrt(x) returns the square root of x

console.log(Math.sqrt(25));
console.log(Math.sqrt(81));
console.log(Math.sqrt(66));

// O/P
// 5
// 9
// 8.12403840463596



// Math.abs() 
// Math.abs(x) returns the absolute (positive) value of x

console.log(Math.abs(-55));
console.log(Math.abs(-55.5));
console.log(Math.abs(-955));
console.log(Math.abs(4 - 6));

// O/P
// 55
// 55.5
// 955
// 2

// Math.ceil() 
// Math.ceil(x) returns the value of x rounded up to its nearest integer

console.log(Math.ceil(4.51));
console.log(Math.round(4.51));
console.log(Math.ceil(99.01));
console.log(Math.round(99.1));


// O/P
// 5
// 5
// 100
// 99


// Math.floor()  
// Math.floor(x) returns the value of x rounded down to its nearest integer

console.log(Math.floor(4.7));
console.log(Math.floor(99.1));

// O/P
// 4
// 99


// Math.min() 
// Math.min() can be used to find the lowest value in a list of arguments

console.log(Math.min(0, 150, 30, 20, -8, -200));        //-200



// Math.max() 
// Math.max() can be used to find the highest value in a list of arguments

console.log(Math.max(0, 150, 30, 20, -8, -200));        //150



// Math.random() 
// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)

console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 10)); // 0 to 9



// Math.round() 
// The Math.round() function returns the value of a number 
// rounded to the nearest integer.

console.log(Math.round(4.6));       //5
console.log(Math.round(99.1));      //99



// Math.trunc()  
// The trunc() method returns the integer part of a number

console.log(Math.trunc(4.6));           // 4
console.log(Math.trunc(-99.1));         // -99
