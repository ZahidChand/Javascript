*****Performing CRUD Operations In Array In JavaScript***** 
 
  ***Create -->
      
  1. push() method:
    
    It is used to add an item(s) to the end of an array, with item(s) being the arguments provided.

    Eg -->
      
        const myArray = ['A','B','C','D','E',]
        myArray.push('X')                                           // X get inserted at end of the array
        console.log(myArray)                                        // ['A','B','C','D','E','X']  
        myArray.push('L','M')                                       // L and M gets added at the end of array
        console.log(myArray)                                        // ['A','B','C','D','E','X','L','M']  

  2. unshift() method:

      It is used to add an item(s) to the beginning of an array, with item(s) being the arguments provided.

    
    Eg -->
      
        const myArray = ['A','B','C','D','E',]
        myArray.unshift('X')                                           // X get inserted at beginning of the array
        console.log(myArray)                                        // ['X','A','B','C','D','E',]  
        myArray.unshift('L','M')                                       // L and M gets added at the beginning of array
        console.log(myArray)                                        // ['L','M','A','B','C','D','E','X']  

3. splice() method:

      Splice is a multi functional method, providing us with many ways to manipulate data. Since it is a little complex at first sight, 
    we will only focus on its addition capability of an element here. We will cover the other capabilities of splice later, but for now, 
    just notice that the first argument will be the starting index from where to add, the second remains 0 for this case, and third argument 
    will be the elements we want to add.

Eg -->
      

        const myArray = ['A','B','C','D','E']
        myArray.splice(2,0'new')
        console.log(myArray)                                        // ['A','B','new','C','D','E']  
      ------------------------------------------------------------------------------------------------
        const myArray = ['A','B','C','D','E',]
        myArray.splice(5,0'g','H')
        console.log(myArray)                                        // ['A','B','C','D','E','g','H']  
      ------------------------------------------------------------------------------------------------
         const myArray = ['A','B','C','D','E',]
        myArray.splice(0,0'Y','Z')
        console.log(myArray)                                        // ['Y','Z','A','B','C','D','E']  
      ------------------------------------------------------------------------------------------------
            
*****************************************************************************************************************************************************
    ***Read -->


       1.filter() method:

        This method specifies a condition in the callback function and only elements fulfilling it are returned back.

      const myArray = ['1','3','5','7','9',]
      console.log(myArray.filter((x => x % 3 === 0))          //O/P -- [3,9]

     ------------------------------------------------------------------------------------------------
      
      const myArray = ['1','3','5','7','9',]

      const newArray = myArray.filter((item => item > 3))     //O/P -- [5,7,9]

     ------------------------------------------------------------------------------------------------

    2. slice() method:

      This method is used to get a ‘portion’ or ‘slice’ of our array, with the portion defined by its arguments.
      First argument tells the index to start from and second argument tells the number of items to select. 
      Remember, negative indexes means their numbering starts from end, with first (last in real) being -1.
      
      Absence of the second argument will extend selection towards the end of array.

      const myArray = ['A','B','C','D','E','F']
            console.log(myArray.slice(0,3));                // O/P -- ['A','B','C']
            console.log(myArray.slice(3));                  // O/P -- ['D','E','F']
            console.log(myArray.slice(-1));                 // O/P -- ['F']
            console.log(myArray.slice(2,-1));               // O/P -- ['C','D']

*****************************************************************************************************************************************************
  ***Update -->
  
        1. splice() method:

  We will use this method here to update elements in the array. 
  First argument will as usual specify the index where to take action from, the second argument tells
  how many elements to update and the third argument tells which values we want to place in the array.

        const myArray = ['A','B','C','D','E']
        myArray.splice(2,1,'X')               
        console.log(myArray)                                  // O/P -- ['A','B','X','D','E']

     ------------------------------------------------------------------------------------------------

        const myArray = ['A','B','C','D','E']
        myArray.splice(0,1,'X')               
        console.log(myArray)                                  // O/P -- ['X','B','X','D','E']



*****************************************************************************************************************************************************
    ***Delete -->

            As the section title itself suggests, these methods delete elements from the array, hence mutating it. 
            Deleted elements by methods like pop() or shift() can be ‘catched’ by some variable for further use.

         1. pop() method:
            -This method removes the last element in the array.

            - 


                let myArray = ['A','B','C','D','E']                //Will not work with const array declaration 
                myArray.pop()                                       // Will remove E
                console.log(myArray)                                //['A','B','C','D']
          
        2. shift() method:

              This method removes the first element in the array.

            let myArray = ['A','B','C','D','E']                //Will not work with const array declaration 
                myArray.pop()                                       // Will remove A
                console.log(myArray)                                //['B','C','D']
          


