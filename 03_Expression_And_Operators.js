/**
 * Expression And Operators In Javascript    
 * 
 *  There are 6 types of operators in javascript
 *      
 *  1. Assignment Operators     ( = )
 *  
 *  var x = 5;
 *  var  y = 1o;
 *  
 *  2. Arithmetic Operators     ( + , - , % , * , /)
 *      console.log(3+1)
 *      console.log(19-12)
 *      console.log(5*12)
 *      console.log(9/3)
 * 
 *      Increament And Decrement Operator  (++ , --)
 *          -- Prefirx ++x , --x ;
 *          -- Postfix x++ , x-- ;
 * 
 *  3. Comparison Operators     ( == )
 *      --> Comparision Operator compares its operands and returns a logical value 
 *          based on weather the comparision is true or false.
 * 
 *      var a = 10;
 *      var b = 20'
 *      
 *                                O/P
 *      console.log(a == b)     //false
 *      console.log(a != b)     //true
 *      console.log(a > b)      //false
 *      console.log(a < b)      //true
 *      console.log(a >= b)     //false
 *      console.log(a <= b)     //true
 * 
 * 
 *  4. Logical Operators  
 *      
 *      --> Logical operators are typically used with boolean (logical) values;
 * when they are , they return a boolean value.
 * 
 *      Logical AND (&&) :-->
 *          The logical AND (&&) operator for a set of operand is true if and only if all
 *  its operands are true.
 * 
 *      Logical OR (||) :-->
 *          The logical OR (||) operator for a set of operands is true if and only if
 *    one or more of  its operands is ture.
 * 
 *      Logical NOT (!) :-->
 *          The logical NOT (!) operator takes truth too falsity and vise versa.
 * 
 * 
 *  5. String Operators (Concatination) :-->
 *      The Concatination operator (+) concatinates two string values together ,
 * returning other string that is the union of the two operands strings.
 * 
 *      console.log("Java"+"script")
 *      Ans : --> javascript
 * 
 *  6. Condition (ternary) Operator
 */
// Examples:--->

var ans = 3 ** 3;
console.log(ans);       // It will return the cude of value In this case O/P will be --> 27

var ans2 = 2 + "hello";
console.log(ans2);     // It will Concate and O/P will be :--> 2hello

// Q Swap 2 nos.
    var x = 10;
    var y = 20;
    var ans3;
console.log("Before Swap");
console.log(x , y);
    ans3 = x;
    x = y;
    y = ans3

console.log("After Swap");
console.log(x , y);

// Q. Swap 2 no Without using 3 variable..?
    
var x = 30;
var y = 70;
console.log("Before Swap");
console.log(x , y);
x = x + y;
y = x - y;
x = x - y;
console.log("After Swap");
console.log(x , y);
