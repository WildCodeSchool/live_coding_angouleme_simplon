// la desctructuration (es6)
const obj = {
  firstName: "Toto",
  lastName: "Dupont",
  age: 25,
  city: "Angoulême",
};

console.log("obj.firstName :>> ", obj.firstName);
console.log("obj[] :>> ", obj["firstName"]);

const { firstName, lastName, ...test } = obj;
console.log("a :>> ", firstName);
console.log("test :>> ", test);

const secondObject = { ...obj, test: "toto" };
console.log("secondObject :>> ", secondObject);
const array = ["test", "formation", "coucou", "hello"];

const [firstElm, secondElm, ...rest] = ["test", "formation", "coucou", "hello"];
console.log("c :>> ", firstElm);
console.log("d :>> ", secondElm);
console.log("rest :>> ", rest);
