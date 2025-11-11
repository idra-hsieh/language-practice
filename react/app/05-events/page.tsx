function MyButton() {
    function handleClick() {
        alert("You clicked me!");
    }

    return (
        {/* Pass the function reference (not onClick={handleClick(), this will call it immediately. */ }
        < button onClick = { handleCLick } >
            Click me
        </ >
    )
}