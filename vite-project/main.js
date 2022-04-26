import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const DOMSelectors = {
  Dest: document.querySelector(".Destinations"),
};

const Dest = [
  {
    name: "Colosseum",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMspD7Duc-yuSto9h4Rb_Pum6YUbyiPCvFKQ&usqp=CAU",
  },
  {
    name: "Leaning Tower Of Pisa",
    img: "https://www.nuestro.cl/wp-content/uploads/2021/10/Tower-of-Pisa.jpg",
  },
  {
    name: "Sample",
    img: "https://www.nuestro.cl/wp-content/uploads/2021/10/Tower-of-Pisa.jpg",
  },
];

function DisplayDestinations() {
  Dest.forEach((Dest) =>
    DOMSelectors.Dest.insertAdjacentHTML(
      "afterbegin",
      `<div class="Destinations-Card">
      <img id="Destinations-Image" src="${Dest.img}">
      <h3 class="Destinations-Card-Title">${Dest.name}</h3>
   </div>`
    )
  );
}
DisplayDestinations();

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
