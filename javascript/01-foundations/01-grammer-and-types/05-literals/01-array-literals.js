const coffees = ["French Roast", "Colombian", "Kona"];

// create empty slot

const fish = ["Lion", , "Angel"];
console.log(fish); // [ 'Lion', <1 empty item>, 'Angel' ]

const myList = ["home", , "school"];
console.log(myList[3]); // undefined
console.log(myList[1]); // undefined
console.log(myList.length); // 3

const myList2 = [, "home", , "school"];
console.log(myList2[0]); // undefined
console.log(myList2[2]); // undefined
console.log(myList2.length); // 4

const myList3 = ["home", , "school", ,];
console.log(myList3[1]); // undefined
console.log(myList3[3]); // undefined
console.log(myList3[4]); // undefined
console.log(myList3.length); // 4, the last comma is ignored

// trailing commas help keep git diffs clean

const myList4 = [
      "home",
      "school",
// +  "hospital",
];

// best practice: when writing code, explicitly declare "undefined" or at least insert a comment

const myList5 = ["home", /* empty */, "school", /* empty */];