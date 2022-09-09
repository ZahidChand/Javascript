// Datatypes In Javascript
 
/*

    When we create a variable and  then when we assign any value to that variable
    using assignment operator and what value we have assignmed what was that type of
    that we called DataTypes In Javascript.

    There are total 6 types of datatypes in javascript

    1. undefined
    2. boolean
    3. number
    4. string
    5. bigInt
    6. symbol

 



*/


var myName = "Zahid Chand";     //The type  inside myName variable is String to check that we need
                                //add typeof operator . typeof operator will give us its type.
console.log(typeof(myName));    //Ans : string


var myAge = 25;
console.log(typeof(myAge));     //Ans : number

var happyWorld = true;
console.log(typeof(happyWorld));    // Ans : boolean

var desc = 'IT Head';
console.log(typeof(description));   // Ans : undefined

// Ans will be undefined because we are printing that value which is not defined so it type becomes
// Undefined


// Some Examples TO Practice :--->

var ans1 =  10 + "20";
console.log(ans1);   
// If we ADD number ans string then it will concat that both ans output will be --> 1020.

var ans2 = 9 - "5"
console.log(ans2);
//If we SUBTRACT number and string then O/P will 4. Now it will do subtraction.

var ans3 = "Java" + "Script"
console.log(ans3);
//If we ADD 2 strings then it will Concat that both srings and O/P will be --> javaScript

var ans4 = " " + " ";
console.log(ans4);
// If we ADD two empty strings that O/P will be also empty . It will not give error.

var ans5 = " " + 12;
console.log(ans5);

// If we add empty string and number then output will be that number.

var ans6 = "zahid" - "chand";
console.log(ans6);

//If we SUBTRACT 2 strings then it will give us O/P ---> NaN

var ans7  = true + true;
console.log(ans7);

var ans8  = true + false
console.log(ans8);

var ans9  = false + true
console.log(ans9);

var ans10 = false - true;
console.log(ans10);

// Hear True is 1 And False is 0  ans just its calculation.
