/* Create a variable messyString and assign it the value " Clean me up! ".
Use .trim() to remove the extra spaces at the beginning and end of the string.
Print the cleaned-up string using console.log().
Example output:
"Cleaned string: Clean me up!"
 */

let messyString = "   Clean me up!    ";
let cleanString = messyString.trim(" ");
console.log("Cleaned string: " + cleanString);
