// map, filter, reduce

// map: “Give me a new array, same length.”
// filter: “Give me some of the items.”
// reduce: “Give me one final result.”

let names = ["Idra", "Ellia", "Eva"];

// 01 - MAP

// traditional way

for (let i = 0; i < names.length; i++) {
  names[i] = names[i] + "1";
}

console.log(names); // ["Idra1", "Ellia1", "Eva1"]

// using map

names.map((name) => {
  return name + "1";
});

// application : generating headers for each element in the list

names.map((name) => {
  return <h1>{name}</h1>;
});

// 02 - FILTER

let names2 = ["Idra", "Ellia", "Eva", "Idra", "Idra"];

names2.filter((name) => {
  return name !== "Idra";
}); // ["Ellia", "Eva"]

// 03 - REDUCE

let numbers = [10, 20, 30];

// traditional way

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}

console.log(sum); // 60

// using reduce

let sum2 = numbers.reduce((total, number) => {
  return total + number;
}, 0); // 60 // 0 = initial total

// example 2 : counting how many times "Idra" appears

let names3 = ["Idra", "Ellia", "Eva", "Idra", "Idra"];

let count = names.reduce((total, name) => {
  if (name === "Idra") {
    return total + 1;
  }
  return total;
}, 0); // 3

// example 3 : turning an array into an object

let names4 = ["Idra", "Ellia", "Eva"];

let nameObject = names4.reduce((acc, name) => {
  acc[name] = name + "1";
  return acc;
}, {});

console.log(nameObject);

// {
//   Idra: "Idra1",
//   Ellia: "Ellia1",
//   Eva: "Eva1"
// }

// example 4 : group data before rendering

let names5 = ["Idra", "Ellia", "Eva", "Ian"];

let grouped = names.reduce((acc, name) => {
  const firstLetter = name[0];

  // if this letter group doesn’t exist, make a new empty array

  if (!acc[firstLetter]) {
    acc[firstLetter] = [];
  }

  // add the current name into that group

  acc[firstLetter].push(name);
  return acc;
}, {});

// {
//   I: ["Idra", "Ian"],
//   E: ["Ellia", "Eva"]
// }
