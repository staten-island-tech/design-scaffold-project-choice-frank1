import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({ scrollTrigger: ".head7", delay: 0.1 });

tl.from(".head1", { opacity: 0, duration: 0.6, ease: "ease-out" });
tl.from(".head2", { opacity: 0, duration: 0.6, ease: "ease-out" });
tl.from(".head3", { opacity: 0, duration: 0.6, ease: "ease-out" });
tl.from(".head4", { opacity: 0, duration: 0.6, ease: "ease-out" });
tl.from(".head5", { opacity: 0, duration: 0.6, ease: "ease-out" });
tl.from(".head6", { opacity: 0, duration: 0.6, ease: "ease-out" });
tl.from(".head7", { opacity: 0, duration: 0.6, ease: "ease-out" });
