/* Create a function named isEven that:
Takes one parameter, num.
Returns true if num is even, otherwise returns false.
Call the function with the arguments 4 and 7.
Print the results using console.log().

Bonus: Modify the function to use implicit return. 
*/
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}
let result = isEven(4);
console.log(result);
