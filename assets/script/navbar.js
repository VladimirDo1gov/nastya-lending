const navbarElements = {
    header: document.querySelector("header"),
    menu: document.querySelector(".menu"),
};

function showMenuBurger() {
    for (let elem of navbarElements.menu.children) {
        if (!elem.classList.contains("menu__icon")) {
            elem.dataset.menuPosition = "absolute";
        }
        if (elem.classList.contains("menu-burger")) {
            elem.dataset.menuPosition = "";
        }
    }
}
function hideMenuBurger() {
    for (let elem of navbarElements.menu.children) {
        if (elem.dataset.menuPosition === "absolute") {
            elem.dataset.menuPosition = "";
        }
        if (elem.classList.contains("menu-burger")) {
            elem.dataset.menuPosition = "absolute";
        }
    }
}

const windowEvents = {
    load() {
        window.addEventListener("load", () => {
            if (document.documentElement.clientWidth < 900) {
                navbarElements.menu.dataset.menu = "burger";
                showMenuBurger();
            }
        });
    },
    scroll() {
        window.addEventListener("scroll", (event) => {
            if (pageYOffset > navbarElements.header.offsetHeight) {
                navbarElements.header.dataset.header = "fixed";
                navbarElements.header.dataset.anim = "move";
            } else {
                navbarElements.header.dataset.header = "";
                navbarElements.header.dataset.anim = "";
            }
        });
    },
    resize() {
        window.addEventListener("resize", (event) => {
            if (document.documentElement.clientWidth < 900 && navbarElements.menu.dataset.menu === "full") {
                navbarElements.menu.dataset.menu = "burger";
                showMenuBurger();
            }
            if (document.documentElement.clientWidth > 900 && navbarElements.menu.dataset.menu === "burger") {
                navbarElements.menu.dataset.menu = "full";
                hideMenuBurger();
            }
        });
    },
};
windowEvents.load();
windowEvents.scroll();
windowEvents.resize();
