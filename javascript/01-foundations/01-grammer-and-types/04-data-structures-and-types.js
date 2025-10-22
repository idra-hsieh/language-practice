/*
8 data types:

(7 primitives)
1. boolean: true and false
2. null: case-sensitive in javascript, not the same as Null, NULL, etc.
3. undefined
4. number: integer or floating point number e.g. 42, 3.14159
5. BigInt: integer with arbitrary precision e.g. 9007199254740992n
6. String: sequence of characters that represent a text value e.g. Howdy
7. Symbol: a data type whose instances are unique and immutable

8. object

Other: functio
- object: named containers for values
- function: procedures that script can perform
*/

// 01. data type conversion

// java script is a "dynamically typed language"
// no neeed to declare data type
// also no need to convert when re-declaring

let answer = 42;
answer = "Thanks for all the fish!";


// 02. numbers and the "+" operator

// only when connecting numeric and string with the + operator, will be converted to string

x = "The answer is " + 42 // string "The answer is 42"
y = 42 + "is the answer" // string "42 is the answer"
z = "37" + 7;

console.log(x);
console.log(y);
console.log(z);

// with all other operators, javascript does not convert numeric values to strings

a = "37" - 7; // 30
b = "37" * 7; // 259

console.log(a);
console.log(b);


// 03. convert strings to number

c = parseInt("101", 2); // 5
d = "1.1" + "1.1"; // 1.11.1
e = (+"1.1") + (+"1.1"); // 2 // unary plus turns string into number

console.log(c);
console.log(d);
console.log(e);