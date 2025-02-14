import { Application } from "@splinetool/runtime";
import { gsap } from "https://cdn.skypack.dev/gsap@3.12.2";
import { ScrollTrigger } from "https://cdn.skypack.dev/gsap@3.12.2/ScrollTrigger.js";

document.getElementById("hero").innerHTML = `
  <canvas id="canvas3d" style="width: 100%; height: 100vh;"></canvas>
`;
const canvas = document.getElementById("canvas3d");
const app = new Application(canvas);

// Load the Spline scene
app.load("https://prod.spline.design/a8oCBFrgwWkV9LVi/scene.splinecode");

// smooth scrolling
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    "#slowText",
    { y: "-55%" },
    {
      y: "10%",
      ease: "none",
      scrollTrigger: {
        trigger: "#slowText",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    }
  );
});
