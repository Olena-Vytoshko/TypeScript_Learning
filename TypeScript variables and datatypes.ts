{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red79\green122\blue61;\red255\green255\blue255;\red202\green202\blue202;
\red71\green137\blue205;\red212\green212\blue212;\red194\green126\blue101;\red167\green197\blue151;\red76\green167\blue134;
\red54\green192\blue160;}
{\*\expandedcolortbl;;\cssrgb\c37609\c54466\c30476;\cssrgb\c100000\c100000\c100000\c0;\cssrgb\c83229\c83229\c83125;
\cssrgb\c33935\c61426\c84130;\cssrgb\c86370\c86370\c86262;\cssrgb\c80778\c56830\c46925;\cssrgb\c71007\c80807\c65804;\cssrgb\c35678\c70599\c59560;
\cssrgb\c23956\c78894\c69048;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf2 \cb3 \expnd0\expndtw0\kerning0
// This is my first TypeScript code\cf4 \
\cf2 // 04.08.2024\cf4 \
\cf2 /* I am gonna learn TypeScript basics by the end of September\cf4 \
\cf2 I am starting with 'TypeScript Variables and Data Types' course from Coursera */\cf4 \
\
\pard\pardeftab720\partightenfactor0
\cf5 var\cf4  message\cf6 :\cf4  \cf5 string\cf4  \cf6 =\cf4  \cf7 'Hello World!'\cf4 \
\pard\pardeftab720\partightenfactor0
\cf2 // console.log(message)\cf4 \
\
\cf2 /* Semicolon is optional\cf4 \
\cf2 in TypeScript!!! \cf4 \
\cf2 But is there any standarts like PEP8 in Python? */\cf4 \
\
\cf2 // Different ways of variable declaration\cf4 \
\
\pard\pardeftab720\partightenfactor0
\cf5 var\cf4  a\cf6 :\cf4  \cf5 number\cf6 ;\cf4  \cf2 // Declaring variable without value (only type)\cf4 \
\
\cf5 var\cf4  b\cf6 :\cf4  \cf8 10\cf6 ;\cf4  \cf2 // Declaring variable without type (only initial value). It will take it as a number automatically\cf4 \
\
\cf5 var\cf4  c\cf6 :\cf4  \cf5 number\cf4  \cf6 =\cf4  \cf8 10\cf6 ;\cf4  \cf2 // Declaring variable with both type and initial value\cf4 \
\
\cf5 var\cf4  d\cf6 ;\cf4  \cf2 // Absolutely insane way of declaring variable (no type, no initial value)\cf4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 // How to assign an initial value to a variable?\cf4 \
\
\pard\pardeftab720\partightenfactor0
\cf5 var\cf4  x\cf6 :\cf4  \cf5 number\cf4  \cf6 =\cf4  \cf8 100\cf6 ;\cf4  \cf2 // Same as declaring a variable with a type and an initial value\cf4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 // var vs let vs const\cf4 \
\
\cf2 // The first difference\cf4 \
\cf2 // var can be declared without being initialized\cf4 \
\pard\pardeftab720\partightenfactor0
\cf5 var\cf4  e\cf6 ;\cf4  \cf2 // or\cf4 \
\cf5 var\cf4  f\cf6 :\cf4  \cf5 number\cf6 ;\cf4 \
\pard\pardeftab720\partightenfactor0
\cf2 // let can be declared without being initialized as well\cf4 \
\pard\pardeftab720\partightenfactor0
\cf5 var\cf4  g\cf6 ;\cf4  \
\pard\pardeftab720\partightenfactor0
\cf2 // 'const' declarations must be initialized\cf4 \
\pard\pardeftab720\partightenfactor0
\cf5 const\cf4  h\cf6 :\cf4  \cf5 number\cf4  \cf6 =\cf4  \cf8 2024\cf6 ;\cf4  \cf2 // We use const only if we are not going to change it in whole code\cf4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 // The second difference\cf4 \
\cf2 // var variables can be re-declared and updated\cf4 \
\pard\pardeftab720\partightenfactor0
\cf5 var\cf4  i\cf6 :\cf4  \cf5 string\cf4  \cf6 =\cf4  \cf7 'Hello!'\cf6 ;\cf4  \cf2 // declaring and initialising of our variable\cf4 \
\pard\pardeftab720\partightenfactor0
\cf2 // console.log(i); // printing it in the console\cf4 \
i \cf6 =\cf4  \cf7 'Good evening!'\cf6 ;\cf4  \cf2 // updating the 'i' variable\cf4 \
\cf2 // console.log(i); // printing updated variable in the console\cf4 \
\pard\pardeftab720\partightenfactor0
\cf5 var\cf4  i\cf6 :\cf4  \cf5 string\cf4  \cf6 =\cf4  \cf7 'Hi'\cf6 ;\cf4  \cf2 // type of variable must be the same as it was before\cf4 \
\pard\pardeftab720\partightenfactor0
\cf2 // console.log('The var has been re-declared: ', i); // printing re-declared variable in the console\cf4 \
\cf2 // let variables can be updated, but can't be re-declared\cf4 \
\pard\pardeftab720\partightenfactor0
\cf5 let\cf4  j\cf6 :\cf4  \cf5 string\cf4  \cf6 =\cf4  \cf7 'JavaScript?'\cf6 ;\cf4 \
\pard\pardeftab720\partightenfactor0
\cf2 // console.log(j)\cf4 \
j \cf6 =\cf4  \cf7 'No, TypeScript!'\cf4 \
\cf2 // console.log('let variable has been updated: ', j)\cf4 \
\cf2 // const cannot be re-declared or updated\cf4 \
\pard\pardeftab720\partightenfactor0
\cf5 const\cf4  k\cf6 :\cf4  \cf5 number\cf4  \cf6 =\cf4  \cf8 121\cf6 ;\cf4 \
\pard\pardeftab720\partightenfactor0
\cf2 // console.log('The const variable has been declared and initialized: ', k)\cf4 \
\
\cf2 // The third difference\cf4 \
\cf2 // var variables are function scoped\cf4 \
\pard\pardeftab720\partightenfactor0
\cf5 function\cf4  example\cf6 ()\cf4 \
\cf6 \{\cf4 \
    \cf5 if\cf6 (\cf5 true\cf6 )\{\cf4 \
        \cf5 var\cf4  l \cf6 =\cf4  \cf8 100\cf6 ;\cf4 \
        console\cf6 .\cf4 log\cf6 (\cf4 l\cf6 );\cf4 \
    \cf6 \}\cf4 \
    console\cf6 .\cf4 log\cf6 (\cf4 l\cf6 );\cf4  \cf2 // we can to print the value from here\cf4 \
\cf6 \}\cf4 \
\pard\pardeftab720\partightenfactor0
\cf2 // let variables are block scoped\cf4 \
\pard\pardeftab720\partightenfactor0
\cf5 function\cf4  example2\cf6 ()\cf4 \
\cf6 \{\cf4 \
    \cf5 if\cf6 (\cf5 true\cf6 )\{\cf4 \
        \cf5 let\cf4  m \cf6 =\cf4  \cf8 123\cf6 ;\cf4 \
        console\cf6 .\cf4 log\cf6 (\cf4 m\cf6 );\cf4 \
    \cf6 \}\cf4 \
    \cf2 // console.log(m); // we can't print the value from here\cf4 \
\cf6 \}\cf4 \
\pard\pardeftab720\partightenfactor0
\cf2 // const variables are also block scoped\cf4 \
\pard\pardeftab720\partightenfactor0
\cf5 function\cf4  example3\cf6 ()\cf4 \
\cf6 \{\cf4 \
    \cf5 if\cf6 (\cf5 true\cf6 )\{\cf4 \
        \cf5 const\cf4  n \cf6 =\cf4  \cf8 123\cf6 ;\cf4 \
        console\cf6 .\cf4 log\cf6 (\cf4 n\cf6 );\cf4 \
    \cf6 \}\cf4 \
    \cf2 // console.log(n); // we can't print the value from here\cf4 \
\cf6 \}\cf4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 /* TypeScript initDataTypes\cf4 \
\cf2 Primitive or built-in:\cf4 \
\cf2 string, number, boolean, void, undefined, null, never\cf4 \
\cf2 User-defined:\cf4 \
\cf2 array, class, Interface, tuple, enum, function\cf4 \
\cf2 Superset type:\cf4 \
\cf2 any */\cf4 \
\
\cf2 // number\cf4 \
\pard\pardeftab720\partightenfactor0
\cf5 var\cf4  o\cf6 :\cf4  \cf5 number\cf4  \cf6 =\cf4  \cf8 0\cf6 ;\cf4 \
\pard\pardeftab720\partightenfactor0
\cf2 // console.log(o)\cf4 \
\pard\pardeftab720\partightenfactor0
\cf5 var\cf4  p\cf6 :\cf4  \cf5 number\cf4  \cf6 =\cf4  \cf8 10.1\cf4  \cf2 // no float datatype\cf4 \
\pard\pardeftab720\partightenfactor0
\cf2 // console.log(p)\cf4 \
\pard\pardeftab720\partightenfactor0
\cf5 var\cf4  r\cf6 :\cf4  \cf5 number\cf4  \cf6 =\cf4  \cf9 0X37FFF\cf6 ;\cf4  \cf2 // Hexadecimal number\cf4 \
\cf5 var\cf4  s\cf6 :\cf4  \cf5 number\cf4  \cf6 =\cf4  \cf8 0o17245\cf6 ;\cf4  \cf2 // Octal number\cf4 \
\cf5 var\cf4  t\cf6 :\cf4  \cf5 number\cf4  \cf6 =\cf4  \cf8 0b1001011\cf6 ;\cf4  \cf2 // Binary number\cf4 \
\pard\pardeftab720\partightenfactor0
\cf2 // console.log(r)\cf4 \
\
\cf2 // string\cf4 \
\pard\pardeftab720\partightenfactor0
\cf5 var\cf4  u\cf6 :\cf4  \cf5 string\cf4  \cf6 =\cf4  \cf7 'Learning build-in datatypes'\cf6 ;\cf4 \
\pard\pardeftab720\partightenfactor0
\cf2 // console.log(u)\cf4 \
\
\cf2 // boolean \cf4 \
\pard\pardeftab720\partightenfactor0
\cf5 var\cf4  \cf10 Grass_is_green\cf6 :\cf4  \cf5 boolean\cf4  \cf6 =\cf4  \cf5 true\cf6 ;\cf4 \
\pard\pardeftab720\partightenfactor0
\cf2 // console.log(Grass_is_green)\cf4 \
\
\cf2 // void: void implies no data. This is typically used when you are defining functions\cf4 \
\pard\pardeftab720\partightenfactor0
\cf5 var\cf4  nothing\cf6 :\cf4  \cf5 void\cf4  \cf6 =\cf4  \cf5 undefined\cf6 ;\cf4  \cf2 // only undefined can be assignable to void\cf4 \
\pard\pardeftab720\partightenfactor0
\cf2 // console.log(nothing)\cf4 \
\
\cf2 // null: absense of a value for a variable\cf4 \
\pard\pardeftab720\partightenfactor0
\cf5 var\cf4  absense_of_value \cf6 =\cf4  \cf5 null\cf6 ;\cf4 \
\pard\pardeftab720\partightenfactor0
\cf2 // console.log(absense_of_value)\cf4 \
absense_of_value \cf6 =\cf4  \cf7 'Now we have a value!'\cf4 \
\cf2 // console.log(absense_of_value)\cf4 \
\cf2 // console.log(typeof(absense_of_value))\cf4 \
\pard\pardeftab720\partightenfactor0
\cf5 var\cf4  null_as_type\cf6 :\cf4  \cf5 null\cf6 ;\cf4 \
\pard\pardeftab720\partightenfactor0
\cf2 // null_as_type = 'Cannot add data!';\cf4 \
null_as_type \cf6 =\cf4  \cf5 null\cf6 ;\cf4 \
\
\cf2 // undefined: absense of a variable itself\cf4 \
\pard\pardeftab720\partightenfactor0
\cf5 var\cf4  undefined_value \cf6 =\cf4  \cf5 undefined\cf6 ;\cf4 \
\pard\pardeftab720\partightenfactor0
\cf2 // console.log(undefined_value)\cf4 \
undefined_value \cf6 =\cf4  \cf7 'Now it is defined!'\cf4 \
\cf2 // console.log(undefined_value)\cf4 \
\pard\pardeftab720\partightenfactor0
\cf5 var\cf4  undefined_type\cf6 :\cf4  \cf5 undefined\cf6 ;\cf4 \
\pard\pardeftab720\partightenfactor0
\cf2 // undefined_type = 12 - causes error\cf4 \
\
\cf2 // never: when you are sure that something is never going to happen\cf4 \
\cf2 // var never_type: never = null; // Type 'null' is not assignable to type 'never'.\cf4 \
\
\cf2 // any: any signifies any type of data\cf4 \
\pard\pardeftab720\partightenfactor0
\cf5 var\cf4  v\cf6 :\cf4  \cf5 any\cf6 ;\cf4 \
v \cf6 =\cf4  \cf7 'Do you know TypeScript?'\cf4 \
console\cf6 .\cf4 log\cf6 (\cf4 v\cf6 )\cf4 \
console\cf6 .\cf4 log\cf6 (\cf5 typeof\cf6 (\cf4 v\cf6 ))\cf4 \
v \cf6 =\cf4  \cf8 144\cf4 \
console\cf6 .\cf4 log\cf6 (\cf4 v\cf6 )\cf4 \
console\cf6 .\cf4 log\cf6 (\cf5 typeof\cf6 (\cf4 v\cf6 ))\cf4 \
v \cf6 =\cf4  \cf5 false\cf4 \
console\cf6 .\cf4 log\cf6 (\cf4 v\cf6 )\cf4 \
console\cf6 .\cf4 log\cf6 (\cf5 typeof\cf6 (\cf4 v\cf6 ))\cf4 \
}