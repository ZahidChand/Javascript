 // 9_Map_Reduce_Filter.js

/* Map And Reduce Method 

Syntax--> 

			Array.portotype.map()
let newArray =  arr.map(callback(currentValue [ , index[ , array]]){
	return element for newArray,after executing something
}[ , thisArg]);

Return a new array containing results of calling a function on every element in this array.

	
	
*/


const array1 = [1, 4, 9, 16, 25];

let newArr = array1.map((element, index, arr) => {
	return element > 9;

});
console.log(array1);				//[ 1, 4, 9, 16, 25 ]
console.log(newArr);				//[ false, false, false, true, true ]

const array2 = [1, 4, 9, 16, 25];

let newArr2 = array2.map((element, index, arr) => {
	return `Index is ${index} , Element is ${element} and Array is ${arr}`

});
console.log(array1);				//[ 1, 4, 9, 16, 25 ]
console.log(newArr2);

// O/p  will be
/**
[
	'Index is 0 , Element is 1 and Array is 1,4,9,16,25',
	'Index is 1 , Element is 4 and Array is 1,4,9,16,25',
	'Index is 2 , Element is 9 and Array is 1,4,9,16,25',
	'Index is 3 , Element is 16 and Array is 1,4,9,16,25',
	'Index is 4 , Element is 25 and Array is 1,4,9,16,25'
]
	
 */

console.log("********************************************************************************");

console.log("Find Square Root OF Each Element In An Array...?");
let arr = [25, 36, 49, 64, 81]

let squareRoot = arr.map((currentElement) => {
	return Math.sqrt(currentElement)
});
console.log(squareRoot);

console.log("********************************************************************************");

console.log("Muliply each element by 2 and return only those element which are greater then 10 ..? ");

let arr2 = [2, 3, 4, 6, 8]

let ans = arr2.map((currentElement) => {
	return currentElement * 2;

}).filter((currentElement) => {
	return currentElement > 10
})
console.log(ans);

// We can use both map and filter this is called chaining effect.
// With the help of map and filter we can easily solve this kind of problems.



console.log("********************************************************************************");
console.log("--------------------------------------------------------------------------------");
console.log("********************************************************************************");


/*
	Reduce Method
		Flatten an arrow means to convert the 3d and 2d array into the single dimentional array.
		The reduce() method executes a reducer function(that you provide) on each element of 
		an array. resulting in a single output value.
		
		--- The reducer funtion takes 4 arguments.
			1. Accumulator
			2.Current Value
			3.Current Index
			4.Source Array


			When we want to flat an array i.e if we want to return only  single value from array then
			with the help of reduce()we can do it.
			we cannot convert our output to single value in case of map and filter in arrays.
			But with the help of reduce we can do that.

	  
 */

// Sum of Array	In that we want to ger single value as output but with map and filter we
// cannot achive that so we need to use reduce().

let reduceExampleArray = [2, 7, 1, 9, 4]
let ansArr = reduceExampleArray.reduce((accumulator, currentELe, index, array) => {
	return accumulator += currentELe
});
console.log(ansArr);



//Fatten an array -- Converting 2d and 3d array in single dimentional array

let flatarrayExample = [
	['zone_1', 'zone_2'],
	['zone_3', 'zone_4'],
	['zone_5', 'zone_6'],
	['zone_7', 'zone_8'],
];
let flatArrayAns = flatarrayExample.reduce((accum, currentVal) => {
	return accum.concat(currentVal)
});
console.log("Before Reduce");
console.log(flatarrayExample);

console.log("After Reduce");
console.log(flatArrayAns);
