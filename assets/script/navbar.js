const header = document.querySelector("header");
const menu = document.querySelector(".menu");
window.addEventListener("scroll", (event) => {
    if (pageYOffset > header.offsetHeight) {
        header.dataset.header = "fixed";
        header.dataset.anim = "move";
    } else {
        header.dataset.header = "";
        header.dataset.anim = "";
    }
});

window.addEventListener("resize", (event) => {
    if (document.documentElement.clientWidth < 900 && menu.dataset.menu === "full") {
        menu.dataset.menu = "burger";
        console.log(1);
        for (let elem of menu.children) {
            if (!elem.classList.contains("menu__icon")) {
                elem.dataset.menuPosition = "absolute";
            }
            if (elem.classList.contains("menu-burger")) {
                elem.dataset.menuPosition = "";
            }
        }
    }
    if (document.documentElement.clientWidth > 900 && menu.dataset.menu === "burger") {
        menu.dataset.menu = "full";
        for (let elem of menu.children) {
            if (elem.dataset.menuPosition === "absolute") {
                elem.dataset.menuPosition = "";
            }
            if (elem.classList.contains("menu-burger")) {
                elem.dataset.menuPosition = "absolute";
            }
        }
    }
});
