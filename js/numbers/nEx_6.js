/* 
1. Use the Math.random() method to generate a random number between 0 and 1.
2. Multiply the result by 10 and use Math.floor() to round it down to the nearest whole number.
3. Print the random number using console.log() with a message like: "Your random number is 4." 
*/

let randomNumber = Math.random(0, 1);
console.log(randomNumber);
let multiplyRandomNumber = Math.floor(randomNumber * 10);
console.log("Your random number is", multiplyRandomNumber);
