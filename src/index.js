import Home from "./Home.js"
import Menu from "./Menu.js"
import About from "./About.js"
import "./styles.css"
import restaurant from "../asset/restaurant.png"

document.addEventListener('DOMContentLoaded', () => {
    Home();
});
document.getElementById("home-but").addEventListener("click", Home)
document.getElementById("menu-but").addEventListener("click", Menu)
document.getElementById("about-but").addEventListener("click", About)
