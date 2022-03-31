import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Home = gsap.timeline({ delay: 0.1 });

Home.from("#home1", { opacity: 0, duration: 0.6, ease: "ease-out" });
Home.from("#home2", { opacity: 0, duration: 0.6, ease: "ease-out" });
Home.from("#home3", { opacity: 0, duration: 0.6, ease: "ease-out" });
Home.from(".Home-Image", { opacity: 0, duration: 0.6, ease: "ease-out" });
