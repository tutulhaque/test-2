/* 
Write a function named checkForFox:
Take a boolean parameter hasFox.
If hasFox is true, return "You have a fox as a pet!"
Otherwise, return "No fox detected!"
Call the function with true and false and print the result. 
*/
const checkForFox = (hasFox) =>
  hasFox ? "You have a fox as a pet!" : "No fox detected!";
console.log(checkForFox(false));
