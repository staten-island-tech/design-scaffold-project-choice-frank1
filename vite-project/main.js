import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const DOMSelectors = {
  Destinations: document.querySelector(".Destinations"),
  Foods: document.querySelector(".Food"),
  FoodCard: document.querySelector(".Food-Card"),
  Landscapes: document.querySelector(".Landscape"),
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
    desc: "The Pantheon is",
    alt: "The front of the Pantheon",
  },
  {
    name: "Colosseum",
    img: "https://media.nationalgeographic.org/assets/photos/198/897/95a24eaa-5e33-4778-b06c-96654f3dbf87.jpg",
    desc: "The colosseum is a big circle",
    alt: "The colosseum under the clouds",
  },
];
function DisplayDestinations() {
  Destination.forEach((Destination) =>
    DOMSelectors.Destinations.insertAdjacentHTML(
      "afterbegin",
      `<div class="Destinations-Card">
      <img alt="${Destination.alt}" id="Destinations-Image" src="${Destination.img}">
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
  },
  {
    name: "Risotto",
    img: "https://www.macheesmo.com/wp-content/uploads/2020/05/Rotisserie-Chicken-Risotto-1008x700.jpg",
    desc: "Risotto is a northern Italian rice dish cooked with broth until it reaches a creamy consistency. The broth can be derived from meat, fish, or vegetables.",
    alt: "Rice",
  },
  {
    name: "Polenta",
    img: "https://www.seriouseats.com/thmb/mwfbHAickLC3Av2pjGhz4uuMpjE=/1125x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__20150501-polenta-vicky-wasik-5-018e7507df9940f9b1d9cd0b5f67339b.jpg",
    desc: "Polenta is a dish of boiled cornmeal. It may be served as a hot porridge, or it may be allowed to cool and solidify into a loaf that can be baked, fried, or grilled.",
    alt: "Polenta",
  },
  {
    name: "Lasagne",
    img: "https://img.taste.com.au/N5uOwvqw/taste/2021/03/sweet-potato-and-lentil-lasagne-170423-2.jpg",
    desc: "Lasagne is really good",
    alt: "A cube of Lasgne",
  },
  {
    name: "Carbonara",
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/0346a29a89ef229b1a0ff9697184f944/Derivates/cb5051204f4a4525c8b013c16418ae2904e737b7.jpg",
    desc: "Risotto is a northern Italian rice dish cooked with broth until it reaches a creamy consistency. The broth can be derived from meat, fish, or vegetables.",
    alt: "Carbonara in the shape of a hill",
  },
  {
    name: "Penne",
    img: "https://afoodloverskitchen.com/wp-content/uploads/2021/04/penne-al-forno-feat.jpg",
    desc: "Polenta is a dish of boiled cornmeal. It may be served as a hot porridge, or it may be allowed to cool and solidify into a loaf that can be baked, fried, or grilled.",
    alt: "Tasty Penne",
  },
];
function DisplayFoods() {
  Food.forEach((Food) =>
    DOMSelectors.Foods.insertAdjacentHTML(
      "beforeend",
      `<div class="Food-Card">
      <img id="Food-Image" alt="${Food.alt}" src="${Food.img}">
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
    alt: "The leaning tower of pisa in the sunlight",
  },
  {
    name: "Mount Etna",
    img: "https://factpros.com/wp-content/uploads/2020/02/Tourists-are-hiking-towards-Etna-volcano-scaled.jpeg",
    desc: "Mount Etna is the tallest active volcano in Europe. ",
    alt: "People hiking Mount Etna",
  },
  {
    name: "Colosseum",
    img: "https://media.nationalgeographic.org/assets/photos/198/897/95a24eaa-5e33-4778-b06c-96654f3dbf87.jpg",
    desc: "The colosseum is a big circle",
    alt: "The colosseum under the clouds",
  },
];
function DisplayLandscapes() {
  Landscape.forEach((Landscape) =>
    DOMSelectors.Landscapes.insertAdjacentHTML(
      "afterbegin",
      `<div class="Landscape-Card">
      <img alt="${Landscape.alt}" id="Landscape-Image" src="${Landscape.img}">
      <h5 class="Landscape-Card-Title">${Landscape.name}</h5>
      <p class="Landscape-Desc">${Landscape.desc}</p>
   </div>`
    )
  );
}
DisplayLandscapes();

gsap.registerPlugin(ScrollTrigger);

const Home = gsap.timeline({ delay: 0.1 });
Home.from(".Home", { opacity: 0, duration: 0.6, ease: "ease-out" });
Home.from("#home1", { opacity: 0, rotation: 180, duration: 0.8 });
Home.from("#home2", { opacity: 0, rotation: 180, duration: 0.8 });
Home.from("#home3", { opacity: 0, rotation: 180, duration: 0.8 });

const DestinationAnimation = gsap.timeline({
  delay: 0.8,
  scrollTrigger: "Destinations-Head",
});
DestinationAnimation.from(".Destinations-Head", {
  opacity: 0,
  duration: 1.5,
});
DestinationAnimation.from(".Destinations-Card", {
  opacity: 0,
  duration: 1.5,
});
DestinationAnimation.from(".Destinations-Image", {
  duration: 4,
  opacity: 0,
});

const FoodAnimation = gsap.timeline({
  delay: 0.8,
  scrollTrigger: "Food-Head",
});
FoodAnimation.from(".Food-Head", {
  duration: 1,
  opacity: 0,
});
FoodAnimation.from(".Food", {
  duration: 1,
  opacity: 0,
});
FoodAnimation.from(".Food-Card", {
  duration: 1,
  opacity: 0,
});
