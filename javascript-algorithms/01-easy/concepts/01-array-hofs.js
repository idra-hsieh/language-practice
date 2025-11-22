/**
 * ============================================================
 * HIGHER-ORDER FUNCTIONS (HOFs)
 * ============================================================
 * Definition: A function that takes another function as an argument.
 * They handle the looping for you.
 */

/**
 * ------------------------------------------------------------
 * 1. map()
 * ------------------------------------------------------------
 * What it does: Transforms EVERY item in the array and returns
 * a new array of the exact same length.
 *
 * Key thought: "I need to change every item."
 */

const nums = [1, 2, 3];
const users = [
  { name: "Idra", role: "Dev" },
  { name: "Bob", role: "Guest" },
];

// Ex 1: Math (Double numbers)

const doubled = nums.map((n) => n * 2);
console.log(doubled); // [2, 4, 6]

// Ex 2: Formatting (Add currency sign)

const prices = nums.map((n) => `$${n}.00`);
console.log(prices); // [ '$1.00', '$2.00', '$3.00' ]

// Ex 3: Extraction (Get only names from objects)
const names = users.map((user) => user.name);
console.log(names); // [ 'Idra', 'Bob' ]
