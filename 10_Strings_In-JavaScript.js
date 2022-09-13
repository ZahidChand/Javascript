/**
        *****Strings In JavaScript*****  
     
    JavaScript strings are for storing and manipulating text.
   
    A JavaScript string is zero or more characters written inside quotes.

    You can use single or double quotes:


    Strings can be created as premitives, from strings literals,or a objects,
    using the string() constructor.

Example:-->

        let carName1 = "Volvo XC60";  // Double quotes
        let carName2 = 'Volvo XC60';  // Single quotes

        let carName3 = new String("Mahindra Thar")  //Using String Constructor,
        but we dont use this . This is not correct way to write string.

 */
//             ***Length --->

// Finding Length of String
// we have property length that return length of string
// Eg -->
// let str = "Hello this is javascript and we are learning strings in javascript"
// console.log(str.length);

// let str1 = "Hello JavaScript"
// console.log(str1.length);


/**
        Escape Charecter In JavaScript
        If our string has value which have single and double quotes inside it the it will definatily
        give us an error so to handle that we have our escape charecter in JS.

        Whenever we have ' or "" or \ then we need to add \(backslach) before that charecter.
        \'  --- '      --- Single Quote
    ----------------------------------------
        \""  --- ""     --- Double Quote
    ----------------------------------------
        \\  --- \       --- BackSlash
 */

// Eg-->
// let str = 'It ceases to exist without me.No, you clearly don\'t know who youre talking to, so let me clue you in.I am not in danger, Skyler.\"I am the danger\"'
// console.log(str);


/*
            ***IndexOf() --->


 *      Finding A String In A String
 *      
 *          string.prototype.indexof(searchValue [,fromIndex])
 *          
 *          The indexof() method returns the index of the first occurence of a specified
 *           text in string
 *      
 * 
 */

const str = 'Hello This Is JavaScript And We Are Looking Into Finding String Inside String'
console.log(str.indexOf("into"));          //-1
console.log(str.indexOf("Into"));          //44


// If it finds the value inside a string then it will return the position of that letter.
// But if it does't exist in that string then it will return -1  And also its case sencitive. i.e Not Found.
//It will always suggest the first comming letter and returns the output.
// Here in our case we have string twice , 
console.log(str.indexOf("String"));     //57
// But we also have at 71

// If we want to print that
console.log(str.indexOf("String", 58));     //71
// After writing 58 it will skiptill 58 and then it will start finding.


console.log("******************************************************************************************");

/**
 *      ***LastIndexOf() --->
 * 
 * 
 *  Similarly we have lastIndexOf() in JavaScript 
 * It will start from right and end at left
 * 
 */
let lastIndexOfExample = "Hello This Is Zahid Chand,We Are Learning JavaScript And We Are Now Looking Into String";
console.log(lastIndexOfExample.lastIndexOf("o"));
// O/P will be 79.
// Here Index is starts from zero but to find that value which is at last will be return.


console.log("******************************************************************************************");


// Searching For A String In A String

// String.prototype.search(regExp)
/**
 *          ***String() --->
 * 
 * 
 *  The Search() search a string for a specified value and return the position of match.
 * 
 *  The search() cannot take a second start position argument.
 */

let searchExp = "Hello This Is JavaScript And We Are Looking Into Search"
console.log(searchExp.search("This"));

console.log("******************************************************************************************");


/**
 *  Extracting String Parts:--->
 *      
 * There are 3 types of extracting a part of a string --->  
 * 
 *      1. slice(start,end)
 *      2. substring(start,end)
 *      3. substr(start,length)
 * 
 */
/**
 *      ***Slice() --->
 * 
 * The Slice() method extract a part of a string and return extracted part of a new string.
 * The Method takes 2 paramaters
 *      - start position
 *      - end position
 */

var strSlice = "Apple,Banana,Kiwi,Grapes,Pineapple"

console.log(strSlice.slice(1, 8));           //O/P --> pple,Ba
console.log(strSlice.slice(0, 15));           //O/P --> Apple,Banana,Ki
console.log(strSlice.slice(10, 14));           //O/P --> na,K

// So basically it will only select that string from start to end but endding it will not print
// In simple words it will start from start point and end at end-1. 

console.log(strSlice.slice(10, -2));           //O/P --> a,Kiwi,Grapes,Pineapp


