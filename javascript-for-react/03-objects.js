// traditional way

const person = {
  name: "Idra",
  age: 24,
  isMarried: false,
};

const name = person.name;
const age = person.age;
const isMarried = person.isMarried;

// object

const person2 = {
  name2: "Idra",
  age2: 24,
  isMarried2: false,
};

// get properties (props) from person
const { name2, age2, isMarried2 } = person2;

// declaring keys from variables

const name3 = "Ellia";
const age3 = 20;

const person3 = {
  name3, // no need for name3 = name3 , but can do that either
  age3,
};

// copying an object but only change 1 prop

// ... means keep everything from this object
const person4 = { ...person3, name3: "Idra" };

const names = ["Idra", "Ellia", "Eva"];
const names2 = [...names, "Estrella"]; // names2 = names + "Estrella"
