/* Create a function named generateRandomNumber that:
Takes two parameters, min and max.
Returns a random integer between min and max (inclusive).
Call the function with the arguments 1 and 10.
Print the result using console.log().

Hint: Use Math.random(), Math.floor(), and simple math.

*/
const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (min - max + 1) + max);
};
console.log(generateRandomNumber(1, 10));
console.log(generateRandomNumber(1, 10));
console.log(generateRandomNumber(1, 10));
console.log(generateRandomNumber(1, 10));
console.log(generateRandomNumber(1, 10));
console.log(generateRandomNumber(1, 10));
console.log(generateRandomNumber(1, 10));
