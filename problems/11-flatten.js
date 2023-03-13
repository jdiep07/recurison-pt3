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
  let res = []; // empty results

  for(let i = 0; i < arr.length; i++){ // for loop to iterate through arr
    let el = arr[i];
    
    if( el instanceof Array){ // checks if el is an array or not
      res.push(...flatten(el)) //recurision [ the ...flatten-- pulls the nested-array element to be push.
    } else {
      res.push(el); // if it is just element not nested, continue to push into res.
    }
  }

  return res;   // returns the results of res
}
  
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
  