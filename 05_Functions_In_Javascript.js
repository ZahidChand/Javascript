    /**
     * Functions In JavaScript
     * 
     *      A function in javascript is a block of code that is designed to perform a 
     * perticular task.
     * 
     *      Before using a function we nood to define it.
     *      
     *      A function defination (also called as functin declartion, or function statement)
     *   consist of the functin keyword , followed by the name of the function.
     *      
     *      A JavaScript function is executed when "something" invokes it (calls it).
     * 
     * 
     *      A JavaScript function is defined with the function keyword,
     *  followed by a name, followed by parentheses ().
     * 
     *      Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

            The parentheses may include parameter names separated by commas
            (parameter1, parameter2, ...)   

     *  The code to be executed, by the function, is placed inside curly brackets: {}


            Syntax:-->
                function name(parameter1, parameter2, parameter3) {
                    // code to be executed
                }
     
     
     
     
     */
    //Non Parameterized Functions

    function employeeDetails(){
        var empId = 101;
        var empName = "zahid chand"
        var empAge = 25
        console.log("Id "+empId,"Name "+empName,"Age "+empAge);
    }
    employeeDetails()

    //Parameterized Functions

    function mytDetails( x ,  y ,  z){
        var myId = x;
        var myName = y;
        var myAge = z

        console.log("Id "+myId,"Name "+myName,"Age "+myAge);
    }

    mytDetails(007,"James Bond",36)
