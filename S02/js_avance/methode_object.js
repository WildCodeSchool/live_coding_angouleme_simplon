const order = {
  orderNumber: 101,
  customer: {
    name: "Dupont",
    email: "dupont@example.com",
    phone: "0601020304",
    city: "Angoulême",
  },
  items: [
    {
      name: "Pizza Margherita",
      quantity: 2,
      unitPrice: 12.5,
    },
    {
      name: "Coca-Cola",
      quantity: 3,
      unitPrice: 3,
    },
  ],
  status: "in preparation",
  orderDate: "2024-10-09",
};

// Pour supprimer une propriété d'un objet
delete order.customer.city;
// Vérifier l'existence d'une propriété
const hasProp = "status" in order;
console.log("hasProp :>> ", hasProp);
const hasPropWithMethode = order.hasOwnProperty("status");
console.log("hasPropWithMethode :>> ", hasPropWithMethode);
// Boucler sur un objet
for (let prop in order) {
  //   console.log(prop + ": " + order[prop]);
  console.log(`${prop} : ${order[prop]}`);
}

// Obtenir les clés, valeurs ou paires clé-valeur
console.log("keys", Object.keys(order));
console.log("values", Object.values(order));
console.log("entries", Object.entries(order));

// Fusionner des objets
const obj1 = { a: 1 };
const obj2 = { b: 2, c: 3 };

const fusion = Object.assign({}, obj1, obj2);
// Ou
const fusion2 = { ...obj1, ...obj2 };

console.log(fusion); // { a: 1, b: 2, c: 3 }

// Copier un objet
const newOrder = { ...order };
// Empêcher la modification d’un objet (ajout, suppression ou modification des propriétés).
const obj = { nom: "Youssef" };

Object.freeze(obj);

obj.nom = "Lucas"; // Ne fonctionnera pas, l'objet est gelé
console.log(obj.nom); // "Youssef"
