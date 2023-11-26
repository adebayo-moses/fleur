import "./style.css";
import { gsap } from "gsap";
// import { Pane } from "tweakpane";

// function toggleTheme() {
//   if (document.body.classList.contains("dark")) document.body.classList.remove("dark");
//   else document.body.classList.add("dark");
// }

// tailwind config for dark mode
// tailwind.config = {
//   darkMode: "class",
// };

window.toggleTheme = function () {
  if (document.body.classList.contains("dark")) document.body.classList.remove("dark");
  else document.body.classList.add("dark");
};

// function toggleTheme() {
//   const html = document.querySelector("html");
//   html.classList.toggle("dark");
// }

// check if debug param is present or environment is dev
const hasDebugParam = new URLSearchParams(window.location.search).has("debug");
const isDev = process.env.NODE_ENV === "development";

// create settings pane if debug enabled
let pane;
if (hasDebugParam || isDev) {
  // create pane component
  pane = new Pane({
    title: "Settings",
    expanded: isDev, // start expanded in dev env
  });

  // mount to DOM
  const root = document.getElementById("main");
  root.appendChild(pane.render());
}

// interact with pane using pane instance
pane.toggleExpansion();
pane.update({ title: "New Title" });

// lottie hero
// Initialize Lottie
const animationContainer = document.getElementById("lottie-container");
const animationOptions = {
  container: animationContainer,
  renderer: "svg", // Change to "canvas" if needed
  loop: true, // Set to false if you don't want loop
  autoplay: false, // Do not autoplay initially
  path: "https://wiicreate.com/assets/documents/Hero-Animation.json", // Replace with the URL to your Lottie JSON file
};
const animation = lottie.loadAnimation(animationOptions);

// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Create a ScrollTrigger to play the animation on scroll
ScrollTrigger.create({
  trigger: animationContainer,
  start: "top center", // Adjust as needed
  end: "bottom center", // Adjust as needed
  animation: animation,
  scrub: true, // Smooth scrubbing effect
  markers: true, // Remove this line in production
});
