/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]

@ params an arr with possible nested arrays
@ return is going to be a single array with all the nested arr spread out

if the arr comes in empty, jsut return an empty arr;

1. iterate through the incoming arr.
 -for every element we must check if it is an array
 -if it is not an array, add that element to a res array. 
 - if it is an array, we need to spread it out before adding it to our res
  * we can check if something is an array, by using Array.isArray or instanceof === Array;
 
 2. return our function with the inner arrays.


***********************************************************************/

const flatten = (arr) => {
  let res = [];

  for(let i = 0; i < arr.length; i++){
    let el = arr[i];
    
    if( el instanceof Array){
      res.push(...flatten(el)) //recurision 
    } else {
      res.push(el);
    }
  }

  return res;
}
  
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
  