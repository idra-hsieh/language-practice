// variables can be declared to unpack values using the destructuring syntax

const foo = {
    bar: 10,
    baz: 20
}

{
    const bar = foo.bar;
    console.log(bar); // 10
}

// equals to

{
    const { bar } = foo;
    console.log(bar); // 10
}


// variables should always be declared before they are used.
