const navbarElements = {
    header: document.querySelector("header"),
    menu: document.querySelector(".menu"),
    contacts: document.querySelector(".menu__list-contacts"),
    drop: document.querySelectorAll(".drop-menu"),
    services: document.querySelector(".menu__list-services"),
    menuList: document.querySelectorAll(".menu__list-item"),
};

/**
 * @param {} void
 * Показывает меню-бургер
 */
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
/**
 * @param {} void
 * Скрывает меню-бургер
 */
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
/**
 * @param {} void
 * Показывает/убирает дроп-меню в зависимости от условий
 * если menu__list-item.dataset.drop === true - дроп-меню высплывает
 * если menu__list-item.dataset.drop === false - дроп-меню скрывается
 */
function displayDropMenu(event) {
    let drop = event.target.parentNode.querySelector(".drop-menu"); // Находит дроп внутри родителя
    if (event.target.parentNode.dataset.drop === "false") {
        checkActiveDrop();
        event.target.parentNode.dataset.drop = "true";
        drop.dataset.dropPosition = "fixed"; // Отображает дроп
    } else {
        event.target.parentNode.dataset.drop = "false";
        drop.dataset.dropPosition = "absolute";
    }
}
/**
 * @param {} void
 * Проверяет есть ли открытые дропы
 * Если есть, то закрывает
 */
function checkActiveDrop() {
    for (let elem of navbarElements.menuList) {
        if (elem.dataset.drop === "true") {
            elem.dataset.drop = "false";
            let dropElem = elem.querySelector(".drop-menu");
            dropElem.dataset.dropPosition = "absolute";
        }
    }
}

const windowEvents = {
    load() {
        window.addEventListener("load", () => {
            // dropItem();
            // dropItem1();
            if (document.documentElement.clientWidth < 900) {
                navbarElements.menu.dataset.menu = "burger";
                showMenuBurger();
            }
        });
    },
    scroll() {
        window.addEventListener("scroll", (event) => {
            checkActiveDrop();
            if (pageYOffset > navbarElements.header.offsetHeight) {
                navbarElements.header.dataset.header = "fixed";
                navbarElements.header.dataset.anim = "move";
                document.body.classList.add("pt-80");
            } else {
                navbarElements.header.dataset.header = "";
                navbarElements.header.dataset.anim = "";
                document.body.classList.remove("pt-80");
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

// dropmenu
navbarElements.menu.addEventListener("click", (event) => {
    if (event.target.closest(".menu__list-item") && event.target.parentNode.dataset.drop !== undefined) {
        event.preventDefault();
        displayDropMenu(event);
    }
});

document.body.addEventListener("click", (event) => {
    if (!event.target.closest(".menu__list-item")) {
        for (let elem of document.querySelectorAll(".drop-menu")) {
            if (elem.dataset.dropPosition === "fixed") {
                elem.dataset.dropPosition = "absolute";
            }
        }
    }
});
