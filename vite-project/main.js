import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Home = gsap.timeline({ delay: 0.1 });

Home.from(".head1", { opacity: 0, duration: 0.6, ease: "ease-out" });
Home.from(".head2", { opacity: 0, duration: 0.6, ease: "ease-out" });
Home.from(".head3", { opacity: 0, duration: 0.6, ease: "ease-out" });

ScrollTrigger.create({
  trigger: "#header",
  start: "top top",
  end: "bottom 100px",
  pin: "#header",
});
