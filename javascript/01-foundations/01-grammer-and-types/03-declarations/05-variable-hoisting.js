console.log(x === undefined); // true
var x = 3;


(function () {
    console.log(x);
    var x = "local value";
})();

console.log(y); // ReferenceError
const y = 3;

console.log(y); // ReferenceError
let y = 3;