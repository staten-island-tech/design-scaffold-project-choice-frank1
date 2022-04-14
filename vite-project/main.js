import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const DOMSelectors = {
  Destinations: document.querySelector(".Destinations"),
};
const Destinations = [
  {
    name: "Col",
  },
];
gsap.registerPlugin(ScrollTrigger);

const Home = gsap.timeline({ delay: 0.1 });
Home.from(".Home", { opacity: 0, duration: 0.6, ease: "ease-out" });
Home.from("#home1", { opacity: 0, rotation: 720, duration: 0.8 });
Home.from("#home2", { opacity: 0, rotation: 720, duration: 0.8 });
Home.from("#home3", { opacity: 0, rotation: 720, duration: 0.8 });

const Destinations = gsap.timeline({
  delay: 0.8,
  scrollTrigger: "Destinations-Head",
});
Destinations.from(".Destinations-Head", {
  opacity: 0,
  rotation: 90,
  duration: 1.5,
});
Destinations.from(".Destinations-Card", {
  opacity: 0,
  rotation: 10,
  duration: 1.5,
});
Destinations.from(".Destinations-Image", {
  duration: 4,
  clipPath: "Polygon( 0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  opacity: 0,
});

function DisplayDestinations() {
  const hi = {};
  hi.name = hi.name;
  hi.image = hi.img;
  food.forEach((hi) =>
    DOMSelectors.box.insertAdjacentHTML(
      "afterbegin",
      `<div class = "Destinations-Card">
  <img class="Destinations-Image" src="${hi.img}">
  <h2 class ="Destinations-Card-Title"> ${hi.name} </h2> 
  </div>`
    )
  );
}
DisplayDestinations();
