// 01. integer literals

/*
integer and BigInt can be written in:
1. decimal (base 10): without a leading 0
2. hexadecimal (base 16): leading 0x (0X), can include 0-9 and a-f and A-F
3. octal (base 8): leading 0o, can only include 0-7
4. binary (base 2): leading 0b, can onlu include 0 and 1
*/

// BigInt: with a trailing n
// can use any of the above bases

// decimal (base 10)
a = 117;
b = 3749273429839729485n;

// octal (base 8)
c = 0o15;
d = 0o1;
e = 0o77777777777777n;

// hexadecimal (base 16)
f = 0x1123
g = 0x00111
h = 0x73984632ABCDEFn

// binary (base 2)
i = 0b11;
j - 0b0011;
k = 0b1101010100111011n;


// 2. floating-point literals

// [digits].[digits][(E|e)[(+|-)]digits]

l = 3.1415926;
m = .123456789;
n = 3.1E+12; // = 3.1 * 10^12
o = .1e-23; // 0.1 * 10^-23