// "window" is the global object

var color = "blue";

console.log(color);
// console.log(window.color);

globalThis.color = color;
console.log(globalThis.color);