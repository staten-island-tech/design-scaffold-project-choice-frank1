import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const DOMSelectors = {
  Destinations: document.querySelector(".Destinations"),
  Foods: document.querySelector(".Food"),
};

const Destination = [
  {
    name: "Leaning Tower Of Pisa",
    img: "https://www.nuestro.cl/wp-content/uploads/2021/10/Tower-of-Pisa.jpg",
    desc: "The Leaning Tower of Pisa is",
  },
  {
    name: "Pantheon",
    img: "https://www.planetware.com/photos-large/I/italy-rome-pantheon-exterior-view.jpg",
    desc: "The Pantheon is",
  },
  {
    name: "Colosseum",
    img: "https://media.nationalgeographic.org/assets/photos/198/897/95a24eaa-5e33-4778-b06c-96654f3dbf87.jpg",
    desc: "The colosseum is",
  },
];
function DisplayDestinations() {
  Destination.forEach((Destination) =>
    DOMSelectors.Destinations.insertAdjacentHTML(
      "afterbegin",
      `<div class="Destinations-Card">
      <img id="Destinations-Image" src="${Destination.img}">
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
  },
  {
    name: "Risotto",
    img: "https://insanelygoodrecipes.com/wp-content/uploads/2020/03/Risotto.png",
    desc: "Risotto is a northern Italian rice dish cooked with broth until it reaches a creamy consistency. The broth can be derived from meat, fish, or vegetables. Many types of risotto contain butter, onion, white wine, and Parmigiano-Reggiano.",
  },
  {
    name: "Polenta",
    img: "https://www.seriouseats.com/thmb/mwfbHAickLC3Av2pjGhz4uuMpjE=/1125x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__20150501-polenta-vicky-wasik-5-018e7507df9940f9b1d9cd0b5f67339b.jpg",
    desc: "Polenta is a dish of boiled cornmeal that was historically made from other grains. The dish comes from Italy. It may be served as a hot porridge, or it may be allowed to cool and solidify into a loaf that can be baked, fried, or grilled.",
  },
  {
    name: "Colosseum",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMspD7Duc-yuSto9h4Rb_Pum6YUbyiPCvFKQ&usqp=CAU",
    desc: "The colosseum is",
  },
  {
    name: "Leaning Tower Of Pisa",
    img: "https://www.nuestro.cl/wp-content/uploads/2021/10/Tower-of-Pisa.jpg",
    desc: "The colosseum is",
  },
  {
    name: "Sample",
    img: "https://www.nuestro.cl/wp-content/uploads/2021/10/Tower-of-Pisa.jpg",
    desc: "The colosseum is",
  },
];
function DisplayFoods() {
  Food.forEach((Food) =>
    DOMSelectors.Foods.insertAdjacentHTML(
      "beforeend",
      `<div class="Food-Card">
      <img id="Food-Image" src="${Food.img}">
      <h5 class="Food-Card-Title">${Food.name}</h5>
      <p class="Food-Desc">${Food.desc}</p>
   </div>`
    )
  );
}
DisplayFoods();

gsap.registerPlugin(ScrollTrigger);

const Home = gsap.timeline({ delay: 0.1 });
Home.from(".Home", { opacity: 0, duration: 0.6, ease: "ease-out" });
Home.from("#home1", { opacity: 0, rotation: 720, duration: 0.8 });
Home.from("#home2", { opacity: 0, rotation: 720, duration: 0.8 });
Home.from("#home3", { opacity: 0, rotation: 720, duration: 0.8 });

const DestinationAnimation = gsap.timeline({
  delay: 0.8,
  scrollTrigger: "Destinations-Head",
});
DestinationAnimation.from(".Destinations-Head", {
  opacity: 0,
  rotation: 90,
  duration: 1.5,
});
DestinationAnimation.from(".Destinations-Card", {
  opacity: 0,
  rotation: 10,
  duration: 1.5,
});
DestinationAnimation.from(".Destinations-Image", {
  duration: 4,
  clipPath: "Polygon( 0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  opacity: 0,
});

const FoodAnimation = gsap.timeline({
  delay: 0.8,
  scrollTrigger: "Destinations-Head",
});
FoodAnimation.from(".Food-Head", {});
