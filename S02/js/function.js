// les fonctions
// focntion nommée (es5)
function sayHello() {
  console.log("hello world !");
}

sayHello();

// une fonction anonyme (es5)
const sayHello1 = function () {};

// une fonction fleché | arrow function (es6)
const sayHelloArrowFunc = () => {};

// parameter d'une fonction
const sayHelloArrowFuncWithParams = (param1, param2) => {
  console.log(`${param1} et ${param2}`);
  return `${param1} et ${param2}`;
};

sayHelloArrowFuncWithParams("Youssef", "Toto");
console.log(sayHelloArrowFuncWithParams("Youssef", "Toto"));

// return | callback | params | arg

const sum = (a, b) => {
  console.log(a + b);
  const sur1 = a + b;
  // return sur1;
};
// console.log("sum with return :>> ", sum(2, 4));
console.log("sum without return :>> ", sum(2, 3));
const firstName = "toto";
// sum(2, 5);
// sum(5, 5);
// sum(8, 5);
// sum(0, 5);
console.log(sum(3, 6));

// sum(3,6) => 9

const multiply = (x, y) => x * y;
// const multiply = (x, y) => {
//   return x * y;
// };

console.log(multiply(2, 5));

// exemple de callback :

const multiplyCallBack = (callback, a, b) => {
  return callback(a, b);
};
// const multiplyCallBack = (callback, a, b) => callback(a, b);
const result = multiplyCallBack(multiply, 3, 5);
console.log(` resultat = ${result}`);
