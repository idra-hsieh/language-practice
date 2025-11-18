// console.log runs immediately

// var name = "Idra";
// console.log(name); // Idra

// name = "Ellia";
// console.log(name); // Ellia

// var listOfMovies = fetch("url.com/movies"); // will take time
// console.log(listOfMovies); // might not work because the previous request isn't done yet

// use promise to wait

const event = new Promise((resolve, reject) => {
  var name = "Idra";
  if (name == "Idra") {
    resolve(name); // if successed ,  do somthing
  } else {
    reject("Name was not Idra, name was: " + name); // if failed, do something
  }
});

// then : when resolved
// catch : when rejected
// finally : no matter it's resolved or rejected

event
  .then((name) => {
    console.log(name);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("PROMISE FINISHED");
  });

const axios = require("axios");
const data = axios.get("https://cat-fact.herokuapp.com/facts");
data
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Promise resolved");
  });
