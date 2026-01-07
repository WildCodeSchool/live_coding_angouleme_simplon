// variables :
// convention de nommage : camelCase | snake_case | PascalCase
// mots clés : var | const | let
// var : ne jamais utilisé

var myName = "toto";

console.log("myName :>> ", myName);

// const :
const myName2 = "Tom";
// myName2 = "Tonton"; // faux

//  let :
let myName3 = "Eric";
console.log("myName3 with let :>> ", myName3);
myName3 = "toto";

// type primitif

console.log("myName3 :>> ", myName3);
console.log("type of myName3 :>> ", typeof myName3);
// console.log("myName3 :>> ", myName4);
// intro.js:21 Uncaught ReferenceError: myName4 is not defined

let age;
console.log("age :>> ", age);
// operators
// modulo %

const price = 12;

if (!(12 % 5)) {
  // 12 % 2 = 0 => false
  // !false = true et 1 => true
  console.log("12 % 3 :>> ", 12 % 3);
  console.log(" dans la 1ere condition =>  je suis là");
} else {
  console.log("12 % 2 :>> ", 12 % 5);
  console.log("😱");
}

console.log("---------------------------");

if (12 % 2 !== 0) {
  console.log("je suis là");
} else {
  console.log("12 % 2 :>> ", 12 % 2);
  console.log("😱");
}
