*****Arrays In JavaScript*****
  When we use var we can only store one value at a time  
  var name1 = "Walter"
  var name2 = "Skyler"
  var name3 = "Jessy"
  var name4 = "Hank"
  
  If we have multiple name we can create multiple variables but it's not a good practice.
  So to overcome with that issue we need to have Arrays.
  
  - An array is a special variable, which can hold more than one value:
  
  - An array can hold many values under a single name, and you can access the values by referring to an index number.

  --> Syntax:
      
      const array_name = [item1, item2, ...];      
    
   -  It is a common practice to declare arrays with the const keyword.

   - Eg --> 
                          
      const cars = ["Saab", "Volvo", "BMW"];

  - You can also create an array, and then provide the elements:
  
    const cars = [];
  cars[0]= "Saab";
  cars[1]= "Volvo";
  cars[2]= "BMW";

*** Traversal In JavaScript
    It is helpfull for getting single data at a time.
    EG:-->
        const cars = ["Saab", "Volvo", "BMW"];
        console.log(cars[1])    ---> O/P Will Be Volvo
    
        Index starts With 0.

  Now in this example it very simple we can easily count total length of array.
  But in real time application we dont know the length of array so to find length of array we need to use readymade property
  console.log(cars.length)  --> O/P will be 3

  length property will return total no of length automatically.
  And if we want to get last element of an array then we need to write
  console.log(cars[cars.length - 1])



    ***Looping Array Elements***
      
      const fruits = ["Banana", "Orange", "Apple", "Mango"];
      let fLen = fruits.length;
      
      for(let i = 0 ; i <= fLen ; i++){
        console.log(fruits[i])
      }
******************************************************************************************************************************************
  ***forEach***
  You can also use the Array.forEach() function:
  
  Array.forEach() calls a function for each array element.


  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.forEach(myFunction);

  function myFunction(value) {
    value
  }

******************************************************************************************************************************************
    After ES6 We Have For..In and For..Of Loop
    *** For..In:--->
          const fruits = ["Banana", "Orange", "Apple", "Mango"];
          for(let element in fruits)
          {
            console.log(element)
          }
          O/P Will be 0,1,2,3
          So basically it will return index value when we use For..In Loop.
          
    *** For..Of:--->
          const fruits = ["Banana", "Orange", "Apple", "Mango"];
          for(let element of fruits)
          {
            console.log(element)
          }
          O/P Will be Banana,Orange,Apple,Mango
          

