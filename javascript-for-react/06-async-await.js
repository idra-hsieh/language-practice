// async-await works cleaner then promises

const axios = require("axios");

async function nonArrowFunction() {
  // placeholder
}

// async function
// await for what needs to be waited (after the "=")

const fetchData = async () => {
  const data = await axios.get("https://cat-fact.herokuapp.com/facts");
  console.log(data);
};

fetchData();

// catching errors

const fetchData2 = async () => {
  try {
    const data = await axios.get(
      "https://cat-fact.herokuapp.com/yorurehuifcldbl"
    );
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

fetchData2();

// finally prop

const fetchData3 = async () => {
  try {
    const data = await axios.get(
      "https://cat-fact.herokuapp.com/yorurehuifcldbl"
    );
    console.log(data);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Promise resolved");
  }
};

fetchData3();
