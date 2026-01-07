// objects
const obj = {
  firstName: "Youssef",
  lastName: "Dupont",
  age: 25,
  hobbies: ["voyage", "formation"],
};

// appeler la prop de l'objet obj
// concatenation (esc5)
console.log(
  obj.firstName +
    " " +
    obj.lastName +
    " " +
    " et " +
    "j'ai" +
    " " +
    obj.age +
    " ans"
);
// template string (es6)
console.log(`${obj.firstName} ${obj.lastName} et j'ai ${obj.age} ans`);

// modifier une la valeur d'un prop d'un objet
obj.lastName = "Slim";
obj.city = "Angoulême";
obj["role"] = "admin";
obj.test = "toto";
console.log('obj["lastName"] :>> ', obj["lastName"]);
console.log("obj :>> ", obj);
console.log("obj :>> ", typeof obj);

console.log('obj["firstName"] :>> ', obj["firstName"]);

console.log(obj.hobbies[0]);
// modifier un element de mon array :
obj.hobbies[0] = "test";

console.log("array :>> ", obj.hobbies[0]);

// ajouter un element à mon array
obj.hobbies.push("coucou");
console.log("array :>> ", obj.hobbies);
obj.hobbies.push("hello");
obj.hobbies.push(12);
obj.hobbies.push(obj);
console.log("array :>> ", obj.hobbies);

let inventory = [
  { id: 1, name: "Pomme", category: "fruit", quantity: 100, price: 1.5 },
  { id: 2, name: "Banane", category: "fruit", quantity: 120, price: 1.2 },
  { id: 3, name: "Carotte", category: "legume", quantity: 200, price: 0.8 },
  { id: 4, name: "Tomate", category: "legume", quantity: 150, price: 2.0 },
  { id: 5, name: "Orange", category: "fruit", quantity: 80, price: 1.8 },
  { id: 6, name: "Poire", category: "fruit", quantity: 90, price: 2.1 },
  { id: 7, name: "Aubergine", category: "legume", quantity: 50, price: 3.0 },
  { id: 8, name: "Courgette", category: "legume", quantity: 70, price: 1.5 },
  { id: 9, name: "Fraise", category: "fruit", quantity: 200, price: 4.0 },
  { id: 10, name: "Cerise", category: "fruit", quantity: 50, price: 6.5 },
  { id: 11, name: "Laitue", category: "legume", quantity: 130, price: 1.0 },
  { id: 12, name: "Brocoli", category: "legume", quantity: 60, price: 2.3 },
  { id: 13, name: "Pêche", category: "fruit", quantity: 40, price: 3.2 },
  { id: 14, name: "Ananas", category: "fruit", quantity: 30, price: 5.0 },
  { id: 15, name: "Concombre", category: "legume", quantity: 100, price: 1.2 },
];

// const result = Object.groupBy(inventory, ({ category }) => category);
// console.log("result :>> ", result);

// reduce :
const arrayReduced = inventory.reduce(
  (acc, item) => {
    if (item.category === "fruit") {
      acc.fruits += item.quantity;
    }
    if (item.category === "legume") {
      acc.legumes += item.quantity;
    }
    return acc;
  },
  {
    fruits: 0,
    legumes: 0,
  }
);

console.log("arrayReduced :>> ", arrayReduced);
