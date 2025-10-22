// 01. object literals

const sales = "Toyota";

// ? (return when true) : (return when false)

function carTypes(name) {
    return name === "Honda" ? name : `Sorry, we don't sell ${name}.`;
}

// declare object with 3 properties
const car = {
    myCar: "Saturn",
    getCar: carTypes("Honda"),
    special: sales
};

console.log(car.myCar) // Saturn
console.log(car.getCar) // Honda (true -> return name)
console.log(car.special) // Toyota


const car2 = { manyCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };

console.log(car2.manyCars.b); // Jeep
console.log(car2[7]); // Mazda

// property names that are not valid identifiers cannot be accessed as a dot (.) property

const unusualPropertyNames = {
    "": "An empty string",
    "!": "Bang!",
};

/*
console.log(unusualPropertyNames.""); // SyntaxError: Unexpected string
console.log(unusualPropertyNames.!); // SyntaxError: Unexpected token !
*/

// must be accessed with the bracket notation

console.log(unusualPropertyNames[""]); // SyntaxError: Unexpected string
console.log(unusualPropertyNames["!"]); // SyntaxError: Unexpected token !


// 02. enhanced object literals


const obj = { // create a new obj that inherits from theProtoObj
    // __proto__
    __proto__: theProtoObj, // set prototype (so "super" can refer to)
    // shorthand for "handler: handler"
    handler,
    // methods
    toString() {
        // super calls
        // ${...}: interpolation, put value into string
        return `d ${super.toString()}`; // equals to "d" + super.toString()
    },
    // computed (dynamic) property names
    ["prop_" + (() => 42)()]: 42,
};


// for understanding

// parent object
const animal = {
    // define a method
    makeSound() {
        return ("generic animal sound");
    }
};

// child object
const dog = {
    // set prototype: dog inherits from animal
    __proto__: animal,

    // override the parent's makeSound() method
    makeSound() {
        // "super" refers to the parent object
        // call the parent's makeSound() and add dog's own behavior
        return "Dog barks!" + super.makeSound()
    }
};

console.log(dog.makeSound()); // "Dog barks! generic animal sound"


function sayHi() {
    return "Hi!";
}

// equals to:
// arrow function: short way to define a function
const sayHi2 = () => "Hi!";


// another example

const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

// equals to

function add(a, b) {
    return a + b;
}