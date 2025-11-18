let age = 24;
let name = "Idra";

// traditional if-else

if (true) {
  // placeholder
} else {
  // placeholder
}

if (age > 24) {
  name = "Idra";
} else {
  name = "Ellia";
}

// ternary operators : minimize code

let age2 = 24;
let name2 = age2 > 24 && "Idra"; // if > 24, then "Idra" ; else, return false
let name3 = age2 > 24 || "Ellia"; // if > 24, returm true ; else, return "Ellia"

let name4 = age2 > 24 ? "Idra" : "Ellia";

// application

const Component = () => {
  return age2 > 24 ? <div>Idra</div> : <div>Ellia</div>;
};
