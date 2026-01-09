/*
Create a function `min` which founds the minimum value of a number array.

If the array is empty or null, return null.

Example:
* [1, 2, 3] -> 1
* [3, -2, 1] -> -2
* [] -> null

You can't use the function Math.min()

*/

// TODO add your code here
// 1ere solution
// const min = (array) => {
//   if (!Array.isArray(array) || !array.length) return null;
//   let minValue = array[0];
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if (element < minValue) {
//       minValue = element;
//     }
//   }
//   return minValue;
// };
// 2eme solution
//
const min = (array) =>
  !Array.isArray(array) || !array.length
    ? null
    : array.reduce((acc, curr) => (acc > curr ? curr : acc));
// pour reduce :
// array = [1, 2, 3]
// Premier tour de boucle : acc = 1, curr = 2
// (acc < curr ? acc : curr) → (1 < 2 ? 2 : 1) → 1
// → 1 devient le nouveau a pour le tour suivant
// Deuxième tour de boucle : a = 1, b = 3
// (1 < 3 ? 3 : 1) → 1
// → 1 reste a
//Fin du tableau → reduce retourne 1

module.exports = min;
