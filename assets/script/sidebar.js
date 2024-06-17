//sidebar
const sidebar = document.querySelector(".sidebar");
const btnShow = document.querySelector(".menu-burger");
const backgroundOpacity = document.querySelector(".background-opacity");
const btnClose = document.querySelector(".sidebar__menu-close");

//sidebar drop
const sidebarDrop = document.querySelector(".sidebar-drop");
const sidebarBntClose = document.querySelector(".sidebar-drop__close");
const sidebarServices = document.querySelector(".sidebar__menu-services");

btnShow.addEventListener("click", () => {
    sidebar.dataset.sidebarAnim = "sidebarShow";
    backgroundOpacity.dataset.background = "opacity";
    document.body.dataset.overflow = "hidden";
    // Скрывает сайдбар при клике на бекгранд-опасити
    document.querySelector(".background-opacity").addEventListener(
        "click",
        () => {
            sidebar.dataset.sidebarAnim = "sidebarHide";
            backgroundOpacity.dataset.background = "";
            document.body.dataset.overflow = "";
            if (sidebarServices.dataset.sidebarDrop === "true") {
                sidebarServices.dataset.sidebarDrop = "false";
                sidebarDrop.dataset.sidebarDrop = "hide";
            }
        },
        { once: true }
    );
});

btnClose.addEventListener("click", (event) => {
    sidebar.dataset.sidebarAnim = "sidebarHide";
    backgroundOpacity.dataset.background = "";
    document.body.dataset.overflow = "";
});

//sidebar drop
sidebarServices.addEventListener("click", (event) => {
    event.preventDefault();
    // Показывает сайдбар-дроп
    if (sidebarServices.dataset.sidebarDrop === "false") {
        sidebarServices.dataset.sidebarDrop = "true";
        sidebarDrop.dataset.sidebarDrop = "show";
    }
    // Скрывает сайдбар-дроп
    else {
        sidebarServices.dataset.sidebarDrop = "false";
        sidebarDrop.dataset.sidebarDrop = "hide";
    }
});
// Кнопка закрывающая дроп
sidebarBntClose.addEventListener("click", (event) => {
    if (sidebarServices.dataset.sidebarDrop === "true") {
        sidebarServices.dataset.sidebarDrop = "false";
        sidebarDrop.dataset.sidebarDrop = "hide";
    }
});
