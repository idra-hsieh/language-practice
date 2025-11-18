// traditional function

export default function DoSomething1() {
  {
    // placeholder
  }
}

// arrow function

export const DoSomething2 = () => {
  return <div></div>;
};

// anonymous function : execute commands without having to declare functions

<button
  onClick={() => {
    console.log("hello world");
  }}
></button>;
