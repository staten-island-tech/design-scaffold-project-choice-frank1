import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const DOMSelectors = {
  Home: document.querySelector(".Home"),
  Destinations: document.querySelector(".Destinations"),
  Foods: document.querySelector(".Food"),
  FoodCard: document.querySelector(".Food-Card"),
  Landscapes: document.querySelector(".Landscape"),
  LandscapeCard: document.querySelector(".Landscape-Card"),
  ThemeButton: document.querySelector("#Themebtn"),
  DestinationCard: document.querySelector(".Destinations-Card"),
};

const Destination = [
  {
    name: "Leaning Tower Of Pisa",
    img: "https://www.nuestro.cl/wp-content/uploads/2021/10/Tower-of-Pisa.jpg",
    desc: "The Leaning Tower of Pisa is pretty lean",
    alt: "The leaning tower of pisa in the sunlight",
  },
  {
    name: "Pantheon",
    img: "https://www.planetware.com/photos-large/I/italy-rome-pantheon-exterior-view.jpg",
    desc: "The Pantheon is one of the best-preserved monuments of ancient Rome. The structure, features a rotunda with a massive domed ceiling that was the largest of its kind when it was built.",
    alt: "The front of the Pantheon",
  },
  {
    name: "Colosseum",
    img: "https://media.nationalgeographic.org/assets/photos/198/897/95a24eaa-5e33-4778-b06c-96654f3dbf87.jpg",
    desc: "The colosseum was a large amphitheater that hosted events like gladiatorial games. Now it is a tourist spot for people visiting Rome.",
    alt: "The colosseum under the clouds",
  },
];
function DisplayDestinations() {
  Destination.forEach((Destination) =>
    DOMSelectors.Destinations.insertAdjacentHTML(
      "afterbegin",
      `<div class="Destinations-Card">
      <img alt="${Destination.alt}" class="Destinations-Image" src="${Destination.img}">
      <h5 class="Destinations-Card-Title">${Destination.name}</h5>
      <p class="Destinations-Desc">${Destination.desc}</p>
   </div>`
    )
  );
}
DisplayDestinations();

const Food = [
  {
    name: "Pizza",
    img: "https://www.eataly.com/wp/wp-content/uploads/2018/08/ech-quattro-mani-matt-roan-pizza-horizontal-web.jpg",
    desc: "Pizza is really good",
    alt: "Delicious Pizza",
    id: "Food1",
  },
  {
    name: "Risotto",
    img: "https://www.macheesmo.com/wp-content/uploads/2020/05/Rotisserie-Chicken-Risotto-1008x700.jpg",
    desc: "Risotto is a northern Italian rice dish cooked with broth until it reaches a creamy consistency. The broth can be derived from meat, fish, or vegetables.",
    alt: "Rice",
    id: "Food2",
  },
  {
    name: "Polenta",
    img: "https://www.seriouseats.com/thmb/mwfbHAickLC3Av2pjGhz4uuMpjE=/1125x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__20150501-polenta-vicky-wasik-5-018e7507df9940f9b1d9cd0b5f67339b.jpg",
    desc: "Polenta is a dish of boiled cornmeal. It may be served as a hot porridge, or it may be allowed to cool and solidify into a loaf that can be baked, fried, or grilled.",
    alt: "Polenta",
    id: "Food3",
  },
  {
    name: "Lasagne",
    img: "https://img.taste.com.au/N5uOwvqw/taste/2021/03/sweet-potato-and-lentil-lasagne-170423-2.jpg",
    desc: "Lasagne is an Italian dish made of stacked layers of lasagne alternating with fillings such as ragù (ground meats and tomato sauce), vegetables, and cheeses. ",
    alt: "A cube of Lasgne",
    id: "Food4",
  },
  {
    name: "Carbonara",
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/0346a29a89ef229b1a0ff9697184f944/Derivates/cb5051204f4a4525c8b013c16418ae2904e737b7.jpg",
    desc: "Risotto is a northern Italian rice dish cooked with broth until it reaches a creamy consistency. The broth can be derived from meat, fish, or vegetables.",
    alt: "Carbonara in the shape of a hill",
    id: "Food5",
  },
  {
    name: "Penne",
    img: "https://afoodloverskitchen.com/wp-content/uploads/2021/04/penne-al-forno-feat.jpg",
    desc: "Polenta is a dish of boiled cornmeal. It may be served as a hot porridge, or it may be allowed to cool and solidify into a loaf that can be baked, fried, or grilled.",
    alt: "Tasty Penne",
    id: "Food6",
  },
];
function DisplayFoods() {
  Food.forEach((Food) =>
    DOMSelectors.Foods.insertAdjacentHTML(
      "beforeend",
      `<div class="Food-Card" id="${Food.id}">
      <img class="Food-Image" alt="${Food.alt}" src="${Food.img}">
      <h5 class="Food-Card-Title">${Food.name}</h5>
      <p class="Food-Desc">${Food.desc}</p>
   </div>`
    )
  );
}
DisplayFoods();

