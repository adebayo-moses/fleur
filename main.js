import "./style.css";
import { Pane } from "tweakpane";

// function toggleTheme() {
//   if (document.body.classList.contains("dark")) document.body.classList.remove("dark");
//   else document.body.classList.add("dark");
// }
window.toggleTheme = function () {
  if (document.body.classList.contains("dark")) document.body.classList.remove("dark");
  else document.body.classList.add("dark");
};

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
