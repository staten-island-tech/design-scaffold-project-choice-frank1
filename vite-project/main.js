import "./style.css";
import { gsap } from "gsap";
const tl = gsap.timeline({ delay: 0.2 });

tl.from(".head", { opacity: 0, duration: 5 });
