let str = "lundi";
console.log(str.length);
console.log(str[0]);
console.log(str.split());
console.log(str.toLocaleLowerCase());
console.log(str.toUpperCase());
// Solution 😱 ❌
// let strFirtLetterToUperCase = "";
// for (let index = 0; index < str.length; index++) {
//   console.log("str[i] :>> ", str[index]);
//   const firstLetter = str[0].toUpperCase();
//   strFirtLetterToUperCase = firstLetter;
// }

// // lundi  => l = L et le rest undi
// const strToUperCase = str.toUpperCase();
// console.log(
//   "str :>> ",
//   (str = strFirtLetterToUperCase + str[1] + str[2] + str[3] + str[4])
// );
// meilleur solution :
const firstLetter = str.slice(3);
console.log("firstLetter :>> ", firstLetter);
const strFirtLetterToUperCase = str.slice(0, 1).toUpperCase() + str.slice(1);
console.log("strFirtLetterToUperCase :>> ", strFirtLetterToUperCase);
