
/*
scopes:
1. Global scope: The default scope for all code running in script mode.
2. Module scope: The scope for code running in module mode.
3. Function scope: The scope created with a function.
*/

/* 
variables declared with let or const can belong to an additional scope:
Block scope: The scope created with a pair of curly braces (a block).
*/


if (Math.random() > 0.5) {
    const z = 5;
}
console.log(z); // ReferenceError: z is not defined


if (true) {
    var a = 5;
}

console.log(a); // 5