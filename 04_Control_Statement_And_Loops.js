/* Control Statement And Loops  

    ***If...Else***

        Use if to specify a block of code to be executed, if a specified condition is true
        Use else to specify a block of code to be executed, if the same condition is false
        Use else if to specify a new condition to test, if the first condition is false

 Syntax :-->
            if (condition) {
                //  block of code to be executed if the condition is true
            }

    ***Switch Statement***
        Use switch to specify many alternative blocks of code to be executed
    
Syntax :-->

            switch(expression) {
                case x:
                // code block
                break;
            case y:
                // code block
                break;
            default:
                // code block
            }

    ***While Loop***

        Loops can execute a block of code as long as a specified condition is true.

Syntax :-->
            while (condition) {
                 // code block to be executed
            }

    ***Do-While Loop***

        The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

Syntax :-->
            do {
                // code block to be executed
            }
            while (condition);

    ***For Loop***
        Loops can execute a block of code a number of times.

        Loops are handy, if you want to run the same code over and over again, each time with a different value.

        Often this is the case when working with arrays:


        Instead of writing:
                text += cars[0] + "<br>";
                text += cars[1] + "<br>";
                text += cars[2] + "<br>";
                text += cars[3] + "<br>";
                text += cars[4] + "<br>";
                text += cars[5] + "<br>";

        You can write:
                for (let i = 0; i < cars.length; i++) {
                     text += cars[i] + "<br>";
                }

    
    For in Loop
            The JavaScript for in statement loops through the properties of an Object:

        Syntax:-->
                for (key in object) {
                     // code block to be executed
                }

        const person = {fname:"Zahid", lname:"Chand", age:25};

        let text = "";
        for (let x in person) {
                text += person[x];
        }

    The for in loop iterates over a person object
    The key is used to access the value of the key
    Each iteration returns a key (x)
    The value of the key is person[x]

    ***For of Loop***
        The JavaScript for of statement loops through the values of an iterable object.

        It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

Syntax:--->
        for (variable of iterable) {
            // code block to be executed
        }
    variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.

    iterable - An object that has iterable properties.

    ***Conditional (ternary) Operator***
        
        When you want to execute a block if a condition evaluates to true,
        you often use an if…else statement. 
    Syntax :-->
            condition ? expressionIfTrue : expressionIfFalse;    
    For example:-->

        let age = 18;
        let message;

    if (age >= 16) {
        message = 'You can drive.';
    } else {
        message = 'You cannot drive.';
    }

    console.log(message);


    In this example, we show a message that a person can drive if the age is greater than or equal to 16.
    Alternatively, you can use a ternary operator instead of the if-else statement like this

    let age = 18;
    let message;

    age >= 16 ? (message = 'You can drive.') : (message = 'You cannot drive.');

    console.log(message);

    Or you can use the ternary operator in an expression as follows:

    let age = 18;
    let message;

    message = age >= 16 ? 'You can drive.' : 'You cannot drive.';

    console.log(message);


*/
