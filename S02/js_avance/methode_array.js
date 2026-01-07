const array = ["toto", "mardi", "Jeudi", "kiwi", 12, 13];
// la longuer de tableau (array)
const length = array.length;
console.log("length :>> ", length);

// ajouter un element à mon tableau (array)
// à la fin de mon tableau 'push()'
array.push("push", "test");
console.log("array push:>> ", array);
// ajouter un nouvel element au debut de mon tableau
array.unshift("Lucas");
console.log("array unshift:>> ", array);
// supprimer un element à la fin de mon tableau
array.pop();
console.log("array pop :>> ", array);
// supprimer un element au début de mon tableau
array.shift();
console.log("array shift :>> ", array);
for (let index = 0; index < array.length; index++) {
  //   if (array[index] === "Jeudi") {
  //     array[index] = "Mercredi";
  //   }
  if (array[index] === "Jeudi") array[index] = "Mercredi";
}
console.log("array boucle for :>> ", array);
array.forEach(function (item, index) {
  console.log("typeof item :>> ", typeof item);
  console.log("item :>> ", item);
  console.log("index :>> ", index);
  console.log("item :", item, item === "Mercredi");
  if (item === "Mercredi") {
    array[index] = "Vendredi";
  }
});
console.log("array forEach :>> ", array);
// map
const newArrayWithMap = array.map((item, index) => {
  console.log("item map:>> ", item);
  console.log("index map :>> ", index);
  if (item === "Vendredi") {
    item = "Samedi";
  }
  return item;
});
console.log("array :>> ", array);
console.log("newArrayWithMap :>> ", newArrayWithMap);