const Landscape = [
  {
    name: "Lake Garda",
    img: "https://media.istockphoto.com/photos/turquoise-lake-garda-and-sailboats-from-above-at-sunset-malcesine-picture-id1221529154?b=1&k=20&m=1221529154&s=170667a&w=0&h=kK1HZR_kc0qbpqMQ0dEbC4V9zhQBWByqfB9ESw7R3Wc=",
    desc: "Lake Garda is the biggest lake in Italy and is known for its crystal clear water",
    alt: "Clear blue ocean with buildings to the right",
    id: "Landscape1",
  },
  {
    name: "Mount Etna",
    img: "https://factpros.com/wp-content/uploads/2020/02/Tourists-are-hiking-towards-Etna-volcano-scaled.jpeg",
    desc: "Mount Etna is the tallest active volcano in Europe. ",
    alt: "People hiking towards Mount Etna",
    id: "Landscape2",
  },
  {
    name: "Grotta della Poesia",
    img: "https://ak-d.tripcdn.com/images/1A0w170000012kb8o33A9.jpg?proc=source%2Ftrip",
    desc: "The Grotta della Poesia is a natural pool surrounded by rugged limestone cliffs, with caves & a tunnel to the open sea.",
    alt: "The Grotta della Poesia under the clouds",
    id: "Landscape3",
  },
];
function DisplayLandscapes() {
  Landscape.forEach((Landscape) =>
    DOMSelectors.Landscapes.insertAdjacentHTML(
      "afterbegin",
      `<div class="Landscape-Card" id="${Landscape.id}">
      <img alt="${Landscape.alt}" class="Landscape-Image" src="${Landscape.img}">
      <h5 class="Landscape-Card-Title">${Landscape.name}</h5>
      <p class="Landscape-Desc">${Landscape.desc}</p>
   </div>`
    )
  );
}
DisplayLandscapes();

DOMSelectors.ThemeButton.addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});

gsap.registerPlugin(ScrollTrigger);

const Home = gsap.timeline({ delay: 0.1 });
Home.from(".Home", {
  opacity: 0,
  duration: 0.6,
  ease: "ease-out",
});
Home.from("#home1", {
  color: "rgb(25, 0, 0)",
  opacity: 0,
  rotation: 180,
  duration: 0.8,
});
Home.from("#home2", {
  color: "rgb(25, 25, 25)",
  opacity: 0,
  rotation: -180,
  duration: 0.8,
});
Home.from("#home3", {
  color: "rgb(0, 25, 0)",
  opacity: 0,
  rotation: 180,
  duration: 0.8,
});

const DestinationAnimation = gsap.timeline({
  delay: 1.5,
  scrollTrigger: ".Destinations-Head",
});
DestinationAnimation.from(".Destinations-Head", { opacity: 0, duration: 1.5 });
DestinationAnimation.from(".Destinations-Card", { x: -2500, duration: 1.2 });
DestinationAnimation.from(".Destinations-Image", {
  delay: 0.4,
  duration: 1.2,
  opacity: 0,
});
DestinationAnimation.from(".Destinations-Card-Title", {
  opacity: 0,
  duration: 0.4,
});
DestinationAnimation.from(".Destinations-Desc", { opacity: 0, duration: 0.4 });

const FoodAnimation = gsap.timeline({
  scrollTrigger: ".Food",
  delay: 1.5,
});
FoodAnimation.from(".Food-Head", { opacity: 0, duration: 0.3 });
FoodAnimation.from(".Food", { opacity: 0, duration: 0.8 });
FoodAnimation.from(".Food-Image", { opacity: 0, duration: 0.8 });
FoodAnimation.from("#Food1", { scaleX: 0, scaleY: 0, duration: 0.3 });
FoodAnimation.from("#Food2", { scaleX: 0, scaleY: 0, duration: 0.3 });
FoodAnimation.from("#Food3", { scaleX: 0, scaleY: 0, duration: 0.3 });
FoodAnimation.from("#Food4", { scaleX: 0, scaleY: 0, duration: 0.3 });
FoodAnimation.from("#Food5", { scaleX: 0, scaleY: 0, duration: 0.3 });
FoodAnimation.from("#Food6", { scaleX: 0, scaleY: 0, duration: 0.3 });

const LandscapeAnimation = gsap.timeline({
  delay: 1.5,
  scrollTrigger: ".Landscape-Head",
});

LandscapeAnimation.from(".Landscape-Head", { opacity: 0, duration: 0.4 });
LandscapeAnimation.to("#Landscape3", {
  clipPath: "circle(80%)",
  opacity: 100,
  duration: 0.4,
});
LandscapeAnimation.to("#Landscape2", {
  clipPath: "circle(80%)",
  opacity: 100,
  duration: 0.4,
});
LandscapeAnimation.to("#Landscape1", {
  clipPath: "circle(80%)",
  opacity: 100,
  duration: 0.4,
});
