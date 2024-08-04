// This is my first TypeScript code
// 04.08.2024
/* I am gonna learn TypeScript basics by the end of September
I am starting with 'TypeScript Variables and Data Types' course from Coursera */

var message: string = 'Hello World!'
// console.log(message)

/* Semicolon is optional
in TypeScript!!! 
But is there any standarts like PEP8 in Python? */

// Different ways of variable declaration

var a: number; // Declaring variable without value (only type)

var b: 10; // Declaring variable without type (only initial value). It will take it as a number automatically

var c: number = 10; // Declaring variable with both type and initial value

var d; // Absolutely insane way of declaring variable (no type, no initial value)

// How to assign an initial value to a variable?

var x: number = 100; // Same as declaring a variable with a type and an initial value

// var vs let vs const

// The first difference
// var can be declared without being initialized
var e; // or
var f: number;
// let can be declared without being initialized as well
var g; 
// 'const' declarations must be initialized
const h: number = 2024; // We use const only if we are not going to change it in whole code

// The second difference
// var variables can be re-declared and updated
var i: string = 'Hello!'; // declaring and initialising of our variable
// console.log(i); // printing it in the console
i = 'Good evening!'; // updating the 'i' variable
// console.log(i); // printing updated variable in the console
var i: string = 'Hi'; // type of variable must be the same as it was before
// console.log('The var has been re-declared: ', i); // printing re-declared variable in the console
// let variables can be updated, but can't be re-declared
let j: string = 'JavaScript?';
// console.log(j)
j = 'No, TypeScript!'
// console.log('let variable has been updated: ', j)
// const cannot be re-declared or updated
const k: number = 121;
// console.log('The const variable has been declared and initialized: ', k)

// The third difference
// var variables are function scoped
function example()
{
    if(true){
        var l = 100;
        console.log(l);
    }
    console.log(l); // we can to print the value from here
}
// let variables are block scoped
function example2()
{
    if(true){
        let m = 123;
        console.log(m);
    }
    // console.log(m); // we can't print the value from here
}
// const variables are also block scoped
function example3()
{
    if(true){
        const n = 123;
        console.log(n);
    }
    // console.log(n); // we can't print the value from here
}

/* TypeScript DataTypes
Primitive or built-in:
string, number, boolean, void, undefined, null, never
User-defined:
array, class, Interface, tuple, enum, function
Superset type:
any */

// number
var o: number = 0;
// console.log(o)
var p: number = 10.1 // no float datatype
// console.log(p)
var r: number = 0X37FFF; // Hexadecimal number
var s: number = 0o17245; // Octal number
var t: number = 0b1001011; // Binary number
// console.log(r)

// string
var u: string = 'Learning build-in datatypes';
// console.log(u)

// boolean 
var Grass_is_green: boolean = true;
// console.log(Grass_is_green)

// void: void implies no data. This is typically used when you are defining functions
var nothing: void = undefined; // only undefined can be assignable to void
// console.log(nothing)

// null: absense of a value for a variable
var absense_of_value = null;
// console.log(absense_of_value)
absense_of_value = 'Now we have a value!'
// console.log(absense_of_value)
// console.log(typeof(absense_of_value))
var null_as_type: null;
// null_as_type = 'Cannot add data!';
null_as_type = null;

// undefined: absense of a variable itself
var undefined_value = undefined;
// console.log(undefined_value)
undefined_value = 'Now it is defined!'
// console.log(undefined_value)
var undefined_type: undefined;
// undefined_type = 12 - causes error

// never: when you are sure that something is never going to happen
// var never_type: never = null; // Type 'null' is not assignable to type 'never'.

// any: any signifies any type of data
var v: any;
v = 'Do you know TypeScript?'
console.log(v)
console.log(typeof(v))
v = 144
console.log(v)
console.log(typeof(v))
v = false
console.log(v)
console.log(typeof(v))
