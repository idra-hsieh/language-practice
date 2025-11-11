// a constamt cannot change value or be re-declared

/*
const PI = 3.14;

// ERROR
function f() { }
const f = 5;

// ERROR
function f() {
    const g = 5;
    var g;
}

*/

// const only prevents re-assignments,
// but doesn't prevent mutations

// this can be executed
const MY_OBJECT = { key: "value" };
MY_OBJECT.key = "otherValue";
console.log(MY_OBJECT) // { key: 'otherValue' }

// contents of an array are not protected,
// this can also be executed
const MY_ARRAY = ["HTML", "CSS"];
MY_ARRAY.push("JAVASCRIPT");
console.log(MY_ARRAY); // [ 'HTML', 'CSS', 'JAVASCRIPT' ]