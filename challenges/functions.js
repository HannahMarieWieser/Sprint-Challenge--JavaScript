// ==== Callbacks ====  


/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume(param1, param2, cb){
  return cb(param1, param2);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

//Create a function named add that returns the sum of two numbers
function add(arg1, arg2, cb){
  return cb(arg1 + arg2);
}

add(firstnum, secnum, (function(first){
  console.log(first)
}));


//Create a function named multiply that returns the product of two numbers 
function multiply(arg1, arg2, cb){
  return cb(arg1 * arg2);
}

multiply(firstnum, secnum, (function(second){
  console.log(second)
}));


//Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
function greeting(arg1, arg2, cb){
  return cb(`Hello ${arg1} ${arg2}, nice to meet you!`);
}

greeting(firstname, secname, (function(third){
  console.log(third)
}));


/* Step 3: Check your work by un-commenting the following calls to consume(): */
 consume(2,2,add); // 4
 consume(10,16,multiply); // 160
 consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation:
// nestedfunction() can acess the variable internal because it is able to reach outside of its scope, in this case the scope of nestedfunction, and look for its cariable. 


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();