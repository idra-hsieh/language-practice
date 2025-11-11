'use client';

// Declare "MyButton"

function MyButton() {
    return (
        <button>
            {"I'm a button"}
        </button>
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