import "./style.css";

// function toggleTheme() {
//   if (document.body.classList.contains("dark")) document.body.classList.remove("dark");
//   else document.body.classList.add("dark");
// }
window.toggleTheme = function () {
  if (document.body.classList.contains("dark")) document.body.classList.remove("dark");
  else document.body.classList.add("dark");
};
