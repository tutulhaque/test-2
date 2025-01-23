/* 
Write a function named findFox:
Take two parameters: hasFox and foxName.
If hasFox is true AND foxName equals "Fiona", return "Fiona the fox is here!"
Otherwise, return "No foxes found."
Call the function with different fox names. 
*/
const findFox = (hasFox, foxName) =>
  hasFox && foxName == "Fiona" ? "Fiona the fox is here!" : "No foxes found.";
console.log(findFox(true, "Fiona"));
