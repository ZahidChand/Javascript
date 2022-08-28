    ***** Searching And Filtering In Array In JavaScript *****
      
      Anything you want to search in an array then we have some methods
      
      
      1. indexof() :-->
                - The indexOf() method returns the first index (position) of a specified value.

                - The indexOf() method returns -1 if the value is not found.

                - The indexOf() method starts at a specified index and searches from left to right.

      Syntax -->
                array.indexOf(item, start)
        
                --> item ---	Required.
                              The value to search for.
                
                --> start --- Optional.
                              Where to start the search.
                              Default value is 0.
                              Negative values start the search from the end of the array.
                              
                              
                              
            Eg :--->
                    const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
                    let index = fruits.indexOf("Apple", -1);
                O/P --> 4
                Here -1 will start its count from back i.e right to left.
            
      2. find() :-->
        
               - The find() method returns the value of the first element that passes a test.
        
               - The find() method executes a function for each array element.

               - The find() method returns undefined if no elements are found.

               - The find() method does not execute the function for empty elements.

               - The find() method does not change the original array.

      Syntax -->
        
                array.find(function(currentValue, index, arr),thisValue)


     function()   	Required.
                    A function to run for each array element.
                
     currentValue 	Required.
                    The value of the current element.
                
     index	        Optional.
                    The index of the current element.
                    arr	Optional.
                    The array of the current element.
                
     thisValue	    Optional. Default undefined.
                    A value passed to the function as its this value.
                    
     Eg:-->
            const ages = [3, 10, 18,22];
            function checkAge(age) {
               return age > 18;
            }
            
    3. filter() :-->
              
              - The filter() method creates a new array filled with elements that pass a test provided by a function.

              - The filter() method does not execute the function for empty elements.

              - The filter() method does not change the original array.


     Syntax -->
          
            array.filter(function(currentValue, index, arr), thisValue)

     Eg:-->
           
              const ages = [32, 33, 16, 40];
              const result = ages.filter(checkAdult);

              function checkAdult(age) {
                return age >= 18;
              }
