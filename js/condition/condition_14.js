/*
Write a function named rainAdvice:
Take a parameter isRaining.
Use a ternary operator to return:
"Stay indoors" if isRaining is true.
"Enjoy the outdoors!" otherwise.
Call the function with different values for isRaining. 
*/
const rainAdvice = (isRaining) =>
  isRaining ? "Stay indoors" : "Enjoy the outdoors!";
console.log(rainAdvice(false));
