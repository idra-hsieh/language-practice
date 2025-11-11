// 01. string literal

// 0+ characters enclosed in double quotation ("") or single quotation ('')

a = "cat"
b = "Hello! How are you"

// string literal vs. string object

new String("hello"); // rarely needed, just use string literals

// javascript temporarily converts string into a Strign object
console.log("Joyo's cat".length); // 10
console.log("hello".toUpperCase()); // "HELLO"


// 02. template literals (back-tick strings)

// basic literal string
`In Javascript "\n" is a line-feed.`;

// multiline strings
`In Javascript, template strings can run
 over multiple lines, but double and single
 quoted strings cannot.`

// string interpolation
const name = "Lev",
    time = "today";
`Hello ${name}, how are you ${time}?`;


// 03. tagged template literals (advanced feature)

// a helper function that formats each argument
const formatArg = (arg) => {

    // if the argument is an array, turn it into a bullet list (-)
    if (Array.isArray(arg)) {
        return arg.map((part) => `- ${part}`).join("\n");
    }

    // if the argument is a plain object, convert it to JSON (text)
    if (arg.toString === Object.prototype.toString) {
        return JSON.stringify(arg);
    }

    // otherwise, return the argument itself
    return arg;
}

// the tag function that processes the template literal
const print = (segments, ...args) => {
    // 'segments' = array of string parts from the template
    // 'args' = the values inserted in ${}
    // There will always be (N+1) segments for N arguments

    let message = segments[0]; // start with the first string part

    // exclude the first string, loop through all remaining segments
    segments.slice(1).forEach((segment, index) => {
        // add the formatted argument + the next string segment
        message += formatArg(args[index]) + segment;
    })

    console.log(message);
};

// example data
const todos = [
    "Learn Javascript",
    "Learn Web APIs",
    "Set up my website",
    "Profit!",
]

const progress = { javascript: 20, html: 50, css: 10 };

print`I need to do:
${todos}
My current progress is: ${progress}
`;


// 04. special characters
x = "one line \n another line";
console.log(x);

test = `
\0	Null Byte
\b	Backspace
\f	Form Feed
\n	New Line
\r	Carriage Return
\t	Tab
\v	Vertical tab
\'	Apostrophe or single quote
\"	Double quote
\\	Backslash character
\XXX	The character with the Latin-1 encoding specified by up to three octal digits XXX between 0 and 377. For example, \\251 is the octal sequence for the copyright symbol.
\\xXX	The character with the Latin-1 encoding specified by the two hexadecimal digits XX between 00 and FF. For example, \xA9 is the hexadecimal sequence for the copyright symbol.
\\uXXXX	The Unicode character specified by the four hexadecimal digits XXXX. For example, \u00A9 is the Unicode sequence for the copyright symbol. See Unicode escape sequences.
\\u{XXXXX}	Unicode code point escapes. For example, \u{2F804} is the same as the Unicode escapes \uD87E\uDC04.
`
console.log(test);

const quote = "He read \"The Cremation of Sam McGee\" by R.W. Service.";
console.log(quote); // He read "The Cremation of Sam McGee" by R.W. Service.

const home = "c:\\temp";

const str =
    "this string \
is broken \
across multiple \
lines.";
console.log(str); // this string is broken across multiple lines.