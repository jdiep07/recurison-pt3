/***********************************************************************
Write a recursive function called `fibonacci` that takes an integer, `n`,
and returns the `n`th number in the Fibonacci sequence.

Not familiar with the Fibonacci sequence? Beginning with 0 and 1, we add the two
previous numbers in the sequence together to form the next one:

0, 1, 1, 2, 3, 5, 8, etc....

We count Fibonacci numbers beginning with the first 1. Take a look at the
examples below if you're unsure where to start!

Examples:

fibonacci(1); // 1
fibonacci(2); // 1
fibonacci(3); // 2
fibonacci(4); // 3
fibonacci(10); // 55
***********************************************************************/

















// const fibonacci = (num) => {
//   //base case:
//   if( num === 1 || num === 2) return 1;

//   // recursive step: 
//   return fibonacci(num - 1) + fibonacci(num - 2);
// }

//const fibonacci = n => n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = fibonacci;
  