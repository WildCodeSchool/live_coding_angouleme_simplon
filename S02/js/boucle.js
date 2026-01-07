const array = ["test", "formation", "coucou", "hello"];

console.log("array[1] :>> ", array[1]);
console.log("array[1] :>> ", array[3]);
console.log("array[1] :>> ", typeof array[1]);
console.log("array[1] :>> ", typeof array[3]);

const firstElm = array[0].toUpperCase();
const secondElm = array[1].toUpperCase();
const thirdElm = array[2].toUpperCase();
const forElm = array[3].toUpperCase();
const secondArray = [firstElm, secondElm, thirdElm, forElm];
console.log("array[0].toUpperCase():>> ", array[0].toUpperCase());
console.log("array :>> ", array);
console.log("secondArray :>> ", secondArray);
const thirdArray = [];

for (let i = 0; i < array.length; i++) {
  thirdArray[i] = array[i].toUpperCase();
}

console.log("array : line 22 >> ", thirdArray);
