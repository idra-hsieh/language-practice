'use client';

// Declare "MyButton"

function MyButton() {
    return (
        // component can[t return multiple jsx tags, have to wrap them into a shared parent
        <>
            <p>Hello there. <br />How do you do?</p>
            <button className="round">
                {"I'm a button"}
            </button>
        </>
    );
}

// Nest it into another component

export default function MyApp() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton />
        </div>
    )
}