console.log("******************************************************************************************");
console.log("******************************************************************************************");


console.log("Q : Display only 280 charecters of a  string like that used in twitter .. ?");
let myTweet = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
console.log("Before slice");
console.log(myTweet.length)
console.log("After Slice");
let ansTweet = myTweet.slice(0, 280)
console.log(ansTweet.length);

console.log("******************************************************************************************");
console.log("******************************************************************************************");

/**
 *  Substring() --->
 *          
 *              The substring is similar to slice the only difference is that 
 * substring cannot accept negative indexes.
 * 
 * 
 */

let strSubString = "Apple,Banana,Kiwi,Grapes,Pineapple"
let ansSubString = strSubString.substring(9, 17)

console.log(ansSubString);          // O/P ---> ana,Kiwi,
console.log((strSubString.substring(8, -2)));        // Apple,Ba
//Negative doesn't work hear it will take start point and it will start from  0 and end at 8 - 1 in this case.
// If we give negative value then the charecters are counted from the 0th position.


console.log("******************************************************************************************");
console.log("******************************************************************************************");


/**         substr() --->
 * 
 *      The substr() Method
 *      Substr() is similar to slice().
 *      The difference is that the second parameter specifies the length of the extracted part.
 * 
 *      
 */

let substrString = "Apple , Banana, Kiwi";
console.log(substrString.substr(0, 10));     //  Apple , Ba
console.log(substrString.substr(7, -2));     // It will not return any value ,
//  when we pass negative in that then it will return nothing.

// It is helpfull in finding values from backwords
console.log(substrString.substr(-4));       //Kiwi


console.log("******************************************************************************************");
console.log("******************************************************************************************");


/**
 *      Replace() --->
 * 
 *      Replacing String Content()
 * string.prototype.replace(searchFor, replaceWith)
 *  
 *  The replace() method replace a specified value woth another value in string
 */

let myName = "Walter White , Skyler White, Hank White"
console.log(myName.replace("White", "Green"));

// It will replace white to green but only the first one not the remaining .
//  So if we want to replace all names then we have another method call replaceAll()
// replaceAll will replace all names in the string.
// replace is case sensitive


console.log("******************************************************************************************");
console.log("******************************************************************************************");

/**
 *      Extracting String Charecters   
 *  
 *          There are 3 methods for extracting string charecters.
 *      1. charAt(position)
 *      2. charCodeAt(position)
 *      3. property access [ ]
 * 
 */

/**
 *      charAt()--->
 *      
 *      The chareAt() method returns the charecter at the specified index (position) in a string.
 *      
 *      charCodeAt() --->
 *         
 *      The charCodeAt() returns a unicode of the charecter at a specified index in a string.
 *      The Method returns a UTF-16 code
 *      (An Integer between 0 to 65535)
 */

let myStr = "Hello World";
console.log(myStr.charAt(2));       // l
console.log(myStr.charCodeAt(6));       // 87 

console.log("Q : Return a unicode of the last charecter in a string..?");
let unistr = "iuiehrheruhaerhuh uheruhae ruheruhpuiharjierouerouhaeoriuep ri";
let lastChar = unistr.length - 1        // -1 because length property will give value
//  accoring to index and in that it has one value greater

console.log(unistr.charCodeAt(lastChar));


/**
 *      Property Access
 *      
 *      ECMAScript 5 (2009) allows property access [ ] on string.
 * 
 *      
 * 
 */
var strPAccess = "HELLO WORLD"
console.log(strPAccess[1]);     // E


console.log("******************************************************************************************");
console.log("******************************************************************************************");


/**
 *      Other Useful Methods
 *          
 *          
 */
var myNameIs = "walter White";
console.log(myNameIs.toLocaleLowerCase());
console.log(myNameIs.toUpperCase());
console.log(myNameIs.concat(" Hisenburge"));

// trim() remove white spaces from both sides of the string

var trimStr = "                                               Hello World!                   ";
console.log(trimStr.trim());

// Convert a string to an array
// Split() is used to convert string to an array

var text = "a,b,c,d,e"      //string
console.log(text.split(","));       //Split on commas
console.log((text.split(" ")));     //Split on spaces
console.log(text.split("|"));       // split on pipes
