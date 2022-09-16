// Date And Time In JavaScript

/**
 * JavaScript date objects represents a single moment in time in a platform independent  
 * format. 
 * 
 * Date object contain a number that represent millisecond since 1 January 1979 UTC.
 * 
 * Creating Date Object:--->
 * 			
 * 			There are 4 ways to create a new date object :-->
 * 		
 * 		-- new Date()
 * 		
 * 		-- new Date(year,month,day,hours,minutes,seconds,milliseconds)
 * 		it takes 7 arguments
 * 
 * 		-- new Date(milliseconds)
 * 		// we cannot avoid month section
 * 
 * 		-- new Date(date string)
 */

/**
 * 		new Date() -->
 * 
 * 		Date objects are created with the new Date() constructor.
 * 
 */

let currentDate = new Date();
console.log(currentDate);			// give current date format is 2022-06-07T10:32:09.710Z

console.log(new Date().toLocaleString());		//07/06/2022, 16:03:59 in proper format with time

console.log(new Date().toString());			//Tue Jun 07 2022 16:04:38 GMT+0530 (India Standard Time)

// There is also one more method
// Date.now()
// returns the numaric value corresponding to the current time the number of milliseconds elapsed
// since january 1, 1970 00:00: UTC.

console.log(Date.now());			//1654598399045

console.log("*********************************************************************************");
console.log("*********************************************************************************");

/**
 * 		new Date (year,month,....)
 * 		Note:--> Javascript count months from 0 to 11
 * 		0 is January and 11 is December. 
 * 
 * 
 */
var d = new Date(2022, 11, 10, 11, 30, 25, 0);
console.log(d.toLocaleString());			// 10/12/2022, 12:50:30

console.log("*********************************************************************************");
console.log("*********************************************************************************");


/**
 * 		new Date(dateString) -->
 * 		
 * 		It creates a new date object from a date string.
 * 	
 */

var dt = new Date("October 06 , 2022 11:12:13")
console.log(dt.toLocaleString());			//06/10/2022, 11:12:13

console.log("*********************************************************************************");
console.log("*********************************************************************************");


/**
 * 			new Date(milliseconds)
 * 			Basically it will take miliseconds as a parameter and display its time in proper format.
 */
console.log(new Date(1654599433692).toLocaleString());			//07/06/2022, 16:27:13


console.log("*********************************************************************************");
console.log("*********************************************************************************");


/**
 * 			Date Methods :--->
 * 			
 * 				
 */
const curDate = new Date();

//How to get date

// console.log(curDate.toLocaleString());			// 07/06/2022, 16:35:01
// console.log(curDate.getFullYear());				// 2022
// console.log(curDate.getMonth());				// 5 --- 0-11 Jan -- Dec
// console.log(curDate.getDate());					// 7
// console.log(curDate.getDay());					// 2		-- Tuesday


// How to set the indivisual date

console.log(curDate.setFullYear(2022));
// The setFullYear() method can optionally set month and day
console.log(curDate.setFullYear(2022, 10, 5));
let setmonth = curDate.setMonth(10); // 0-11 jan to dec
console.log(setmonth);
console.log(curDate.setDate(5));
console.log(curDate.toLocaleString());


console.log("*********************************************************************************");
console.log("---------------------------------------------------------------------------------");
console.log("*********************************************************************************");


/**
 * 		Time Methods
 * 
 * 		//how to get indivisual time
 * 
 */
const curTime = new Date();

 console.log(curTime.getTime());
 // // The getTime() method returns the number of milliseconds 
 // since January 1, 1970
 console.log(curTime.getHours());
 // // The getHours() method returns the hours of a date as a 
 // number (0-23)
 console.log(curTime.getMinutes());
 console.log(curTime.getSeconds());
 console.log(curTime.getMilliseconds());
 
 // OP
		// 1654600918346
		// 16
		// 51
		// 58
		// 346
 

// how to set the indivisual Time 

let curTime2 = new Date();

// console.log(curTime.setTime());
console.log(curTime2.setHours(5));
console.log(curTime2.setMinutes(5));
console.log(curTime2.setSeconds(5));
console.log(curTime2.setMilliseconds(5));

//OP
		// 1654561410770
		// 1654558530770
		// 1654558505770
		// 1654558505005
