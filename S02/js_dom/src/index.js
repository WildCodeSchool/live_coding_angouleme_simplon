const houseToRent = [
  {
    name: "Modern flat",
    type: "House",
    desc: "This is the perfect house for you, come to visit it you'll love it ",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    available: true,
  },
  {
    name: "Beautiful design house",
    type: "House",
    desc: "This is the perfect house for you, come to visit it you'll love it ",
    img: "https://images.adsttc.com/media/images/5de3/1ca6/3312/fda8/2a00/00b3/newsletter/001.jpg?1575165037",
    available: true,
  },
  {
    name: "Beautiful House",
    type: "House",
    desc: "This is the perfect house for you, come to visit it you'll love it ",
    img: "https://images.adsttc.com/media/images/5de3/1ca6/3312/fda8/2a00/00b3/newsletter/001.jpg?1575165037",
    available: false,
  },
  {
    name: "Wonderful house with Garden",
    type: "House",
    desc: "This is the perfect house for you, come to visit it you'll love it ",
    img: "https://images.unsplash.com/photo-1585773690161-7b1cd0accfcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    available: true,
  },
  {
    name: "My super Flat ",
    type: "Flat",
    desc: "This is the perfect flat for you, come to visit it you'll love it ",
    img: "https://images.unsplash.com/photo-1585773690161-7b1cd0accfcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    available: true,
  },
];

function createCard(name, img, desc) {
  // This function should create a card item
  // cibler le parent ou on va injecter les enfants
  const parent = document.querySelector(".cards");
  // creer la div avec la class card
  const card = document.createElement("div");
  // ajouter un attribut class `card
  card.classList.add("card");
  // creer une div avec la class card-header
  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  // creer une div avec la class card-image
  const cardImage = document.createElement("div");
  cardImage.classList.add("card-img");
  cardImage.style.backgroundImage = `url(${img})`;
  // injecter la div card-image dans card header
  cardHeader.appendChild(cardImage);
  // injecter la div card header dans card
  card.appendChild(cardHeader);
  // creer la card body
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  // creer un h2 class card-title
  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = name;
  // creer une paragraph class card-description
  const cardDescription = document.createElement("p");
  cardDescription.classList.add("card-description");
  cardDescription.textContent = desc;
  // creer un button
  const cardButton = document.createElement("button");
  cardButton.classList.add("card-button");
  cardButton.textContent = "I want it!";
  // inject h2, p, button dans card-body
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardDescription);
  cardBody.appendChild(cardButton);
  // injecter card body dans card
  card.appendChild(cardBody);
  // injecter card dans parent
  parent.appendChild(card);
}

// for (let index = 0; index < houseToRent.length; index++) {
//   createCard(
//     houseToRent[index].name,
//     houseToRent[index].img,
//     houseToRent[index].desc
//   );
// }

houseToRent.map(({ name, img, desc }) => {
  createCard(name, img, desc);
});
